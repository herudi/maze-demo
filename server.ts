import maze from "./@shared/maze.ts";

maze(import.meta.url).listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});