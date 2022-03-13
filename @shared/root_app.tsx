/** @jsx h */
import { h } from "nano-jsx";
import App from "../pages/_app.tsx";

function RootApp({ Page, initData, route, isServer }: any) {
  return (
    <App
      Page={Page}
      props={{ ...initData, route, isServer }}
    />
  );
}

RootApp.initProps = (App as any).initProps;
RootApp.event = (App as any).event || {};

export default RootApp;
  
