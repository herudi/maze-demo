import { initApp } from "./@shared/http.ts";

initApp(import.meta.url, {
  staticConfig: ({ response, env }) => {
    // example cache in production
    if (env === 'production') {
      response.header("cache-control", "public, max-age=7200, immutable");
    }
  }
}).listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});