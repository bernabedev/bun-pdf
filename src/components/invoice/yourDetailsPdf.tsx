/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";
import { $t } from "../../lib/helpers";
import { pdfContainers, pdfTypography } from "../../lib/pdfStyles";

export const YourDetailsPDF: React.FC<YourDetails & { lang: string }> = ({
  yourEmail,
  yourName,
  yourAddress,
  yourCity,
  yourState,
  yourCountry,
  yourLogo,
  yourTaxId,
  yourZip,
  lang,
}) => (
  <View style={pdfContainers.YourDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14 }}>
      {$t("from", lang)}
    </Text>

    <View style={pdfContainers.imageContainer}>
      {yourLogo && (
        <Image style={{ height: 40, borderRadius: 6 }} src={yourLogo} />
      )}
    </View>
    {yourName && <Text style={pdfTypography.text2xl}>{yourName}</Text>}
    {yourEmail && (
      <Text style={{ ...pdfTypography.description, marginBottom: 12 }}>
        {yourEmail}
      </Text>
    )}
    <View style={pdfTypography.description}>
      {yourAddress && <Text>{yourAddress}</Text>}
      {(yourCity || yourState || yourZip) && (
        <Text style={{ marginBottom: 2 }}>
          {yourCity}, {yourState} {yourZip}
        </Text>
      )}
      {yourCountry && <Text style={{ marginBottom: 4 }}>{yourCountry}</Text>}
      {yourTaxId && (
        <Text>
          {$t("tax_id", lang)}:{yourTaxId}
        </Text>
      )}
    </View>
  </View>
);
