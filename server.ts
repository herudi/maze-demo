import { initApp } from "./@shared/http.ts";

const maze = initApp(import.meta.url);
maze.listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});

// const maze = initApp("https://raw.githubusercontent.com/herudi/maze-demo/master/public");
// addEventListener("fetch", (e: any) => {
//   e.respondWith(maze.handleEvent(e));
// })

