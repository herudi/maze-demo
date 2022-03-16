import { initApp } from "./@shared/http.ts";

const maze = initApp(import.meta.url);
maze.listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});
