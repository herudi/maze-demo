/** @jsx h */
import { Component, h, Router } from "nano-jsx";
import { PageProps } from "maze";

const { Link } = Router;
const active = "bg-gray-200 text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:bg-gray-900 dark:text-white";
const in_active = "text-gray-900 hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white";
const btn_switch = "bg-gray-300 text-gray-900 px-3 py-2 rounded-md text-sm font-medium dark:bg-gray-700 dark:text-white";

export default class Navbar extends Component<PageProps> {
  text_switch = this.props.isServer ? "" : (window as any).__btn_switch;

  didMount() {
    addEventListener("page:end", () => {
      this.update(location.pathname);
    });
  }

  onSwitch() {
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
            {
              this.text_switch && (
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button onClick={this.onSwitch.bind(this)} class={btn_switch} aria-label="Dark mode switch">{this.text_switch === "Dark" ? <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                  </svg> : <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>}</button>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    );
  }
}
