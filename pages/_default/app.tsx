/** @jsx h */
import { h, Helmet, Fragment } from "nano-jsx";
import { AppProps, RequestEvent } from "maze";
import Navbar from "../../components/navbar.tsx";

const loading_view = `<div class="fixed top-0 left-0 right-0 z-10">
<div class="w-full"><div class="animate-pulse flex"><div class="flex-1"><div class="h-0.5 bg-blue-700"></div></div></div></div>
</div>`;

function setLoading(bool: boolean) {
  const loading = document.getElementById("loading") as any;
  loading.innerHTML = bool ? loading_view : "";
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
      </Helmet>
      <Navbar {...props} />
      <div id="__MAZE_PAGE__"><Page {...props} /></div>
      <div id="loading"></div>
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
