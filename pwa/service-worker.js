if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(error => console.error('Service Worker registration failed:', error));
}
