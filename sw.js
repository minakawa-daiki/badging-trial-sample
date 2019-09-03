var CACHE_NAME = 'badging-api-sample';
var urlsToCache = ['/badging-trial-sample'];

// Service Worker のインストールプロセス
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Service Worker のキャッシュ取得プロセス
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) return response;
          return fetch(event.request);
        }
      )
    );
});
