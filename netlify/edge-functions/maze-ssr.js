import maze from "../../maze.build.js";

const github_asset_url = "https://raw.githubusercontent.com/herudi/maze-demo/master/public";

export default (request, context) => maze(github_asset_url).handleEvent({ request, context });