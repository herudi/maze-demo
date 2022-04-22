import { Helmet, renderSSR } from "nano-jsx";
import twind_config from "../../twind.config.ts";
import { setup } from "https://esm.sh/twind@0.16.16";
import {
  shim,
  virtualSheet,
  getStyleTag
} from "https://esm.sh/twind@0.16.16/shim/server";

const sheet = virtualSheet();

setup({ sheet, ...twind_config });

export default function ssr(Component: any, mazeScript: string, opts: Record<string, any> = {}) {
  sheet.reset();
  const app = renderSSR(Component, opts);
  shim(app);
  const { body, head, footer, attributes } = Helmet.SSR(app);
  const styleTag = getStyleTag(sheet);
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
