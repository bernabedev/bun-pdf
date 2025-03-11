import {
  Document,
  Image,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 10,
    fontFamily: "Helvetica",
  },
  labelContainer: {
    border: "1pt solid #000000",
    padding: 15,
    height: "100%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  barcode: {
    textAlign: "center",
    fontSize: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  barcodeLines: {
    height: 20,
    marginBottom: 5,
    textAlign: "center",
  },
  trackingNumber: {
    fontSize: 10,
    textAlign: "center",
  },
  addressContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  addressBox: {
    width: "47%",
    padding: 10,
    border: "1pt solid #000000",
  },
  addressTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  addressText: {
    fontSize: 9,
    marginBottom: 2,
  },
  shippingInfo: {
    marginTop: 20,
    marginBottom: 20,
    border: "1pt solid #000000",
    padding: 10,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 9,
    fontWeight: "bold",
    width: "30%",
  },
  infoValue: {
    fontSize: 9,
    width: "70%",
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: "auto",
    paddingTop: 10,
  },
  qrCode: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

// Simple QR code component (placeholder)
const QRCode = () => (
  <Svg viewBox="0 0 100 100" style={styles.qrCode}>
    {/* Simple QR code representation - in reality you would use a proper QR Code generator */}
    <Path
      d="M0,0 h100 v100 h-100 z"
      fill="none"
      stroke="#000"
      strokeWidth={2}
    />
    <Path d="M20,20 h60 v60 h-60 z" fill="none" stroke="#000" strokeWidth={2} />
    <Path
      d="M30,30 h10 v10 h-10 z M60,30 h10 v10 h-10 z M30,60 h10 v10 h-10 z M45,45 h10 v10 h-10 z M60,60 h10 v10 h-10 z"
      fill="#000"
    />
    <Path
      d="M35,35 h5 v5 h-5 z M60,35 h5 v5 h-5 z M35,60 h5 v5 h-5 z M60,60 h5 v5 h-5 z"
      fill="white"
    />
  </Svg>
);

// Create Document Component
const ShippingLabel = ({
  labelData,
  qrURI,
}: {
  labelData: any;
  qrURI?: string;
}) => {
  console.log({ qrURI });
  return (
    <Document>
      <Page size="A6" style={styles.page}>
        <View style={styles.labelContainer}>
          {/* Header with logo and label text */}
          <View style={styles.headerRow}>
            <Text style={styles.companyName}>{labelData.carrier}</Text>
            <Text style={styles.labelText}>SHIPPING LABEL</Text>
          </View>

          {/* Tracking barcode placeholder */}
          <View style={styles.barcode}>
            <Text style={styles.barcodeLines}>
              |||||||||||||||||||||||||||||||
            </Text>
            <Text style={styles.trackingNumber}>
              {labelData.trackingNumber}
            </Text>
          </View>

          {/* From and To addresses */}
          <View style={styles.addressContainer}>
            <View style={styles.addressBox}>
              <Text style={styles.addressTitle}>FROM:</Text>
              <Text style={styles.addressText}>{labelData.sender.name}</Text>
              <Text style={styles.addressText}>{labelData.sender.company}</Text>
              <Text style={styles.addressText}>{labelData.sender.street}</Text>
              <Text style={styles.addressText}>
                {labelData.sender.city}, {labelData.sender.state}{" "}
                {labelData.sender.zip}
              </Text>
              <Text style={styles.addressText}>{labelData.sender.country}</Text>
              <Text style={styles.addressText}>
                Phone: {labelData.sender.phone}
              </Text>
            </View>

            <View style={styles.addressBox}>
              <Text style={styles.addressTitle}>TO:</Text>
              <Text style={styles.addressText}>{labelData.recipient.name}</Text>
              <Text style={styles.addressText}>
                {labelData.recipient.company}
              </Text>
              <Text style={styles.addressText}>
                {labelData.recipient.street}
              </Text>
              <Text style={styles.addressText}>
                {labelData.recipient.city}, {labelData.recipient.state}{" "}
                {labelData.recipient.zip}
              </Text>
              <Text style={styles.addressText}>
                {labelData.recipient.country}
              </Text>
              <Text style={styles.addressText}>
                Phone: {labelData.recipient.phone}
              </Text>
            </View>
          </View>

          {/* Shipping information */}
          <View style={styles.shippingInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Weight:</Text>
              <Text style={styles.infoValue}>
                {labelData.weight} {labelData.weightUnit}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Method:</Text>
              <Text style={styles.infoValue}>{labelData.shippingMethod}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Package Type:</Text>
              <Text style={styles.infoValue}>{labelData.packageType}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Instructions:</Text>
              <Text style={styles.infoValue}>
                {labelData.specialInstructions}
              </Text>
            </View>
          </View>

          {/* QR Code */}
          {qrURI && <Image src={qrURI} style={{ height: 30, width: 30 }} />}

          {/* Footer */}
          <View style={styles.footer}>
            <Text>
              Shipped on: {labelData.shipDate} • Label created:{" "}
              {labelData.creationDate}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Sample label data
const sampleLabelData = {
  carrier: "BERNALUX",
  trackingNumber: "1Z999AA1234567890",
  sender: {
    name: "John Doe",
    company: "Acme Corporation",
    street: "123 Sender Street",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "USA",
    phone: "555-123-4567",
  },
  recipient: {
    name: "Jane Smith",
    company: "XYZ Inc.",
    street: "456 Receiver Avenue",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    phone: "555-987-6543",
  },
  weight: "2.5",
  weightUnit: "lbs",
  shippingMethod: "Priority Overnight",
  packageType: "Small Box",
  specialInstructions: "Handle with care",
  shipDate: "2025-03-11",
  creationDate: "2025-03-10",
};

// Component with download link
const ShippingLabelGenerator = (props: { qrURI?: string }) => (
  <ShippingLabel labelData={sampleLabelData} qrURI={props.qrURI} />
);

export default ShippingLabelGenerator;
