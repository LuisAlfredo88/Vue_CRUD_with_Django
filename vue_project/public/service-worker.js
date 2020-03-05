// eslint-disable-next-line
if (workbox) {
    console.log(`Workbox is loaded`);
    // eslint-disable-next-line
    workbox.precaching.precacheAndRoute(self.__precacheManifest);

} 
else {
    console.log(`Workbox didn't load`);
}
