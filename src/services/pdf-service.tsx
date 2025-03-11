import InvoicePDF from "@/components/invoice/invoice-pdf";
import { pdf } from "@react-pdf/renderer";
import type { InvoicePDFData } from "../schemas/invoice";

export class PdfService {
  async generateInvoicePDF(data: InvoicePDFData, lang: string): Promise<Blob> {
    // Create a PDF from the React component
    const pdfDoc = pdf(<InvoicePDF data={{ ...data, lang }} />);

    return await pdfDoc.toBlob();
  }
}
