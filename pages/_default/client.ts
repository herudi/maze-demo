import { setup } from "https://esm.sh/twind@0.16.16/shim";
import twind_config from "../../twind.config.ts";

export function onHydrate() {
  setup(twind_config);
};