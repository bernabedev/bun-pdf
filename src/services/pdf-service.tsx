import { pdf } from "@react-pdf/renderer";
import { renderToReadableStream } from "react-dom/server";
import InvoicePDF from "../components/invoice/invoice-pdf";
import ShippingLabel from "../components/shipping/shipping-label";
import ShippingLabelHtml from "../components/shipping/shipping-label-html";
import type { InvoicePDFData } from "../schemas/invoice";

export class PdfService {
  async generateInvoicePDF(data: InvoicePDFData, lang: string): Promise<Blob> {
    // Create a PDF from the React component
    const pdfDoc = pdf(<InvoicePDF data={{ ...data, lang }} />);

    return await pdfDoc.toBlob();
  }

  async generateInvoiceHtml(data: InvoicePDFData, lang: string) {
    const stream = await renderToReadableStream(
      <InvoicePDF data={{ ...data, lang }} />
    );
    return stream;
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

  async generateShippingLabelHtml() {
    const stream = await renderToReadableStream(<ShippingLabelHtml />);
    return stream;
  }
}
