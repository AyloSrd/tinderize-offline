self.addEventListener("fetch", event => {
    console.log('You just fetched', event.request.url)
})


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