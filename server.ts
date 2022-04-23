import maze from "./maze.build.js";

maze(import.meta.url).listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});