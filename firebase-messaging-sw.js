importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBdk-N7PxT6x4Hn0aFeZnaDBQyhI-nYKcM",
  authDomain: "bubbleandbean-89ebb.firebaseapp.com",
  projectId: "bubbleandbean-89ebb",
  storageBucket: "bubbleandbean-89ebb.firebasestorage.app",
  messagingSenderId: "547573350820",
  appId: "1:547573350820:web:daf3991e5c99119a9a4131"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const data = payload.data || {};
  self.registration.showNotification(
    data.title || "🔔 New Bubble & Bean Order",
    {
      body: data.body || "A new order has been placed.",
      icon: "/favicon.ico",
      badge: "/favicon.ico",
      tag: "bubble-bean-order",
      renotify: true,
      data: { url: "/" }
    }
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
