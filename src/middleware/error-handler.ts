import { Config } from "../config";

export class ErrorHandler {
  constructor(private config: Config) {}

  handle(error: Error | unknown): Response {
    if (error instanceof Error) {
      if (this.config.isDevelopment) {
        console.error("Server error:", error);
      }

      return new Response(
        JSON.stringify({
          success: false,
          message: "Internal Server Error",
          ...(this.config.isDevelopment ? { stack: error.stack } : {}),
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
