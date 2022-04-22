import type { MazeConfig } from "maze";
import { ENV } from "./@shared/result/constant.ts";

export default <MazeConfig>{ 

  // cache-control (production only).
  cache_control: "public, max-age=31536000, immutable",

  // example set etag on production.
  etag: ENV === 'production'
}
