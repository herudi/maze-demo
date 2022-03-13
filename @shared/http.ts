
import { initApp as baseInitApp, NHttp, ReqEvent } from "https://raw.githubusercontent.com/herudi/maze/master/core/server.tsx";
import ErrorPage from "../pages/_error.tsx";
import RootApp from "./root_app.tsx";
import apis from "./result/apis.ts";
import { twind_setup } from "../config.ts";
import { pages } from "./result/pages.ts";
import { pages as server_pages } from "./result/server_pages.ts";

export const initApp = async (appCallback?: (app: NHttp<ReqEvent>) => any) => {
  return await baseInitApp({
    twind_setup: twind_setup,
    root: RootApp,
    error_page: ErrorPage,
    pages: pages,
    server_pages: server_pages,
    apis: apis
  }, appCallback);
};
