const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/_app/immutable/entry/app.9w1Petve.js",s+"/_app/immutable/nodes/0.EgAf366R.js",s+"/_app/immutable/assets/0.nWvdaAwl.css",s+"/_app/immutable/nodes/1.DqPzsGdJ.js",s+"/_app/immutable/nodes/2.C1x-vwat.js",s+"/_app/immutable/assets/2.CtLR6vgv.css",s+"/_app/immutable/chunks/attributes.C6oqUbTx.js",s+"/_app/immutable/chunks/disclose-version.BdZn2vBI.js",s+"/_app/immutable/chunks/entry.B4sumxgp.js",s+"/_app/immutable/chunks/index-client.BdGKWncM.js",s+"/_app/immutable/chunks/lifecycle.Bl7f_Zys.js",s+"/_app/immutable/chunks/paths.Dr3YTfsJ.js",s+"/_app/immutable/chunks/runtime.BT8qFkc0.js",s+"/_app/immutable/entry/start.DAQgU1fM.js"],u=[s+"/.nojekyll",s+"/apple-touch-icon-180x180.png",s+"/favicon.ico",s+"/favicon.png",s+"/img/bg.jpg",s+"/img/cooking-features.jpg",s+"/img/cooking-traditions.jpg",s+"/img/jean-de-lessard-izakaya-kinoya-restaurant-montreal-designboom.jpg",s+"/img/live-food.jpg",s+"/img/pagoda.png",s+"/img/sushi_2.jpg",s+"/img/sushi_3.jpg",s+"/img/sushi_4.png",s+"/img/yukihira_logo-square.png",s+"/manifest.json",s+"/maskable-icon-512x512.png",s+"/pwa-192x192.png",s+"/pwa-512x512.png",s+"/pwa-64x64.png",s+"/yukihira-logo.png"],m="1720163374309",c=`cache-${m}`,p=[...l,...u];self.addEventListener("install",a=>{async function i(){const t=await caches.open(c),n=[];p.forEach(e=>{n.push(t.add(e).catch(()=>console.error(`Can't load ${e} to cache.`)))}),await Promise.all(n)}a.waitUntil(i())});self.addEventListener("activate",a=>{async function i(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}a.waitUntil(i())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function i(){const t=new URL(a.request.url),n=await caches.open(c);if(p.includes(t.pathname)){const e=await n.match(t.pathname);if(e)return e}try{const e=await fetch(a.request),o=t.protocol==="http:"||t.protocol==="https:",r=e.status===200;if(!(e instanceof Response))throw new Error("Invalid response from fetch");return o&&r&&n.put(a.request,e.clone()),e}catch{const o=await n.match(a.request);if(o)return o}return new Response("Not Found",{status:404})}a.respondWith(i())});self.addEventListener("message",a=>{a.data&&a.data.type==="SKIP_WAITING"&&self.skipWaiting()});
