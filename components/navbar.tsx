/** @jsx h */
import { Component, h, Router } from "nano-jsx";
import { tw } from "twind";
import { PageProps } from "types";

const { Link } = Router;
const active = "bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium";
const in_active = "text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium";
const btn_switch = "bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium";

export default class Navbar extends Component<PageProps> {
  text_switch = ".";
  constructor(props: PageProps) {
    super(props);
    if (!props.isServer) {
      this.text_switch = (window as any).__btn_switch;
    }
  }

  didMount() {
    addEventListener("page:end", () => {
      this.update(location.pathname);
    });
  }

  onSwitch(){
    const nameClass = document.documentElement.classList;
    if (nameClass && nameClass.value === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
      this.text_switch = "Light";
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.text_switch = "Dark";
    }
    this.update(location.pathname);
  }

  render(_pathname: string) {
    const pathname = _pathname || this.props.route.pathname;
    if (pathname === "/sign") return <div></div>;
    return (
      <nav class={tw`bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10`}>
        <div class={tw`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`}>
          <div class={tw`relative flex items-center justify-between h-16`}>
            <div class={tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`}>
              <div class={tw`sm:block sm:ml-6`}>
                <div class={tw`flex space-x-4`}>
                  <Link to="/" class={tw`${pathname === '/' ? active : in_active}`}>
                    Home
                  </Link>
                  <Link to="/blog" class={tw`${pathname.startsWith("/blog") ? active : in_active}`}>
                    Blog
                  </Link>
                  <Link to="/sign" class={tw`${in_active}`}>
                    Sign Form
                  </Link>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a class={tw`${in_active}`}
                href="https://github.com/herudi/maze"
                target="_blank"
              >
                Github
              </a>
              <button style="width: 80px" onClick={this.onSwitch.bind(this)} class={tw`${btn_switch}`}>{this.text_switch}</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
