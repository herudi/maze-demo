import { initApp } from "./@shared/http.ts";

const app = await initApp(/* callback app */);
app.listen(8080, () => {
  console.log("> Running on http://localhost:8080");
});
