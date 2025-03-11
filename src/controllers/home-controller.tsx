import { renderToReadableStream } from "react-dom/server";
import HomePage from "../components/home/home-page";

export class HomeController {
  async getHomePage(): Promise<Response> {
    const stream = await renderToReadableStream(<HomePage />);
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  }
}
