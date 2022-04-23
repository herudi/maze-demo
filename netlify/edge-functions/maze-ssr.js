import maze from "../../maze.build.js";

console.log(new URL("public", import.meta.url).href);

export default (request, context) => maze.handleEvent({ request, context });