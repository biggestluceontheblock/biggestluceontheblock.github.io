"use strict";var precacheConfig=[["/peregovorki/index.html","c8106f805de4b15d5ea0de673bb60e0a"],["/peregovorki/static/css/main.8187247b.css","94c59d5ed971bc49268b7757a94b8383"],["/peregovorki/static/js/0.d1566f1f.chunk.js","9ee7cdcbc7ff2360a89db0156e5894b1"],["/peregovorki/static/js/1.a062b1e2.chunk.js","1c2bc2bf2aeb170a208c0a291c96337f"],["/peregovorki/static/js/2.c174c801.chunk.js","9bf52799e8a4d06e462490c4ed5a2785"],["/peregovorki/static/js/3.9a92dc8f.chunk.js","622b138ebd0487a9424f14c34eb373f6"],["/peregovorki/static/js/main.885eb08a.js","b19f7d7c3d711a6a0b7bc511a1ac5094"],["/peregovorki/static/media/Arimo-Bold.26a0caab.woff","26a0caab182e455e437af04ce0159180"],["/peregovorki/static/media/Arimo.9f4146cb.woff","9f4146cb33028991668d2f4ec77a5fab"],["/peregovorki/static/media/TextBookBold.5379da4d.woff","5379da4d14cbe2bbee84a07fbb6ebc97"],["/peregovorki/static/media/TextbookNormal.6a7c32fd.woff","6a7c32fdbf4e8d716f3b922bfd576471"],["/peregovorki/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/peregovorki/static/media/logo.f7a50b39.png","f7a50b39d52d79c5a2628f5d30b08837"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/peregovorki/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});