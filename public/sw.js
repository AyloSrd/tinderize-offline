const ASSETS  = [
    'https://tinderize-offline.vercel.app/global.css',
    'https://tinderize-offline.vercel.app/build/bundle.css',
    'https://tinderize-offline.vercel.app/build/bundle.js',
    '/index.html',
    'https://tinderize-offline.vercel.app/models/tiny_face_detector_model-weights_manifest.json',
    'https://tinderize-offline.vercel.app/logo.png',
    'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,500;1,700&display=swap',
    'https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfw72.woff2',
    'https://tinderize-offline.vercel.app/models/tiny_face_detector_model-shard1',
    'https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCxCvjsGyN.woff2',
    'https://tinderize-offline.vercel.app/smiley.png',
    'https://tinderize-offline.vercel.app/manifest.json'
]

let cache_name = "tindoff-v2.0-beta";

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener("fetch", event => {
    if (event.request.url === 'https://tinderize-offline.vercel.app/') {
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/index.html"))
            )
        )
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then(response => response)
            )
        );
    }
});


// var CACHE_STATIC_NAME = 'static-v1.6-BETA';

// self.addEventListener('install', function (event) {
//   console.log('[Service Worker] Installing Service Worker ...', event);
//   event.waitUntil(
//     caches.open(CACHE_STATIC_NAME)
//       .then(function (cache) {
//         console.log('[Service Worker] Precaching App Shell');
//         cache.addAll([
//           '/',
//           '/index.html',
//           '/offline.html',
//           '/global.css',
//           '/manifest.json',
//           '/face-api.min.js',
//           '/favicon.ico',
//           '/favicon.png',
//           '/logo.png',
//           '/smiley.png',
//           '/models/tiny_face_detector_model-shard1',
//           '/models/tiny_face_detector_model-weights_manifest.json',
//           '/build/bundle.css',
//           '/build/bundle.js',
//           '/build/bundle.js.map',
//           'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,500;1,700&display=swap',
//           'https://tinderize-offline.vercel.app/'
//         ])
//       })
//   )
// });

// self.addEventListener('activate', function (event) {
//   console.log('[Service Worker] Activating Service Worker ....', event);
//   event.waitUntil(
//     caches.keys()
//       .then(function (keyList) {
//         return Promise.all(keyList.map(function (key) {
//           if (key !== CACHE_STATIC_NAME) {
//             console.log('[Service Worker] Removing old cache.', key);
//             return caches.delete(key);
//           }
//         }));
//       })
//   );
//   return self.clients.claim();
// });

// self.addEventListener("fetch", event => {
//     console.log("You fetched " + event.url);
// });

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.open(CACHE_STATIC_NAME)
//         .then(function(cache) {
//           return fetch(event.request)
//             .then(function(res) {
//               cache.put(event.request, res.clone());
//               return res;
//             });
//         })
//     );
//   });