self.addEventListener("install", e => {
self.skipWaiting();
});


self.addEventListener("fetch", e => {
// オフラインでも最低限動く
e.respondWith(fetch(e.request).catch(() => new Response("")));
});