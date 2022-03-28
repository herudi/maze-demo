import type { MazeConfig } from "maze";
import { setup } from "twind";
import twind_config from "./twind.config.ts";

export default <MazeConfig>{
  onHydrate: () => {
    setup(twind_config);
  }
}
