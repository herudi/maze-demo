/** @jsx h */
import { h, Helmet } from "nano-jsx";
import { AppProps, RequestEvent } from "types";
import Navbar from "../components/navbar.tsx";

export default function App({ Page, props }: AppProps) {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:," />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js">
        </script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar route={props.route} />
      <div id="__MY_PAGE__"><Page {...props} /></div>
    </div>
  );
}

// example load NProgress showing if timeout > 300ms
let timeout: number | undefined;

App.event = {
  onStart(rev: RequestEvent) {
    rev.NProgress = (window as any).NProgress;

    // example use NProgress after first load.
    if (!rev.isFirst) {
      timeout = setTimeout(() => {
        rev.NProgress.start();
      }, 300);
    }
  },
  onEnd({ isFirst, NProgress }: RequestEvent) {
    if (timeout) clearTimeout(timeout);
    NProgress.done();
    if (!isFirst) {
      dispatchEvent(new Event("page:end"));
      window.scrollTo(0, 0);
    }
  },
  onError(err: Error) {
    // print log error
    console.error(err);
  },
}
