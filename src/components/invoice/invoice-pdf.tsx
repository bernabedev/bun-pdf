import { pdfContainers } from "@/lib/pdfStyles";
import { registerFont } from "@/lib/register-font";
import { Document, Page } from "@react-pdf/renderer";
import { PdfDetails } from "./pdfDetails";
registerFont;

export default function InvoicePDF() {
  return (
    <Document>
      <Page size="A4" style={pdfContainers.page}>
        <PdfDetails
          yourDetails={{
            yourEmail: "john.doe@example.com",
            yourName: "John Doe",
            yourAddress: "123 Main St",
            yourCity: "New York",
            yourState: "NY",
            yourCountry: "USA",
            yourLogo: "https://example.com/logo.png",
            yourTaxId: "123-45-6789",
            yourZip: "10001",
          }}
          companyDetails={{
            email: "company@example.com",
            companyName: "Tech Solutions LLC",
            companyAddress: "456 Business Rd",
            companyCity: "San Francisco",
            companyState: "CA",
            companyCountry: "USA",
            companyLogo:
              "https://ey9q2s6cjw.ufs.sh/f/F8W0r73lzfKU7L3ddUze8wmEsNb2rJHOdAZh5YlVkxaTDI1y",
            companyTaxId: "98-7654321",
            companyZip: "94105",
          }}
          invoiceDetails={{
            note: "Thank you for your business!",
            discount: "10%",
            taxRate: "8%",
            items: [
              {
                itemDescription: "Web Development Services",
                qty: 1,
                amount: 2000,
              },
              {
                itemDescription: "SEO Optimization",
                qty: 1,
                amount: 500,
              },
            ],
            currency: "USD",
          }}
          paymentDetails={{
            bankName: "Bank of America",
            accountNumber: "123456789",
            accountName: "Tech Solutions LLC",
            routingCode: "987654321",
            swiftCode: "BOFAUS3N",
            ifscCode: "BOFAUS3NXXX",
            currency: "USD",
          }}
          invoiceTerms={{
            invoiceNumber: "INV-20240310",
            issueDate: "2025-03-10",
            dueDate: "2025-03-24",
          }}
          countryImageUrl={"https://example.com/flag-usa.png"}
        />
      </Page>
    </Document>
  );
}
