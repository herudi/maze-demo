import maze from "../../maze.build.js";

const asset_url = new URL("public", import.meta.url).href.replace("/netlify/edge-functions");

export default (request, context) => maze(asset_url).handleEvent({ request, context });