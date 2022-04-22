/** @jsx h */
import { Component, Fragment, h, Helmet, Router } from "nano-jsx";
import { PageProps, InitProps } from "maze";

const { Link } = Router;

@InitProps(async () => {
  const data = await (await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  )).json();
  return { data };
})
class Blog extends Component<PageProps> {
  
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Hello Blog Page</title>
        </Helmet>
        <div class="bg-white min-h-screen dark:bg-gray-800">
          <main class="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
            <header class="pt-10 pb-9 sm:pb-16 sm:text-center">
              <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold dark:text-white">
                Blog
              </h1>
              <p class="text-lg dark:text-white">
                Example blog page with dummy data from <a target="_blank" href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a>
              </p>
            </header>
            <div class="space-y-16">
              {this.props.data.map((el: any) => (
                <article class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]">
                  <h3 class="mb-4 text-xl tracking-tight font-bold dark:text-white">
                    <Link to={"/blog/" + el.title.replace(/\s/g, "-")}>{el.title}</Link>
                  </h3>
                  <div class="mb-6 dark:text-white">
                    <p>{el.body}</p>
                  </div>
                  <div class="mt-auto flex flex-row-reverse items-center justify-end">
                    <div class="text-sm leading-6 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap dark:text-white">
                      January, 12 2030
                    </div>
                    <Link
                      to={"/blog/" + el.title.replace(/\s/g, "-")}
                      class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)">
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
