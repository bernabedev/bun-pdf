import { pdf } from "@react-pdf/renderer";
import InvoicePDF from "./components/invoice/invoice-pdf";

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/pdf/invoice") {
      // Generar y devolver el PDF
      const blob = await pdf(<InvoicePDF />).toBlob();
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
