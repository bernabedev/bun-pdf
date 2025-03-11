import { pdfContainers } from "@/lib/pdfStyles";
import { registerFont } from "@/lib/register-font";
import { Document, Page } from "@react-pdf/renderer";
import { PdfDetails } from "./pdfDetails";
registerFont;

type Props = {
  data: {
    clientDetails: YourDetails;
    companyDetails: CompanyDetails;
    invoiceDetails: InvoiceItemDetails;
    paymentDetails: PaymentDetails;
    invoiceTerms: InvoiceTerms;
    countryImageUrl?: string;
  };
};
export default function InvoicePDF(props: Props) {
  const {
    data: {
      clientDetails,
      companyDetails,
      invoiceDetails,
      paymentDetails,
      invoiceTerms,
      countryImageUrl,
    },
  } = props;

  return (
    <Document>
      <Page size="A4" style={pdfContainers.page}>
        <PdfDetails
          yourDetails={clientDetails}
          companyDetails={companyDetails}
          invoiceDetails={invoiceDetails}
          paymentDetails={paymentDetails}
          invoiceTerms={invoiceTerms}
          countryImageUrl={
            countryImageUrl ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-jfVkWV3aJSGYUpsaKGcZ8zNHmKMUJqOHJ4lvG9lmRH-3QMarLWJVmEM0ewN&s=10"
          }
        />
      </Page>
    </Document>
  );
}
