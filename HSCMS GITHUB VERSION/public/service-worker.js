const staticHCMS = "hcms-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/bootstrap.min.js",
  "/js/in.js",
  "/js/jquery.min.js",
  "/js/light.js",
  "/js/main.js",
  "/js/upload.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
