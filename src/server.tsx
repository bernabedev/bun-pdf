import { pdf } from "@react-pdf/renderer";
import { existsSync } from "fs";
import { renderToReadableStream } from "react-dom/server";
import HomePage from "./components/home/home-page";
import InvoicePDF from "./components/invoice/invoice-pdf";
import { InvoicePDFSchema } from "./schemas/invoice";

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const stream = await renderToReadableStream(<HomePage />);
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (url.pathname.startsWith("/public")) {
      const filePath = url.pathname.replace("/", "");
      if (existsSync(filePath)) {
        const file = Bun.file(filePath);
        return new Response(file, {
          headers: { "Content-Type": getContentType(filePath) },
        });
      }
    }

    if (url.pathname === "/api/pdf/invoice") {
      if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }

      const lang = url.searchParams.get("lang") ?? "en";

      const body = await req.json();
      const validationResult = InvoicePDFSchema.safeParse(body);

      if (!validationResult.success) {
        return new Response(
          JSON.stringify({
            success: false,
            errors: validationResult.error.format(),
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      const validatedData = validationResult.data;
      const blob = await pdf(
        <InvoicePDF data={{ ...validatedData, lang }} />
      ).toBlob();

      return new Response(blob, {
        headers: { "Content-Type": "application/pdf" },
      });
    } else {
      return new Response("Not Found", { status: 404 });
    }
  },
  port: 3000,
});

console.log("Server is running at http://localhost:3000");

const getContentType = (path: string): string => {
  const ext = path.split(".").pop();
  const types: Record<string, string> = {
    ico: "image/x-icon",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    css: "text/css",
    js: "application/javascript",
    html: "text/html",
    json: "application/json",
    svg: "image/svg+xml",
  };
  return types[ext || ""] || "application/octet-stream";
};
