/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";
import { $t } from "../../lib/helpers";
import { pdfContainers, pdfTypography } from "../../lib/pdfStyles";

export const CompanyDetailsPdf: React.FC<CompanyDetails & { lang: string }> = ({
  email,
  companyName,
  companyAddress,
  companyCity,
  companyState,
  companyCountry,
  companyLogo,
  companyTaxId,
  companyZip,
  lang,
}) => (
  <View style={pdfContainers.CompanyDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14 }}>
      {$t("to", lang)}
    </Text>
    <View style={pdfContainers.imageContainer}>
      {companyLogo && (
        <Image src={companyLogo} style={{ height: 40, borderRadius: 6 }} />
      )}
    </View>
    {companyName && (
      <Text style={{ ...pdfTypography.text2xl, flexWrap: "wrap" }}>
        {companyName}
      </Text>
    )}
    {email && (
      <Text style={{ ...pdfTypography.description, marginBottom: 12 }}>
        {email}
      </Text>
    )}
    <View style={pdfTypography.description}>
      {companyAddress && <Text>{companyAddress}</Text>}
      {(companyCity || companyState || companyZip) && (
        <Text style={{ marginBottom: 2 }}>
          {companyCity}, {companyState} {companyZip}
        </Text>
      )}
      {companyCountry && (
        <Text style={{ marginBottom: 4 }}>{companyCountry}</Text>
      )}
      {companyTaxId && (
        <Text>
          {$t("tax_id", lang)}: {companyTaxId}
        </Text>
      )}
    </View>
  </View>
);
