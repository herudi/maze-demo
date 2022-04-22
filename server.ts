import maze from "./maze.ts";

maze.listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});