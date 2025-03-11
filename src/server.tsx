// src/server.tsx
import { pdf } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
import App from "./App";

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      // Generar y devolver el PDF
      const blob = await pdf(<App />).toBlob();
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
