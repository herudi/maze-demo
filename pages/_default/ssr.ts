import { Helmet, renderSSR } from "nano-jsx";
import { setup } from 'twind'
import { virtualSheet, getStyleTag } from 'https://cdn.skypack.dev/twind@0.16.16/sheets';
import twind_config from "./../../twind.config.ts";

const sheet = virtualSheet() as any;

setup({ ...twind_config, sheet });

export default function ssr(Component: any, mazeScript: string, opts: Record<string, any> = {}) {
  sheet.reset();
  const app = renderSSR(Component, opts);
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
