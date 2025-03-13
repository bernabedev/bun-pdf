import { pdf } from "@react-pdf/renderer";
import InvoicePDF from "../components/invoice/invoice-pdf";
import type { InvoicePDFData } from "../schemas/invoice";
import ShippingLabel from "../components/shipping/shipping-label";

export class PdfService {
  async generateInvoicePDF(data: InvoicePDFData, lang: string): Promise<Blob> {
    // Create a PDF from the React component
    const pdfDoc = pdf(<InvoicePDF data={{ ...data, lang }} />);

    return await pdfDoc.toBlob();
  }

  async generateShippingLabelPDF(): Promise<Blob> {
    // Create a PDF from the React component
    const pdfDoc = pdf(<ShippingLabel />);
    // Save the PDF to a file with bun
    const blob = await pdfDoc.toBlob();
    // const arrayBuffer = await blob.arrayBuffer();
    // await Bun.write("shipping-label.pdf", new Uint8Array(arrayBuffer));
    return blob;
  }
}
