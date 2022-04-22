/** @jsx h */
import { Component, Fragment, h, Helmet, Router } from "nano-jsx";
import { PageProps, InitProps } from "maze";
import ErrorPage from "../_default/error.tsx";

const { Link } = Router;

@InitProps(async ({ params }) => {
  const data = await (await fetch(
    `https://jsonplaceholder.typicode.com/posts?title=${params.title.replace(/\-/g, " ")}`,
  )).json();
  if (!data[0]) {
    return {
      error: {
        status: 404,
        message: "blog not found"
      }
    }
  }
  return { data: data[0] };
})
class BlogDetail extends Component<PageProps> {

  render() {
    if (this.props.error) return <ErrorPage {...this.props.error} />;
    return (
      <Fragment>
        <Helmet>
          <title>{this.props.data.title}</title>
        </Helmet>
        <div class="bg-white flex h-screen dark:bg-gray-800">
          <div class="max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
            <div>
              <div class="text-sm sm:text-center dark:text-white">
                January, 12 2030
              </div>
              <h1 class="col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight dark:text-white">
                {this.props.data.title}
              </h1>
              <p class="mb-20 dark:text-white">{this.props.data.body}</p>
              <Link
                to={"/blog"}
                class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)">
                Back
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogDetail;
