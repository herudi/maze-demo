import { initApp } from "./@shared/http.ts";

initApp(import.meta.url).listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});