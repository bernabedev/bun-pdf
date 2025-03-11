import { Config } from "./config";
import { ErrorHandler } from "./middleware/error-handler";
import { RequestLogger } from "./middleware/request-logger";
import { Router } from "./routes/router";

class Server {
  private router: Router;
  private requestLogger: RequestLogger;
  private errorHandler: ErrorHandler;

  constructor(public readonly config: Config) {
    this.router = new Router();
    this.requestLogger = new RequestLogger();
    this.errorHandler = new ErrorHandler(config);
  }

  start(): void {
    Bun.serve({
      port: this.config.port,
      fetch: this.handleRequest.bind(this),
    });
  }

  private async handleRequest(req: Request): Promise<Response> {
    const url = new URL(req.url);
    let response: Response;
    try {
      // Apply middleware
      await this.requestLogger.handle(req, url);

      // Route the request
      response = await this.router.handleRequest(req, url);
    } catch (error) {
      response = this.errorHandler.handle(error);
    }

    const requestId = (req as any).__requestId;
    if (requestId) {
      this.requestLogger.logCompletion(requestId, response.status);
    }

    return response;
  }
}

const app = new Server(new Config());
app.start();

console.log(`Server is running on port ${app.config.port}`);
