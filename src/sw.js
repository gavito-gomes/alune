workbox.core.setCacheNameDetails({prefix: "studyplan"})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.__precacheManifest = [
  '/img/icons/favicon-32x32.png',
  '/img/icons/favicon-16x16.png',
  '/img/icons/android-chrome-192x192.png',
  '/img/icons/android-chrome-192x192.png'
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request)
      .then(cacheRes => {
        return cacheRes || fetch(evt.request);
      })
  )
})
