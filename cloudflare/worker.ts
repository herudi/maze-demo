import maze from "../.maze/maze.ts";
import middleware from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.9/core/cf_workers_middleware.ts";

// default cache
const cache = {
  browserTTL: 2 * 60 * 60 * 24,
  edgeTTL: 2 * 60 * 60 * 24,
  bypassCache: false,
}

addEventListener('fetch', (event: any) => {
  event.respondWith(maze().use(middleware(cache)).handleEvent(event));
});