/** @jsx h */
import { Component, h, Helmet, Fragment } from "nano-jsx";
import { PageProps } from "maze";

const style = {
  gh_button: "text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",
  button: "text-2xl px-6 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
};

export default class Home extends Component<PageProps> {

  value = 0;
  changeValue(newValue: number) {
    this.value += newValue;
    this.update();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Hello Home Page</title>
        </Helmet>
        <div class="bg-white dark:bg-gray-800 flex justify-center h-screen">
          <div>
            <div class="text-center mt-20 mb-10 text-gray-600 dark:text-white">
              <h3 class="text-5xl">
                Welcome Home
              </h3>
              <p class="text-2xl dark:text-white">Example Counter App</p>
            </div>
            <div class="text-center">
              <button class={style.button} onClick={() => this.changeValue(1)}>
                +
              </button>
              <span class="p-5 text-2xl font-bold text-blue-800 dark:text-white">
                {this.value}
              </span>
              <button class={style.button} onClick={() => this.changeValue(-1)}>
                -
              </button>
              <div class="mt-10">
                <a class={style.gh_button}
                  href="https://github.com/herudi/maze"
                  target="_blank"
                >
                 -= GITHUB =-
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
