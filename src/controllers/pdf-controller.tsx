import { InvoicePDFSchema } from "../schemas/invoice";
import { PdfService } from "../services/pdf-service";

export class PdfController {
  private pdfService: PdfService;

  constructor() {
    this.pdfService = new PdfService();
  }

  async generateInvoicePDF(req: Request, url: URL): Promise<Response> {
    if (req.method !== "POST" && req.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const lang = url.searchParams.get("lang") ?? "en";

    try {
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
      if (req.method === "GET") {
        const stream = await this.pdfService.generateInvoiceHtml(
          validatedData,
          lang
        );
        return new Response(stream, {
          headers: {
            "Content-Type": "text/html",
            "Content-Disposition": `attachment; filename="invoice-${validatedData.invoiceTerms.invoiceNumber}.html"`,
          },
        });
      }
      const blob = await this.pdfService.generateInvoicePDF(
        validatedData,
        lang
      );

      return new Response(blob, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="invoice-${validatedData.invoiceTerms.invoiceNumber}.pdf"`,
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to process request",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  async generateShippingLabelPDF(req: Request, url: URL): Promise<Response> {
    if (req.method !== "POST" && req.method !== "GET") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    if (req.method === "GET") {
      const stream = await this.pdfService.generateShippingLabelHtml();
      return new Response(stream, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    const blob = await this.pdfService.generateShippingLabelPDF();

    return new Response(blob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="shipping-label.pdf"`,
      },
    });
  }
}
