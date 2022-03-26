import { setup } from "twind";
import twind_config from "./twind.config.ts";

export default {

  // target id
  target_id: "__MY_PAGE__",

  // multi zone route/pages
  zones: [],

  // set anything when hydrate
  onHydrate: () => {
    setup(twind_config);
  }
}