import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';
import maze from "../.maze/core.node.js";

function handlePrefix(prefix) {
  return request => {
    const defaultAssetKey = mapRequestToAsset(request);
    const url = new URL(defaultAssetKey.url);
    url.pathname = url.pathname.replace(prefix, '/');
    return new Request(url.toString(), defaultAssetKey);
  }
}

const app = maze();

app.use(async (rev, next) => {
  if (rev.request.method === "GET") {
    if (rev.path.startsWith("/static")) {
      rev.path = rev.path.replace("/static", "");
      rev.url = rev.url.replace("/static", "");
      try {
        const page = await getAssetFromKV(rev, {
          mapRequestToAsset: handlePrefix("/static")
        });
        const response = new Response(page.body, page);
        response.headers.set("X-XSS-Protection", "1; mode=block");
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("Referrer-Policy", "unsafe-url");
        response.headers.set("Feature-Policy", "none");
        return response;
      } catch (_e) {/* noop */ }
    }
  }
  return next();
});

addEventListener('fetch', (event) => {
  event.respondWith(app.handleEvent(event));
});