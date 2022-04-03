import type { MazeConfig } from "maze";
import { ENV } from "./@shared/result/constant.ts";

export default <MazeConfig>{ 
  cache_control: "public, max-age=7200, immutable",
  etag: ENV === 'production'
}
