import maze from "../../@shared/maze.ts";

export default (request, context) => maze().handleEvent({ request, context });