self.addEventListener('install', event => {
  console.log('V1 installingâ€¦');
});

self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  console.log(event);
});
