import { RequestEvent } from "types";
// twind setup options.
export const twind_setup = {};

// hydrate part to id "__MY_PAGE__" if pathname startsWith "/"
export const hydrate_setup = ({ pathname }: RequestEvent) => {
  if (pathname.startsWith("/")) {
    return "__MY_PAGE__";
  }
  return void 0;
}