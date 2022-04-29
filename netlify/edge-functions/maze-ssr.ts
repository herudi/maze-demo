import maze from "../../.maze/maze.ts";
import middleware from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.9/core/netlify_middleware.ts";

export default (request: Request, context: Record<string, any>) => {
  return maze().use(middleware()).handleEvent({ request, context });
}