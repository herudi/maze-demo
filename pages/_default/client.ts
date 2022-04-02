import { setup } from "twind";
import twind_config from "../../twind.config.ts";

export function onHydrate() {
    setup(twind_config);
};