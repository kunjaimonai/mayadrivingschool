'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9708ab7d12d08e3a26bf1b093972b1e2",
"version.json": "5989a05a7a347b252272e267ed093e98",
"index.html": "09347a3e61d6ec1033efc0624fd3c86d",
"/": "09347a3e61d6ec1033efc0624fd3c86d",
"main.dart.js": "2231ba22f6ca039a4b1f32f4e5512d31",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "4a3d92e4d5178eee83ece0f34ed2ec72",
"icons/88.png": "eb75c71eb4c150b1bd627b8c5686cccf",
"icons/1024.png": "c17412c3da34d9ec3e61558ab3eb28d7",
"icons/76.png": "55a38cf95bf43a5e2f5a1a36d83cacd4",
"icons/60.png": "aa4b1a87a60d6a1ce0c23f7f5ce28cc8",
"icons/48.png": "22c4f09182cc0d8cf0c409ca4b688a83",
"icons/216.png": "49a0db9f6c18bca23cae1b7b20014c91",
"icons/64.png": "302c0eda0700947770801d20c2f8745a",
"icons/58.png": "12865e95b90c64a6fbcc808a3bea49c4",
"icons/167.png": "e621621b0825de55f69ce171f92ff00d",
"icons/72.png": "347f12ec9beb11466149ddec87437fc1",
"icons/66.png": "02c97dddae1753c12a40068939fa680b",
"icons/172.png": "d64342dc138d1dc5c266dfa06d35acd8",
"icons/Icon-192.png": "c3dcb6386a5cbfb8a3090c11f7015b94",
"icons/100.png": "accf4ac6f4afda89ba456c45813430b8",
"icons/114.png": "a8b5f967fc01b96b4fe87756bfc1a96e",
"icons/128.png": "166a3c033aa59e43b200a4315b3b814e",
"icons/102.png": "af822f873f10e613680f333e1ae1bc30",
"icons/Icon-maskable-192.png": "c3dcb6386a5cbfb8a3090c11f7015b94",
"icons/512.png": "c5aa1db85b1d5937de346bdf9aa5c73a",
"icons/16.png": "0c1b6b2da55adfa5b5894d8a96a3f12b",
"icons/258.png": "ca15974a765582073f0b11878e74bf16",
"icons/108.png": "279f228ccdb63327ac19ac0671243ce7",
"icons/120.png": "253440f4f4192666a51cc8e89000fabf",
"icons/256.png": "c4c24bf7c7140a4cb586f5fd116c4ab9",
"icons/20.png": "16718b50baadb3e2b3a06abd4717fcfc",
"icons/32.png": "f6ebff8dc1c12351031ef1634f5d360d",
"icons/180.png": "db22ea4dfe487201a20bb7ad373a1259",
"icons/234.png": "7ff2f995616b5d6c8a6033aa4f84e1a2",
"icons/57.png": "45857ecde93ec6b83523cbf184cb76bb",
"icons/80.png": "a29db5e7f60dd2173dc2308e19d0e23e",
"icons/55.png": "f6ac977d275d8146f9e0202ba876a869",
"icons/196.png": "8ebf6036d38c4d39f7409d495f3e1141",
"icons/40.png": "e0c7dbe32b892594d41c0e14a6190690",
"icons/Icon-maskable-512.png": "846e7e9170d4d7bd539606c4b7575984",
"icons/87.png": "c275653eb0a97a6cd32457cd82818f50",
"icons/50.png": "99744df5a31df7a86dd143aa0aa776ac",
"icons/92.png": "a727540a73d97bb5e3f9596373412957",
"icons/144.png": "29d39238015df68969ae223e80c80280",
"icons/152.png": "f58da7d812e216eadf20001a79f814bb",
"icons/Icon-512.png": "846e7e9170d4d7bd539606c4b7575984",
"manifest.json": "2b5da5f48194bb808f5dd65cf3e3e715",
"assets/AssetManifest.json": "84bda3b4ba0e48fcdcce5cc0eb89b35b",
"assets/NOTICES": "05241a5e5530fba1fe8ac4a1d91a755f",
"assets/FontManifest.json": "2edde3a46f912c9af48dd3673af94b04",
"assets/AssetManifest.bin.json": "145fb581cca82b9169a63c4f55377093",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "187024b4e23b6e28294353f334f0f3a0",
"assets/fonts/MaterialIcons-Regular.otf": "bc2d5692ee2b523643b02aa97ce458bb",
"assets/assets/loading.gif": "bbfa7d930fe9c750cb272dc404c5b297",
"assets/assets/icons/88.png": "eb75c71eb4c150b1bd627b8c5686cccf",
"assets/assets/icons/1024.png": "c17412c3da34d9ec3e61558ab3eb28d7",
"assets/assets/icons/76.png": "55a38cf95bf43a5e2f5a1a36d83cacd4",
"assets/assets/icons/60.png": "aa4b1a87a60d6a1ce0c23f7f5ce28cc8",
"assets/assets/icons/216.png": "49a0db9f6c18bca23cae1b7b20014c91",
"assets/assets/icons/64.png": "302c0eda0700947770801d20c2f8745a",
"assets/assets/icons/58.png": "12865e95b90c64a6fbcc808a3bea49c4",
"assets/assets/icons/167.png": "e621621b0825de55f69ce171f92ff00d",
"assets/assets/icons/72.png": "347f12ec9beb11466149ddec87437fc1",
"assets/assets/icons/66.png": "02c97dddae1753c12a40068939fa680b",
"assets/assets/icons/172.png": "d64342dc138d1dc5c266dfa06d35acd8",
"assets/assets/icons/100.png": "accf4ac6f4afda89ba456c45813430b8",
"assets/assets/icons/114.png": "a8b5f967fc01b96b4fe87756bfc1a96e",
"assets/assets/icons/128.png": "166a3c033aa59e43b200a4315b3b814e",
"assets/assets/icons/102.png": "af822f873f10e613680f333e1ae1bc30",
"assets/assets/icons/512.png": "c5aa1db85b1d5937de346bdf9aa5c73a",
"assets/assets/icons/258.png": "ca15974a765582073f0b11878e74bf16",
"assets/assets/icons/108.png": "279f228ccdb63327ac19ac0671243ce7",
"assets/assets/icons/120.png": "253440f4f4192666a51cc8e89000fabf",
"assets/assets/icons/256.png": "c4c24bf7c7140a4cb586f5fd116c4ab9",
"assets/assets/icons/ic_launcher.png": "347f12ec9beb11466149ddec87437fc1",
"assets/assets/icons/180.png": "db22ea4dfe487201a20bb7ad373a1259",
"assets/assets/icons/234.png": "7ff2f995616b5d6c8a6033aa4f84e1a2",
"assets/assets/icons/57.png": "45857ecde93ec6b83523cbf184cb76bb",
"assets/assets/icons/80.png": "a29db5e7f60dd2173dc2308e19d0e23e",
"assets/assets/icons/196.png": "8ebf6036d38c4d39f7409d495f3e1141",
"assets/assets/icons/87.png": "c275653eb0a97a6cd32457cd82818f50",
"assets/assets/icons/92.png": "a727540a73d97bb5e3f9596373412957",
"assets/assets/icons/144.png": "29d39238015df68969ae223e80c80280",
"assets/assets/icons/152.png": "f58da7d812e216eadf20001a79f814bb",
"assets/assets/loading2.gif": "f28114a79f2e1196a67db907a6ee7a92",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/OFL.txt": "48db4983e5ed3c42ab7aaf45652572d9",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
