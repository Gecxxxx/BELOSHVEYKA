import {createServer} from 'vite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pages} from '../src/data.js';
const out=resolve('dist/client');
const template=await readFile(resolve(out,'index.html'),'utf8');
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
try{
 const {App}=await server.ssrLoadModule('/src/App.jsx');
 const React=await import('react');
 const {renderToString}=await import('react-dom/server');
 for(const [path,[title,description]] of Object.entries(pages)){
  // Only used by the shared navigation during static rendering.
  globalThis.location={pathname:path};
  const markup=renderToString(React.createElement(App,{pathname:path}));
  const html=template.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/>/,`<meta name="description" content="${escape(description)}" />`).replace('<div id="root"></div>',`<div id="root">${markup}</div>`);
  const dir=resolve(out,'.'+path);await mkdir(dir,{recursive:true});await writeFile(resolve(dir,'index.html'),html);
  if(path==='/404/')await writeFile(resolve(out,'404.html'),html);
 }
 await writeFile(resolve(out,'robots.txt'),'User-agent: *\nDisallow: /\n');
 console.log(`Prerendered ${Object.keys(pages).length} routes. Preview indexing disabled until launch.`);
}finally{delete globalThis.location;await server.close()}
