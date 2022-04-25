import maze from "../../.maze/maze.ts";
import midd from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.8/core/netlify-middleware.ts";

export default (request, context) => maze().use(midd).handleEvent({ request, context });