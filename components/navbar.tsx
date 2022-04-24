/** @jsx h */
import { Component, h, Router } from "nano-jsx";
import { PageProps } from "maze";

const { Link } = Router;
const active = "bg-gray-200 text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:bg-gray-900 dark:text-white";
const in_active = "text-gray-900 hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white";
const btn_switch = "bg-gray-300 text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:bg-gray-700 dark:text-white";

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
      <nav class="bg-white lg:border-b sticky top-0 z-10 dark:bg-gray-800 dark:lg:border-gray-900">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-start">
              <div class="sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <Link to="/" class={pathname === '/' ? active : in_active}>
                    Home
                  </Link>
                  <Link to="/blog" class={pathname.startsWith("/blog") ? active : in_active}>
                    Blog
                  </Link>
                  <Link to="/sign" class={in_active}>
                    Sign Form
                  </Link>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button style="width: 80px" onClick={this.onSwitch.bind(this)} class={btn_switch}>{this.text_switch}</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
