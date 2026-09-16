import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {pages,services} from '../src/data.js';
test('All routes have prerendered content and unique metadata',async()=>{
 const titles=new Set();
 for(const [path,[title]] of Object.entries(pages)){
  const html=await readFile('dist/client'+path+'index.html','utf8');
  assert.ok(html.includes(title));assert.ok(html.includes('<h1'));assert.ok(html.includes('lang="ru"'));assert.ok(!titles.has(title));titles.add(title);
 }
});
test('Every internal link resolves to a built route or existing section',async()=>{
 for(const path of Object.keys(pages)){
  const html=await readFile('dist/client'+path+'index.html','utf8');
  for(const match of html.matchAll(/href="(\/[^"]*|#[^"]*)"/g)){
   const url=new URL(match[1].replaceAll('&amp;','&'),'https://example.test'+path);
   const dest=url.pathname,hash=url.hash.slice(1);
   if(dest.startsWith('/assets/')||dest.startsWith('/documents/')){await access('dist/client'+dest);continue;}
   const target=dest||path;assert.ok(pages[target],`Unknown target ${target}`);
   if(hash){const destination=await readFile('dist/client'+target+'index.html','utf8');assert.ok(destination.includes(`id="${hash}"`),`Missing ${target}#${hash}`)}
  }
 }
});
test('Service pages have individual content and required assets',async()=>{
 assert.equal(services.length,5);
 for(const s of services){await access('public/assets/'+s.image+'.webp');assert.ok(s.details.length===3)}
});

test('Every rendered image is a non-empty local file and old sales phones are absent',async()=>{
 const checked=new Set();
 for(const path of Object.keys(pages)){
  const html=await readFile('dist/client'+path+'index.html','utf8');
  assert.ok(!html.includes('679-41-80'));
  assert.ok(!html.includes('222-63-05'));
  for(const match of html.matchAll(/src="(\/assets\/[^"?]+)"/g)){
   if(checked.has(match[1]))continue;
   const bytes=await readFile('dist/client'+match[1]);assert.ok(bytes.length>100,`Empty asset ${match[1]}`);checked.add(match[1]);
  }
 }
 assert.ok(checked.size>30);
});
test('Catalog has independent product pages and no automatic stock promises',async()=>{
 const {products,contact}=await import('../src/data.js');
 assert.equal(products.length,23);assert.equal(new Set(products.map(p=>p.slug)).size,23);
 assert.equal(contact.tel,'tel:+79162371559');
 for(const p of products){
  assert.ok(p.price>0&&Number.isFinite(p.price));
  const html=await readFile('dist/client/catalog/product/'+p.slug+'/index.html','utf8');
  assert.ok(html.includes('Наличие и размеры уточняются'));
  assert.ok(html.includes('?product='+p.id));
 }
 const pdf=await readFile('dist/client/documents/certificate-beloshveyka.pdf');assert.equal(pdf.subarray(0,4).toString(),'%PDF');
});
