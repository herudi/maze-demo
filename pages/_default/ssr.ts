import { Helmet, renderSSR } from "nano-jsx";
import twind_config from "../../twind.config.ts";
import { setup } from "https://jspm.dev/twind@0.16.17";
import {
  shim,
  virtualSheet,
  getStyleTag
} from "https://jspm.dev/twind@0.16.17/shim/server";

const sheet = virtualSheet();

setup({ sheet, ...twind_config });

export default function ssr(Component: any, mazeScript: string, opts: Record<string, any> = {}) {
  (sheet as any).reset();
  const app = renderSSR(Component, opts);
  shim(app);
  const { body, head, footer, attributes } = Helmet.SSR(app);
  const styleTag = getStyleTag(sheet, void 0);
  return `<!DOCTYPE html>
<html ${attributes.html.toString()}>
  <head>
    ${head.join('\n    ')}
    ${styleTag}
  </head>
  <body ${attributes.body.toString()}>
    ${body}
    ${footer.join('')}${mazeScript}
  </body>
</html>`
}
