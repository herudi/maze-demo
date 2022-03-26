
import { initApp as baseInitApp, NHttp, ReqEvent } from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.2/core/server.ts";
import ErrorPage from "../pages/_default/error.tsx";
import ssr from "../pages/_default/ssr.tsx";
import RootApp from "./root_app.tsx";
import apis from "./result/apis.ts";
import { pages } from "./result/pages.ts";
import { BUILD_ID } from "./result/constant.ts";
import { pages as server_pages } from "./result/server_pages.ts";

export default (url: string, {
  appCallback,
  staticConfig
}: {
  appCallback?: (app: NHttp<ReqEvent>) => any
  staticConfig?: (rev: ReqEvent) => void
} = {}) => {
  return baseInitApp({
    root: RootApp,
    error_page: ErrorPage,
    pages: pages,
    server_pages: server_pages,
    apis: apis,
    meta_url: url,
    build_id: BUILD_ID,
    ssr: ssr,
    static_config: staticConfig
  }, appCallback);
};
