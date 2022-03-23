import { setup } from "twind";
import twind_config from "./twind.config.ts";

export default {

  // target id
  target: "__MY_PAGE__",

  // set anything when hydrate
  onHydrate: () => {
    setup(twind_config);
  }
}