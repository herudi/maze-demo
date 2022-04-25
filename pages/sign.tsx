/** @jsx h */
import { Component, Fragment, h, Helmet } from "nano-jsx";
import { PageProps, InitPage } from "maze";

const style = {
  input:
    "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
};

@InitPage({
  props: async ({ isServer, request, response, fetchApi }) => {
    if (isServer && request.method === "POST") {
      const { data } = await fetchApi("/api/sign");
      if (data.message === "success") {
        // if success will redirect to home
        return response.redirect("/");
      }
      return { message: data.message };
    }
    return {};
  },
  methods: ["GET", "POST"]
})
class Sign extends Component<PageProps> {

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Sign Page</title>
        </Helmet>
        <div class="h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
          <div class="max-w-sm w-full space-y-8">
            <div>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                Sign Page
              </h2>
              <p class="text-center dark:text-white">(Example handle formData)</p>
              {this.props.message && (
                <div
                  class="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong class="font-bold">Error</strong>
                  <span class="block sm:inline">{this.props.message}</span>
                  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      class="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              )}
              <form class="mt-8 space-y-6" action="/sign" method="POST">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label class="sr-only">Username</label>
                    <input
                      name="username"
                      type="text"
                      class={style.input}
                      placeholder="Username = deno"
                      requied
                    />
                  </div>
                  <div>
                    <label class="sr-only">Password</label>
                    <input
                      name="password"
                      type="password"
                      class={style.input}
                      placeholder="Password = nanojsx"
                      requied
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sign;
