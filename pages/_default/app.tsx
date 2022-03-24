/** @jsx h */
import { h, Helmet, Fragment } from "nano-jsx";
import { AppProps, RequestEvent } from "maze";
import Navbar from "../../components/navbar.tsx";

function setLoading(bool: boolean) {
  const loading = document.getElementById("loading") as any;
  loading.style.display = bool ? "block" : "none";
}

export default function App({ Page, props }: AppProps) {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:," />
        <script src="/assets/theme.js"></script>
        <link href="/assets/loading.css" rel="stylesheet" />
      </Helmet>
      <Navbar {...props} />
      <div id="__MY_PAGE__"><Page {...props} /></div>
      <div id="loading" class="center-div-loading" style="display: none;">
        <div class="linear-progress-material">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
        </div>
      </div>
    </Fragment>
  );
}

// example debounce loading show if > 300ms
let timeout: number | undefined;

App.event = {
  onStart(rev: RequestEvent) {
    if (!rev.isFirst) {
      timeout = setTimeout(() => {
        setLoading(true);
      }, 300);
    }
  },
  onEnd({ isFirst }: RequestEvent) {
    if (timeout) clearTimeout(timeout);
    setLoading(false);
    if (!isFirst) {
      dispatchEvent(new Event("page:end"));
      window.scrollTo(0, 0);
    }
  },
  onError(err: Error) {
    setLoading(false);
    // print log error
    console.error(err);
  },
}
