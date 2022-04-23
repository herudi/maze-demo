import maze from "../../maze.build.js";

export default async (request, context) => { 
    const asset = await context.rewrite(new URL(request.url).pathname);
    if (asset.status !== 404) {
        return asset;
    }
    return maze().handleEvent({ request, context });
};