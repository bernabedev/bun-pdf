import { PdfController } from "../controllers/pdf-controller";

export class ApiRouter {
  private pdfController: PdfController;

  constructor() {
    this.pdfController = new PdfController();
  }

  async handleRequest(req: Request, url: URL): Promise<Response> {
    // PDF invoice generation
    if (url.pathname === "/api/pdf/invoice") {
      return this.pdfController.generateInvoicePDF(req, url);
    }

    // Add more API routes here

    return new Response("API Endpoint Not Found", { status: 404 });
  }
}
