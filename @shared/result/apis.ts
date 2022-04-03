
import { Router } from "https://deno.land/x/nhttp@1.1.10/mod.ts";
import { RequestEvent } from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.6/core/types.ts";
import $0 from "../../pages/api/sign.ts";
const api = new Router<RequestEvent>();
  api.any('/sign', $0);
export default api;
