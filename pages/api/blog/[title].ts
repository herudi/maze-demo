import { HttpError } from "nhttp";
import { RequestEvent } from "types";

export default async function handler(rev: RequestEvent) {
  if (rev.request.method == "GET") {
    const data = await (await fetch(
      `https://jsonplaceholder.typicode.com/posts?title=${rev.params.title.replace(/\-/g, " ")}`,
    )).json();
    if (!data[0]) {
      throw new HttpError(404, "Data not found");
    }
    return data[0];
  }
  throw new HttpError(405, "method not allowed");
}
