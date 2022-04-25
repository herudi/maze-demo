import { setup } from "https://jspm.dev/twind@0.16.17/shim";
import twind_config from "../../twind.config.ts";

export function onHydrate() {
  setup(twind_config as any);
};