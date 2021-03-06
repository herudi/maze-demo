import { HttpError } from "nhttp";
import { RequestEvent } from "maze";

export default async function handler(rev: RequestEvent) {
  if (rev.request.method == "GET") return {};
  if (rev.request.method == "POST") {
    const { username, password } = rev.body;
    if (username === "deno" && password === "nanojsx") {
      return { message: "success" };
    }
    return { message: "wrong username and password" };
  }
  throw new HttpError(405, "method not allowed");
}
