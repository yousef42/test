'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bab316ccd1de8d27eb31e8c39fc1cb76",
"favicon.ico": "ece4686a42020fe390af00fadc5c4e63",
"index.html": "ea7a4ee492cb7d0579d1c21bff1c0fca",
"/": "ea7a4ee492cb7d0579d1c21bff1c0fca",
"gsap.min.js": "92418f0035ac402d6ac0b1bbb1d19a2f",
"firebase-messaging-sw.js": "76446edc7cb5a82d5bc93e8e9b9f758f",
"loader.css": "822c717ef29fb91c4c99dec2d0217feb",
"main.dart.js": "743aa58490dcc21912682ce4fb2a6266",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"cors.json": "718445b0bc62210b2f3494b7ad4459fb",
"icons/favicon-16x16.png": "5aa56fd8d97e37279695ece9c1774910",
"icons/safari-pinned-tab.svg": "4ef7dfadf08864712b5208fb5a077a9b",
"icons/favicon.ico": "f4f0ce73b3898285cc960aaf22b2acdb",
"icons/android-chrome-192x192.png": "ce1af5722b4af60e96b15229da710c05",
"icons/apple-touch-icon.png": "308ff6b01802b32788e7a616c561ebe6",
"icons/android-chrome-512x512.png": "7d2cb7268e3a2df02edf1cb84cb8ac50",
"icons/mstile-150x150.png": "ddc3b0a8e551a4d2303791ba757d8dbb",
"icons/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"icons/favicon-32x32.png": "f0b4847364b81a3d922c7a96a0d44ec2",
"manifest.json": "b905dca91c211ac25006247a23c38720",
"assets/AssetManifest.json": "1ae54b5774bf4d737eca5a71b123ced5",
"assets/NOTICES": "12124f99981684c7fb37de39975f3400",
"assets/FontManifest.json": "9683c860677d5d781dbce8a31abd629f",
"assets/fonts/IRANYekanMediumFaNum.ttf": "d13047e02b26b61b211234c4ef3d29bc",
"assets/fonts/IRANYekanBoldFaNum.ttf": "bcfc2419ed18380e2889d6d3a0da21a1",
"assets/fonts/IRANYekanExtraBoldFaNum.ttf": "6ba363cbdab4c67673c9ef9892d15f76",
"assets/fonts/IRANYekanRegularFaNum.ttf": "a5649ebc17d510f7ebaf3031d5381912",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/IRANYekanLightFaNum.ttf": "5e76dda4561f9546b943fa395a686ee1",
"assets/fonts/Lalezar-Regular.ttf": "b09134ac350e6345b0b6cd94f78f6ffc",
"assets/assets/images/toss.svg": "ac0b059a45a5093dde1677f330cbb585",
"assets/assets/images/menu_background.svg": "dd488e811a6388116c460def61bbb011",
"assets/assets/images/home-menu-deactive.svg": "fc82aeb059de8535ad6d501553c5d2e4",
"assets/assets/images/avatar_background.svg": "379ec8f73d07f3df520f3bc0af5e4e14",
"assets/assets/images/user-menu-deactive.svg": "7c7adb05b77faac45476943b03fda874",
"assets/assets/images/win-left-image.svg": "2c8040bdf28b5a3e8aba4be855c51c90",
"assets/assets/images/double_user.svg": "f7343994c98d2c8358c8ca1b7e666a29",
"assets/assets/images/user.svg": "a36d48eabae35d6d0add16a769a5ec85",
"assets/assets/images/info-active.svg": "365951e509320b0e133740fe320c6348",
"assets/assets/images/info_i.svg": "52797bf34566c57e4128cd7df08d253e",
"assets/assets/images/background_toolbar.png": "fa08bc8d5d0d5df16680d1f969ffcf8c",
"assets/assets/images/logo8.svg": "4bb1f560f4425ed5e3ae91272ae45dfe",
"assets/assets/images/crown-menu-deactive.svg": "7c9493778472ae63464761e8c8010a17",
"assets/assets/images/radius-border-left.svg": "48e6d7f2ab6bf512a5d322050b7bac7d",
"assets/assets/images/lock.svg": "b657339f48e80464c6ce5105d7736a10",
"assets/assets/images/yellow_cup.svg": "4352ed7d9e1591e4db63c4dd98b4dfc3",
"assets/assets/images/key.svg": "ee79720b09229303cbd57fa734246fa4",
"assets/assets/images/door-open.svg": "fbf44b83df30934f50a4e84f2e757150",
"assets/assets/images/image_temp.png": "2328f7b5fec393fd167bd6e38861101b",
"assets/assets/images/v-shadow.svg": "41f593b5a49a557f0d2f3d4df74b8c3e",
"assets/assets/images/envelope.svg": "63d313d75c5e55ffeb38b63e29f89f3d",
"assets/assets/images/s-shadow.svg": "0c0d77b6a1686630a875d0cfa3d07361",
"assets/assets/images/alarm-clock.svg": "be86663b4afe575e06afb982471327ec",
"assets/assets/images/home_active.svg": "a0cab965a09f0cc9032103411afd1949",
"assets/assets/images/plus.svg": "40d6272fe9375d4c820c473a3ac84efd",
"assets/assets/images/check.svg": "8641d644703f37e1aaf725ff5c6ad21d",
"assets/assets/images/angle-right.svg": "6a0d4f5e63ca7ae208f5820dcbc84df6",
"assets/assets/images/world.svg": "6127d4941572b8a4264b7080b0b1edef",
"assets/assets/images/background.png": "f940ec5c1902f33b813ec18bc86625e7",
"assets/assets/images/check-blue.svg": "5abe53831ac0e4fc3f21e0de26f3eb50",
"assets/assets/images/about-menu-deactive.svg": "fecc8917f78fb8b5ee72f762ca501a70",
"assets/assets/images/avatar.png": "f101a99a076048a34bf2541d3aebe115",
"assets/assets/images/big-dot.svg": "25dd2f6cb1bb27f589c28a26d4dfdb21",
"assets/assets/images/prize-menu-deactive.svg": "d1d09a9cd3646af504c026af1afe9a8c",
"assets/assets/images/user-place-holder.svg": "a8500f3b31c354da31c71ad1ce1ba1b7",
"assets/assets/images/crown.svg": "6b04d1193ab6c35ce3811afd812dad4b",
"assets/assets/images/background_login.png": "af763af6b10fdbd2cfc86573359602a4",
"assets/assets/images/send.svg": "67b881d3ff7f5941a6bfafd21ca5edba",
"assets/assets/images/phone-call.svg": "13db80f63eb1742b4e5d7ac1e9f9704b",
"assets/assets/images/prize-active.svg": "fc2a93af547346e10606b3114d912cf0",
"assets/assets/images/s.svg": "bbb14e092c8f5f0fb0d22d51096ab898",
"assets/assets/images/temp1.png": "794cd2de75cb8ce0f5d13e48c3342a79",
"assets/assets/images/tic-tac-toe.png": "0873897154159ddf4214b6c1d466a649",
"assets/assets/images/tic-tac-toe.jpg": "c9c2f926c367f331f3f464a7e8b4c148",
"assets/assets/images/feather.svg": "53c6854de1743ae279a04314130a8a93",
"assets/assets/images/avatar2.png": "a1701e5f6f244a8c81318c3a1a4cd400",
"assets/assets/images/v.svg": "82b56552c3a8035252dcf40dfa5bd22a",
"assets/assets/images/edit.svg": "af9edc960d1a1ae30628efba84868ec1",
"assets/assets/images/win-star-image.svg": "38b6d38f906409b5574dfcf908432c6a",
"assets/assets/images/irancell.png": "be29c3304a75ae320392fc43d027532b",
"assets/assets/images/diamond.svg": "1df7efdf08ce0bb06e945ad318885353",
"assets/assets/images/location.svg": "90323a67468a82d17535093f317ae6a8",
"assets/assets/images/google-icon.svg": "811afc563418516487c75d7c4ac43472",
"assets/assets/images/user-menu-active.svg": "fb2e137a41ec803703a1f9170b47a4cb",
"assets/assets/images/taj.svg": "f9a6d0e92f4985d271e5cd957471f934",
"assets/assets/images/angle-righht-shadow.svg": "d31e217524510a93de4470e4d89151f9",
"assets/assets/images/avatar3.svg": "90fdb9b1e38e2f32ca95fc38eb099c34",
"assets/assets/images/user_place_holder.svg": "88364a8e7c8fca07eb9ccb411f4e0db0",
"assets/assets/images/thick.svg": "1746183385769f570ae36c8a5dbb71e1",
"assets/assets/images/radius-border.svg": "243581f2cc65e81368d0fae2ac366a00",
"assets/assets/images/roban.svg": "a14d4e598f74aa2e88c8b250fc061cb5",
"assets/assets/images/fingerprint.svg": "002badc9c597e0e695dc25e4c90c559f",
"assets/assets/images/test.svg": "4f598ed76d94d93c626a789f86486463",
"assets/assets/images/circle-multiple.svg": "8e25ba3d2a20406d892ce5b68395848d",
"assets/assets/sounds/menu-item-click.mp3": "c060de874441ae28d5c99b7e107c68de",
"assets/assets/sounds/mixkit-tech-disable_gift.mp3": "acd114cc5a7a64963fbafd3fedb98a85",
"assets/assets/sounds/game-background-two.mp3": "6b0d284a6b37ab2aa2596dbbebfa5e1c",
"assets/assets/sounds/mixkit-retro-arcade-game-over.mp3": "0569405d51684ac7604371389bfee60b",
"assets/assets/sounds/click.mp3": "c250cd612012c01c36f940deee6f989c",
"assets/assets/sounds/mixkit-tick-tock-clock-close-up.mp3": "b5938591d6ee1cf2cb276bd9e4811736",
"assets/assets/sounds/mixkit-creaky-closing-wood-door.mp3": "0c1104a6a867e246d8ee0f56bc962344",
"assets/assets/sounds/mixkit-video-game-win.mp3": "956d4f2ab0db8d4f5c92da0343f5a98f",
"assets/assets/sounds/tik-tok.mp3": "b5938591d6ee1cf2cb276bd9e4811736",
"assets/assets/sounds/sprite.mp3": "f9615d46b8c03d87a0ab875e4539d3c7",
"assets/assets/sounds/success.mp3": "2923cfd7afaf16d322bc4b8c3d43d7f8",
"assets/assets/sounds/mixkit-instant-win.mp3": "3af1216ba930d8c6e438c25febf36e97",
"assets/assets/sounds/game-background-three.mp3": "51b3d6d4e0fe8f9e30e7447797be88a6",
"assets/assets/sounds/loss.mp3": "e0e2c7c85c9e33873bfe067465faeb54",
"assets/assets/sounds/disable-gift.mp3": "9fa812b82dbb0bc94357310bfa2fd401",
"assets/assets/sounds/game-item-click.mp3": "a6f913507813c3e660d101a21874e267",
"assets/assets/sounds/mixkit-arcade-game-jump-coin.mp3": "6b2167cfc91f2485504b258ee76e907f",
"assets/assets/sounds/mixkit-page-turn-single.mp3": "44d69cb5bbf8eb789255e9972d58ebff",
"assets/assets/sounds/change-page.mp3": "08a77ac356205aa874ac2a73bd74463e",
"assets/assets/sounds/mixkit-ethereal-fairy-win-sound.mp3": "11e833c05f221a71cf4e27cf0835edf1",
"assets/assets/sounds/success-answer.mp3": "4ab2bfdad6212e91d7ba02a720190af8",
"assets/assets/sounds/game-background-one.mp3": "28305be7d39d2b55be2082c36bfb89e3",
"assets/assets/lottieFiles/alarm-clock.json": "e8a9946eb615b2fce1cfe20b1992bdd2",
"assets/assets/lottieFiles/exit.json": "c67b1e8ea6d6ef05dd400228499c8564",
"assets/assets/lottieFiles/clock.json": "e42cc3ee4b0e1a03e59b56aaf87c9f92",
"assets/assets/lottieFiles/logout.json": "9f633efdb9d3ee9c825aea7f390ac928",
"assets/assets/lottieFiles/close-door.json": "cdde5ccba1b3575a93cf40b879fed3a7",
"assets/assets/lottieFiles/gift.json": "ca4f2cdbf440d3ba847ccc0faa85bc73",
"assets/assets/lottieFiles/log_out.json": "61483544acd6e8801c3a05843389fef0",
"assets/assets/lottieFiles/you-lose.json": "ad2d798e6c8dc87eeb63246e9a714799",
"assets/assets/lottieFiles/you-lose.zip": "6b27eaba43d1e508244a99950faff89e",
"assets/assets/lottieFiles/alarm-clock-outline.json": "2f0c46f6bed1b1aa46c9ecc508633b22",
"assets/assets/lottieFiles/fingerprint.json": "006c005d3ae2baf60322dd28490ceafb",
"assets/assets/lottieFiles/trophy.json": "c50a9d0c5746e8521973f102a6524764",
"assets/assets/lottieFiles/clock-red.json": "0306360f00a9dbedc37cfd8fc941e834",
"assets/assets/lottieFiles/test.json": "f64607376a02a46822f74254170ca19b",
"assets/assets/lottieFiles/confirmed-tick.json": "6792b6baad8a440621dd09fe0dafdb14",
"assets/assets/lottieFiles/diamond.json": "5053f0de0664194650351083bb6f44e1",
"assets/assets/lottieFiles/door_close.riv": "9efc608a4eeb02e5165a288494934886",
"assets/assets/lottieFiles/exit1.json": "c67b1e8ea6d6ef05dd400228499c8564",
"assets/assets/lottieFiles/clock2.json": "a01b06781745b67b231b04d73479a805",
"browserconfig.xml": "93c98f9c263a2747d8e80bef42b6ffad",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
