export class Config {
  readonly port: number;
  readonly environment: string;
  readonly staticDir: string;
  readonly cacheControl: {
    maxAge: number;
  };

  constructor() {
    this.port = Number(process.env.PORT) || 3000;
    this.environment = process.env.NODE_ENV || "development";
    this.staticDir = "./public";
    this.cacheControl = {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    };
  }

  get isDevelopment(): boolean {
    return this.environment === "development";
  }

  get isProduction(): boolean {
    return this.environment === "production";
  }
}
