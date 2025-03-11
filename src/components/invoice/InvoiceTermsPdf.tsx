import { $t } from "@/lib/helpers";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import React from "react";
import { pdfContainers, pdfTypography, pdfUtils } from "../../lib/pdfStyles";

export const InvoiceTermsPdf: React.FC<InvoiceTerms & { lang: string }> = ({
  invoiceNumber,
  issueDate,
  dueDate,
  lang,
}) => (
  <View style={pdfContainers.invoiceTerms}>
    <View style={{ flex: 1 }}>
      <Text style={pdfTypography.title}>{$t("invoice_no", lang)}</Text>
      <Text style={pdfTypography.subTitle}>{invoiceNumber}</Text>
    </View>
    <View
      style={{
        ...pdfUtils.flexRowBetween,
        paddingRight: 20,
        paddingLeft: 100,
        flex: 1,
      }}
    >
      <View>
        <Text style={pdfTypography.title}>{$t("issued", lang)}</Text>
        <Text style={pdfTypography.subTitle}>
          {issueDate ? format(issueDate, "do MMM yyyy") : ""}
        </Text>
      </View>
      <View>
        <Text style={pdfTypography.title}>{$t("due_date", lang)}</Text>
        <Text style={pdfTypography.subTitle}>
          {dueDate ? format(dueDate, "do MMM yyyy") : ""}
        </Text>
      </View>
    </View>
  </View>
);
