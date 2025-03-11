import { View } from "@react-pdf/renderer";
import { pdfUtils } from "../../lib/pdfStyles";
import { InvoiceTermsPdf } from "./InvoiceTermsPdf";
import { CompanyDetailsPdf } from "./companyDetailsPdf";
import { InvoiceDetailsPdf } from "./invoiceDetailsPdf";
import { PaymentDetailsPdf } from "./paymentDetailsPdf";
import { YourDetailsPDF } from "./yourDetailsPdf";

export const PdfDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
  countryImageUrl,
  lang,
}: {
  lang: string;
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
  countryImageUrl: string;
}) => (
  <View>
    <InvoiceTermsPdf {...invoiceTerms} lang={lang} />
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        ...pdfUtils.borderTop,
        ...pdfUtils.borderBottom,
      }}
    >
      <YourDetailsPDF {...yourDetails} lang={lang} />
      <CompanyDetailsPdf {...companyDetails} lang={lang} />
    </View>
    <View>
      <View style={pdfUtils.borderBottom}>
        <InvoiceDetailsPdf {...invoiceDetails} lang={lang} />
      </View>
      <View>
        <PaymentDetailsPdf
          {...paymentDetails}
          countryImageUrl={countryImageUrl}
          lang={lang}
        />
      </View>
    </View>
  </View>
);
