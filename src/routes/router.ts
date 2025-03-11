import { HomeController } from "../controllers/home-controller";
import { ApiRouter } from "./api-router";
import { StaticRouter } from "./static-router";

export class Router {
  private apiRouter: ApiRouter;
  private staticRouter: StaticRouter;
  private homeController: HomeController;

  constructor() {
    this.apiRouter = new ApiRouter();
    this.staticRouter = new StaticRouter();
    this.homeController = new HomeController();
  }

  async handleRequest(req: Request, url: URL): Promise<Response> {
    // Home route
    if (url.pathname === "/") {
      return this.homeController.getHomePage();
    }

    // Static files
    if (url.pathname.startsWith("/public")) {
      return this.staticRouter.handleRequest(req, url);
    }

    // API routes
    if (url.pathname.startsWith("/api")) {
      return this.apiRouter.handleRequest(req, url);
    }

    // 404 Not Found
    return new Response("Not Found", { status: 404 });
  }
}
