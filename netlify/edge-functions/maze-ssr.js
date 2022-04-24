import maze from "../../@shared/maze.ts";

const app = maze();

app.use(async ({ context, url }, next) => {
  const asset = await context.rewrite(url);
  if (asset.status !== 404) return asset;
  return next();
});

export default async (request, context) => app.handleEvent({ request, context });