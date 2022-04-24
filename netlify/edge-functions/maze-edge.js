import maze from "../../@shared/maze.ts";

const app = maze(import.meta.url);

app.use(async ({ request, context, url }, next) => {
  if (request.method === 'GET') {
    const asset = await context.rewrite(url);
    if (asset.status !== 404) return asset;
  }
  return next();
});

export default (request, context) => app.handleEvent({ request, context });