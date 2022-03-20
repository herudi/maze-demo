import { initApp } from "./@shared/http.ts";

initApp(import.meta.url, {
  staticConfig: ({ response }) => {
    // example cache
    response.header("cache-control", "public, max-age=7200, immutable");
  }
}).listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});