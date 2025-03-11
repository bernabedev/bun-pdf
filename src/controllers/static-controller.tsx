import { existsSync } from "fs";
import { Config } from "../config";
import { ContentTypeUtil } from "../lib/content-type-util";

export class StaticController {
  private config: Config;
  private contentTypeUtil: ContentTypeUtil;

  constructor() {
    this.config = new Config();
    this.contentTypeUtil = new ContentTypeUtil();
  }

  async serveStaticFile(req: Request, url: URL): Promise<Response> {
    const filePath = url.pathname.replace("/public/", "");
    const fullPath = `${this.config.staticDir}/${filePath}`;

    if (existsSync(fullPath)) {
      const file = Bun.file(fullPath);
      return new Response(file, {
        headers: {
          "Content-Type": this.contentTypeUtil.getContentType(fullPath),
          "Cache-Control": `max-age=${this.config.cacheControl.maxAge}`,
        },
      });
    }

    return new Response("File Not Found", { status: 404 });
  }
}
