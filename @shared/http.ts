
import { initApp as baseInitApp, NHttp, ReqEvent } from "https://raw.githubusercontent.com/herudi/maze/master/core/server.ts";
import ErrorPage from "../pages/_error.tsx";
import RootApp from "./root_app.tsx";
import apis from "./result/apis.ts";
import { twind_setup } from "../config.ts";
import { pages } from "./result/pages.ts";
import { BUILD_ID } from "./result/constant.ts";
import { pages as server_pages } from "./result/server_pages.ts";

export const initApp = (url: string, {
  appCallback,
  staticConfig
}: {
  appCallback?: (app: NHttp<ReqEvent>) => any
  staticConfig?: (rev: ReqEvent) => void
} = {}) => {
  return baseInitApp({
    twind_setup: twind_setup,
    root: RootApp,
    error_page: ErrorPage,
    pages: pages,
    server_pages: server_pages,
    apis: apis,
    meta_url: url,
    build_id: BUILD_ID,
    static_config: staticConfig
  }, appCallback);
};
