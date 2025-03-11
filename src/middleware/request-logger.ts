import chalk from "chalk";

export class RequestLogger {
  async handle(req: Request, url: URL): Promise<void> {
    const start = performance.now();

    // Store the start time in a global Map or WeakMap
    // so we can access it in the completion handler
    const requestId = crypto.randomUUID();
    (globalThis as any).__requestTimers =
      (globalThis as any).__requestTimers || new Map();
    (globalThis as any).__requestTimers.set(requestId, {
      start,
      method: req.method,
      path: url.pathname,
    });

    // We'll return the requestId so the server can use it in completion logging
    (req as any).__requestId = requestId;
  }

  logCompletion(requestId: string, status: number): void {
    const timers = (globalThis as any).__requestTimers;
    if (!timers || !timers.has(requestId)) return;

    const { start, method, path } = timers.get(requestId);
    const duration = performance.now() - start;

    // Format status code with color based on range
    let statusColor;
    if (status < 300) {
      statusColor = chalk.green(status); // Success (2xx)
    } else if (status < 400) {
      statusColor = chalk.cyan(status); // Redirection (3xx)
    } else if (status < 500) {
      statusColor = chalk.yellow(status); // Client Error (4xx)
    } else {
      statusColor = chalk.red(status); // Server Error (5xx)
    }

    // Format method with color
    let methodColor;
    switch (method) {
      case "GET":
        methodColor = chalk.blue(method);
        break;
      case "POST":
        methodColor = chalk.green(method);
        break;
      case "PUT":
        methodColor = chalk.yellow(method);
        break;
      case "DELETE":
        methodColor = chalk.red(method);
        break;
      default:
        methodColor = chalk.gray(method);
    }

    // Format duration with color based on response time
    let durationColor;
    const durationMs = parseFloat(duration.toFixed(2));
    if (durationMs < 50) {
      durationColor = chalk.green(`${durationMs}ms`);
    } else if (durationMs < 200) {
      durationColor = chalk.cyan(`${durationMs}ms`);
    } else if (durationMs < 500) {
      durationColor = chalk.yellow(`${durationMs}ms`);
    } else {
      durationColor = chalk.red(`${durationMs}ms`);
    }

    // Minimalist output with consistent spacing and right alignment for timing
    const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
    console.log(
      `${chalk.gray(timestamp)} ${methodColor} ${chalk.white.underline(
        path
      )} ${statusColor} ${durationColor}`
    );

    // Clean up
    timers.delete(requestId);
  }
}
