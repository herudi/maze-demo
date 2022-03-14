/** @jsx h */
import { Component, h, Helmet } from "nano-jsx";
import { tw } from "twind";
import { PageProps } from "types";

const style = {
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
      <div>
        <Helmet>
          <title>Hello Home Page</title>
        </Helmet>
        <div class={tw`bg-white dark:bg-gray-800 flex justify-center h-screen`}>
          <div>
            <div class={tw`text-center mt-20 mb-10 text-gray-600 dark:text-white`}>
              <h3 class={tw`text-5xl`}>
                Welcome Home
              </h3>
              <p class={tw`text-2xl dark:text-white`}>Example Counter App</p>
            </div>
            <div class={tw`text-center`}>
              <button class={tw`${style.button}`} onClick={() => this.changeValue(1)}>
                +
              </button>
              <span class={tw`p-5 text-2xl font-bold text-blue-800 dark:text-white`}>
                {this.value}
              </span>
              <button class={tw`${style.button}`} onClick={() => this.changeValue(-1)}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
