const ASSETS  = [
    'https://tinderize-offline.vercel.app/global.css',
    'https://tinderize-offline.vercel.app/build/bundle.css',
    'https://tinderize-offline.vercel.app/build/bundle.js',
    'https://tinderize-offline.vercel.app/',
    'https://tinderize-offline.vercel.app/models/tiny_face_detector_model-weights_manifest.json',
    'https://tinderize-offline.vercel.app/logo.png',
    'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,500;1,700&display=swap',
    'https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfw72.woff2',
    'https://tinderize-offline.vercel.app/models/tiny_face_detector_model-shard1',
    'https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjsGyN.woff2',
    'https://tinderize-offline.vercel.app/smiley.png',
    'https://tinderize-offline.vercel.app/manifest.json'
]

let CACHE_NAME = "tindoff-v4.1-beta";

self.addEventListener("install", event => {
    console.log("installing...")
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
            .catch(err => console.log(err))
    )
})

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker ....', event)
  event.waitUntil(
    caches.keys()
      .then( keyList => {
        return Promise.all(keyList.map(key => {
          if (key.includes('tindoff') && key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache.', key)
            return caches.delete(key)
          }
        }))
      })
  )
  return self.clients.claim();
})

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(err =>
            caches.match(event.request).then(response => response)
        )
    )
})