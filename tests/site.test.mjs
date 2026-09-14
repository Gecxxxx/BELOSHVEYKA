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
   const [dest,hash]=match[1].split('#');
   if(dest.startsWith('/assets/')){await access('dist/client'+dest);continue;}
   const target=dest||path;assert.ok(pages[target],`Unknown target ${target}`);
   if(hash){const destination=await readFile('dist/client'+target+'index.html','utf8');assert.ok(destination.includes(`id="${hash}"`),`Missing ${target}#${hash}`)}
  }
 }
});
test('Service pages have individual content and required assets',async()=>{
 assert.equal(services.length,5);
 for(const s of services){await access('public/assets/'+s.image+'.webp');assert.ok(s.details.length===3)}
});
