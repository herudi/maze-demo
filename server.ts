import maze from "./@shared/maze.ts";
import { etag } from "https://deno.land/x/nhttp_etag@0.0.4/mod.ts";

maze(import.meta.url, {
  staticConfig: ({ response, env }) => {
    // example cache in production.
    if (env === 'production') {
      response.header("cache-control", "public, max-age=7200, immutable");
    }
  },
  appCallback: (app) => {
    // example using etag.
    app.use(etag());
  }
}).listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});