import maze from "../../maze.build.js";

export default (request, context) => maze.handleEvent({ request, context });