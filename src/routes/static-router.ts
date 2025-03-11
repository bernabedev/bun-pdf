import { StaticController } from "../controllers/static-controller";

export class StaticRouter {
  private staticController: StaticController;

  constructor() {
    this.staticController = new StaticController();
  }

  async handleRequest(req: Request, url: URL): Promise<Response> {
    return this.staticController.serveStaticFile(req, url);
  }
}
