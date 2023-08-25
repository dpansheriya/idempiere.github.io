(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"8c28c8e7b9e2fe7b53bff772f7f7673f","url":"404.html"},{"revision":"e140a15bdafc575b397d2a37a845ae87","url":"assets/css/styles.650850b4.css"},{"revision":"d3e1b12794eb55223a26ed89a029be2b","url":"assets/js/0298219e.c0a8acbb.js"},{"revision":"f71269b4f1aa7752c94930f7198990b3","url":"assets/js/131.318acddd.js"},{"revision":"c6ffbb92538058598a9e39a8fb88a4dc","url":"assets/js/14a82d4e.da639f60.js"},{"revision":"e283f063a7b032921de8b185297f5e66","url":"assets/js/14eb3368.957095b4.js"},{"revision":"42f5f9110c8fb2ecb8d8bf27712a769b","url":"assets/js/17896441.5185706f.js"},{"revision":"df137b1e4116389712f0cae29dfb0ecd","url":"assets/js/1be78505.9b98b94f.js"},{"revision":"d52a231c0d3e1d2bb1875d319ebf7d59","url":"assets/js/1f391b9e.f4972b98.js"},{"revision":"784f1aae6129eef177d537ecfd345006","url":"assets/js/1fa540be.8d76b2a0.js"},{"revision":"ee80b3b3af48902a34aeb747c6ce75d1","url":"assets/js/230.ae2a6d30.js"},{"revision":"408f8bf2a8bcdcd369aa7127d1fdff04","url":"assets/js/272.cfbd7cd9.js"},{"revision":"4502781292fd146d402a7a94c3ebcb32","url":"assets/js/283.e244a6d6.js"},{"revision":"7986d835f8c5234b4c87099fa6d173f4","url":"assets/js/30b07825.b5f8bc08.js"},{"revision":"4c314a404df7b870bd1c0918746f4181","url":"assets/js/339.64155f01.js"},{"revision":"a1d3acffb325ef950dfbfe52f9508e68","url":"assets/js/343.d8f1bfcf.js"},{"revision":"9f8bd84088aab6dbe8409d77fc29d227","url":"assets/js/393be207.509be332.js"},{"revision":"7fd0784318bc6e3c2d26453f625cfac8","url":"assets/js/4434b244.c4b13af6.js"},{"revision":"33e853cafacb9e23654bf90801f1d82b","url":"assets/js/4da2b5fd.92564dda.js"},{"revision":"31def44716fa9c8ec6ec92b4c925651d","url":"assets/js/5c50b74d.7ba8cd3c.js"},{"revision":"2ec0c1d0d89e610c50def872cc211700","url":"assets/js/878.64b849e9.js"},{"revision":"5cca6c957b31c8d6b22de8bd54b3fd3c","url":"assets/js/935f2afb.553c2686.js"},{"revision":"b36175a0d427ca8e8b403cb4a17e1d0d","url":"assets/js/968.f68a9c36.js"},{"revision":"6476e99f04f0a29132932bfbe0d91ef5","url":"assets/js/972.cf4de870.js"},{"revision":"8796c7ad256d80757127e8ef6eb75c3f","url":"assets/js/a09c2993.e970489d.js"},{"revision":"d8da58ac35505fa0e2c4b32cee9c61ed","url":"assets/js/a7a4054d.255dddaa.js"},{"revision":"ef65f2c503f1992e0d75428380b71faa","url":"assets/js/aa7c659e.f417fb00.js"},{"revision":"7302904e9dc25ee3a9056af47930decc","url":"assets/js/b343bbea.f027c7b1.js"},{"revision":"2ba65b37896f81a4f08640772fdad2a4","url":"assets/js/b6632e17.edecf485.js"},{"revision":"1ad5659cc79ae39293ca86ed3dcd4eb5","url":"assets/js/bb6b6b6a.ba72c037.js"},{"revision":"8ac263ac4e9c7cb3773cb75bdd2a3777","url":"assets/js/c4f5d8e4.0ef86c22.js"},{"revision":"9882dfc8d1638108b4435b847c1fcc6e","url":"assets/js/c68924d2.4590f22d.js"},{"revision":"673eed8c72319f2d4240dbbf4b6f396d","url":"assets/js/c905a3c7.418bc852.js"},{"revision":"67cdc289ee72261e63f82c8023ef8dce","url":"assets/js/cd52d100.b8bbd34a.js"},{"revision":"4ce78302215f0ae6818f4f6445cec401","url":"assets/js/d0b3daeb.e1bec997.js"},{"revision":"dad0cccdd362733561a327ba669e949e","url":"assets/js/d77b18e9.1849c619.js"},{"revision":"9f454425d379136a4fa27428ad612412","url":"assets/js/d9066fce.5f6d5f00.js"},{"revision":"092cae3f453af888bdb60cf8839572fe","url":"assets/js/e98b768d.6b3a68c1.js"},{"revision":"f687a342141eef9343ceabfced1793e0","url":"assets/js/f0bc198e.c685c750.js"},{"revision":"c2270df6f21f42692d4de393c2e35d7f","url":"assets/js/f8b59821.ad8671d1.js"},{"revision":"3c3ca7b66c58a9b179df8575ad66c96f","url":"assets/js/ffc9cee6.630c04f4.js"},{"revision":"9992df8da23d6604d9334a13fd336d52","url":"assets/js/fffa350d.85fa1be6.js"},{"revision":"bc5db08b61c98da6cd748c54f138af5e","url":"assets/js/main.7bb88df2.js"},{"revision":"ebd5047ab435f9ec6f55130375547d3c","url":"assets/js/runtime~main.cb7dd85a.js"},{"revision":"afa3e76d7c9fea8f6a9ed8efa8145672","url":"docs/basic-development/introduction.html"},{"revision":"f568a36c0df9581a125727473eccace3","url":"docs/basic-functional/introduction.html"},{"revision":"9ad4b99d97113ff71bd83cb1d4de9daf","url":"docs/basic-functional/vocabulary.html"},{"revision":"e067d58d6278c84e9c59024f7b3a2cfa","url":"docs/basic-installation/docker.html"},{"revision":"6c67b3cd661236301e89fea2e3fc8120","url":"docs/basic-installation/introduction.html"},{"revision":"015b90c2feab0d7b115d8beb8cf93032","url":"docs/basic-installation/manual-install/downloading-installer.html"},{"revision":"5e20464e7878fea3470d341c79615ef4","url":"docs/basic-installation/manual-install/install-prerequisites.html"},{"revision":"d15febf8d6de36fa7cbefef4cf542b4b","url":"docs/basic-installation/manual-install/installing-from-installers.html"},{"revision":"277b574d0cd2421bf0bd5c180fb690a9","url":"docs/basic-installation/manual-install/post-installation.html"},{"revision":"ca82a3206def2b35c71d24a9710883d9","url":"docs/basic-installation/manual-install/running-idempiere-from-installers.html"},{"revision":"ce13ae07625e281f4a5c35c5a6134d0e","url":"docs/basic-installation/scripted-installation.html"},{"revision":"42bcc4256d494506c1144db83f06da53","url":"docs/basic-primers/accounting-primer.html"},{"revision":"ff9af6f919775340189724985b2eae1e","url":"docs/basic-primers/introduction.html"},{"revision":"4a871396c520e3e0734447c8c6c75d6a","url":"docs/basic-primers/linux-primer.html"},{"revision":"8e5ad8ec7b617920e2ccf30cc68a6940","url":"docs/basic-primers/sql-database-primer.html"},{"revision":"8c1f4f335ceaf025fd9a0aac9e076dc4","url":"docs/category/basic-development.html"},{"revision":"60d32945907eb60e6b1130dbb88bf234","url":"docs/category/basic-functional.html"},{"revision":"71e290c88b4f907967ce51cf0213c109","url":"docs/category/basic-installation.html"},{"revision":"68762ea6b1b311b13f6f0fa436555be0","url":"docs/category/basic-primers.html"},{"revision":"49b7fab3dbf01b0ba058c941a4a6403f","url":"docs/category/manual-install.html"},{"revision":"5993b30e0a65acc0f8729c9d4a0026e1","url":"docs/documentation-standards.html"},{"revision":"c800cbd26d585164d8997ecfae3ce691","url":"docs/introduction.html"},{"revision":"194f61b7c2e9069fdbd809c7bf388edf","url":"index.html"},{"revision":"79a0c50fb0976ed59c262c2323e9fde4","url":"lunr-index-1692982214642.json"},{"revision":"79a0c50fb0976ed59c262c2323e9fde4","url":"lunr-index.json"},{"revision":"f6b8c336564c38db253d4caac5ab576a","url":"manifest.json"},{"revision":"b423c6eaea3b7b98c60dc7625fa9ffc7","url":"markdown-page.html"},{"revision":"02b5e0f0e5d03ce6e178c0cba71b3ef8","url":"search-doc-1692982214642.json"},{"revision":"02b5e0f0e5d03ce6e178c0cba71b3ef8","url":"search-doc.json"},{"revision":"70737a1d9bc1ba6510a3ffa5bcbaa505","url":"img/breaking-barriers-rafiki.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"950ce65bb168c00fd27b771875a4baf7","url":"img/icons/icon-128x128.png"},{"revision":"6af74821979adcef70c24c404b6fb401","url":"img/icons/icon-144x144.png"},{"revision":"2336a8bea2edf0e03f88290509fbd63a","url":"img/icons/icon-152x152.png"},{"revision":"ed6282c307a8d0082f27a89b7b31edd1","url":"img/icons/icon-192x192.png"},{"revision":"05bfea6198bb8aee3cfad9ed00931d5d","url":"img/icons/icon-72x72.png"},{"revision":"bdcda7451b003b800fed9a7ee933e4a2","url":"img/icons/icon-96x96.png"},{"revision":"6d341295d4bbc9802daaba598a390489","url":"img/icons/icon.png"},{"revision":"ac229d00ed571523017eb770035afd07","url":"img/idempiere-social-card.jpg"},{"revision":"2fe675fa5e054805c426256f83960430","url":"img/logo.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"af15d3c0c28298f754e8a3a85a9870a1","url":"img/open-source-rafiki.svg"},{"revision":"69c2137476aa8b8dde1ba4aa3ee1fb29","url":"img/operating-system-rafiki.svg"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();