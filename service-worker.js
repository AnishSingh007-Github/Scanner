if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const f=e=>c(e,a),b={module:{uri:a},exports:r,require:f};i[a]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-icon-144x144.e25a58ed.png",revision:"97382a4fddcb92e309300cc2c313c317"},{url:"android-icon-192x192.090d071c.png",revision:"5f4ec987db420d90cef3bdea5592e47b"},{url:"android-icon-36x36.aa101ae0.png",revision:"66ef081cb76e5be8e74245c05aa0b256"},{url:"android-icon-48x48.6c2e92ad.png",revision:"086734b88d6808e2038ce391260c00de"},{url:"android-icon-72x72.8d30ae96.png",revision:"e6472a7de495f403628dfbbad45a3d8c"},{url:"android-icon-96x96.c49773cb.png",revision:"d39bf506b334326427beda5b2df57f65"},{url:"apple-icon-114x114.2bde0286.png",revision:"57b29233ab79a66c61b981953895bf73"},{url:"apple-icon-120x120.774ea90a.png",revision:"0685b0db342723bf02d3177c3df9fad1"},{url:"apple-icon-144x144.e25a58ed.png",revision:"97382a4fddcb92e309300cc2c313c317"},{url:"apple-icon-152x152.777fc08b.png",revision:"a73e61bc136b92bd92cd53a71fe2b250"},{url:"apple-icon-180x180.eb5f4170.png",revision:"28b05de4727cf4772b958cef2bec5afb"},{url:"apple-icon-57x57.1c9b945d.png",revision:"aa420eb7e06793f62ea84f0f4077646f"},{url:"apple-icon-60x60.290ffe61.png",revision:"49ac45e28c5c938cd4bae038e00a6bb0"},{url:"apple-icon-72x72.8d30ae96.png",revision:"e6472a7de495f403628dfbbad45a3d8c"},{url:"apple-icon-76x76.2e5d4bb9.png",revision:"96a583e2abe03926de87b5dc2357df9d"},{url:"es.178701ed.js",revision:"fa9db49036ab8976723ee0d9185d9870"},{url:"es.178701ed.js.map",revision:"56caa4ff05ebf246d41d7a7498fb7f74"},{url:"es.5c76d051.js",revision:"173a0b5910337c9a525532ba1352edb7"},{url:"es.5c76d051.js.map",revision:"aff9285463ca7e493e19042bf0bc40e6"},{url:"favicon-16x16.db68a8a5.png",revision:"d028db8fb2fd740e212ed6f9f3bef1ea"},{url:"favicon-32x32.a1eb7c2e.png",revision:"2e30312cdbea68d35ebe619aa42020de"},{url:"favicon-96x96.c49773cb.png",revision:"d39bf506b334326427beda5b2df57f65"},{url:"favicon.7b8140d0.ico",revision:"42156ff8a9c64efccee3302f0a82bf5a"},{url:"index.31491786.js",revision:"f6faea79b788c98e03d58283904d1e64"},{url:"index.31491786.js.map",revision:"54631650c26b1f456f435b40c27f3508"},{url:"index.3fa85640.css",revision:"ba42ee8834260621d77b427f4c97dec1"},{url:"index.3fa85640.css.map",revision:"8522919cfa837ee9102bf4c235657ef5"},{url:"index.7d90ed55.css",revision:"2ff0c0c528814f084e58f7947d563f31"},{url:"index.7d90ed55.css.map",revision:"b75527f43765d8f789bba646c5bfdcb9"},{url:"index.89efe45b.js",revision:"6814a61841cd719f59765d1ee48ea09a"},{url:"index.89efe45b.js.map",revision:"158c10f9f3d6dc52625c1c594fc7cebf"},{url:"index.d44e81ec.js",revision:"b90a75d7c5128c18c30bf621d43c8122"},{url:"index.d44e81ec.js.map",revision:"05e257eb5b069a254719ec34dc67801e"},{url:"index.e9584a8c.js",revision:"32d2758355e099096ecabbc36109be42"},{url:"index.e9584a8c.js.map",revision:"a72e41a57482a14965ffa33ed1634029"},{url:"index.html",revision:"cea0cdf4565a97f0b22c36340e7b705e"},{url:"index.runtime.00e3ca13.js",revision:"873cd7e8eb08795571568a50e9d3ace1"},{url:"index.runtime.00e3ca13.js.map",revision:"05d529cdaf99c4031f85f8260afa70a4"},{url:"index.runtime.8d2d2b90.js",revision:"9335051ecf845e416657ef2762849b3a"},{url:"index.runtime.8d2d2b90.js.map",revision:"830ccce44b57c3b27f80f2411238e72c"},{url:"manifest.webmanifest",revision:"1e40bac1ec106be2a58e5c5b559a3107"},{url:"screenshot-dark.97f12190.png",revision:"4d90f3fb65bf970a5600c314cd0e96c0"},{url:"screenshot-light.4a793c5e.png",revision:"cd7bff0ca287afc72275c3f798b0e526"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
