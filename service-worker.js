======================================
// SOCO WALLET SERVICE WORKER
// ======================================

const CACHE_NAME = "soco-wallet-v1.0.0";

const ASSETS = [

  "./",
  "./wallet.html",
  "./wallet.css",
  "./wallet.js",
  "./manifest.json",

  "./icon-72.png",
  "./icon-96.png",
  "./icon-128.png",
  "./icon-144.png",
  "./icon-152.png",
  "./icon-192.png",
  "./icon-384.png",
  "./icon-512.png"

];

// ======================================
// INSTALL
// ======================================

self.addEventListener(
"install",

event => {

console.log(
"Service Worker installé"
);

event.waitUntil(

caches.open(
CACHE_NAME
)

.then(cache => {

return cache.addAll(
ASSETS
);

})

);

self.skipWaiting();

}
);

// ======================================
// ACTIVATE
// ======================================

self.addEventListener(
"activate",

event => {

event.waitUntil(

caches.keys()

.then(keys => {

return Promise.all(

keys.map(key => {

if(

key !==
CACHE_NAME

){

return caches.delete(
key
);

}

})

);

})

);

self.clients.claim();

}
);

// ======================================
// FETCH
// ======================================

self.addEventListener(
"fetch",

event => {

event.respondWith(

caches.match(
event.request
)

.then(response => {

if(response){

return response;

}

return fetch(
event.request
)

.then(networkResponse => {

if(

event.request.method
=== "GET"

){

const clone =
networkResponse.clone();

caches.open(
CACHE_NAME
)

.then(cache => {

cache.put(
event.request,
clone
);

});

}

return networkResponse;

})

.catch(() => {

return caches.match(
"./wallet.html"
);

});

})

);

}
);

// ======================================
// BACKGROUND SYNC
// ======================================

self.addEventListener(
"sync",

event => {

console.log(
"Background Sync"
);

}
);

// ======================================
// PUSH NOTIFICATIONS
// ======================================

self.addEventListener(
"push",

event => {

const title =
"SOCO Wallet";

const options = {

body:
"Nouveau message reçu",

icon:
"./icon-192.png",

badge:
"./icon-72.png"

};

event.waitUntil(

self.registration
.showNotification(

title,
options

)

);

}
);

// ======================================
// NOTIFICATION CLICK
// ======================================

self.addEventListener(
"notificationclick",

event => {

event.notification.close();

event.waitUntil(

clients.openWindow(
"./wallet.html"
)

);

}
);
