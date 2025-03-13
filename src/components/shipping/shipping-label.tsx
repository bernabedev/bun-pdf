import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
  },
  shipmentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#000000",
    borderTopStyle: "solid",
  },
  barcode: {
    marginTop: 15,
    height: 50,
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    fontSize: 8,
    textAlign: "center",
    color: "#555555",
  },
});

// Sample data - replace with your actual data
const shippingData = {
  sender: {
    name: "Bernalux SL",
    street: "Calle Marcelino Paulino, #1",
    city: "Guayabal",
    state: "Santiago",
    zip: "51000",
    country: "Dom Rep",
    phone: "+1 809 539 2000",
  },
  recipient: {
    name: "Juan Perez",
    street: "Calle 27 de Febrero, #1",
    city: "Santiago",
    state: "Santiago",
    zip: "10001",
    country: "Dom Rep",
    phone: "+1 809 872 2132",
  },
  shipment: {
    trackingNumber: "TRK123456789US",
    weight: "2.5 lbs",
    service: "Priority Mail",
    date: "03/12/2025",
  },
  logoUrl:
    "https://ey9q2s6cjw.ufs.sh/f/F8W0r73lzfKU7L3ddUze8wmEsNb2rJHOdAZh5YlVkxaTDI1y", // Placeholder for the logo
  barcodeUrl: "/api/placeholder/200/50", // Placeholder for the barcode
};

// Create Document Component
const ShippingLabel = () => (
  <Document>
    <Page size={{ width: 288, height: 432 }} style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} src={shippingData.logoUrl} />
          <Text style={styles.companyName}>{shippingData.sender.name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FROM:</Text>
          <Text style={styles.text}>{shippingData.sender.name}</Text>
          <Text style={styles.text}>{shippingData.sender.street}</Text>
          <Text style={styles.text}>
            {shippingData.sender.city}, {shippingData.sender.state}{" "}
            {shippingData.sender.zip}
          </Text>
          <Text style={styles.text}>{shippingData.sender.country}</Text>
          <Text style={styles.text}>Phone: {shippingData.sender.phone}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TO:</Text>
          <Text style={styles.text}>{shippingData.recipient.name}</Text>
          <Text style={styles.text}>{shippingData.recipient.street}</Text>
          <Text style={styles.text}>
            {shippingData.recipient.city}, {shippingData.recipient.state}{" "}
            {shippingData.recipient.zip}
          </Text>
          <Text style={styles.text}>{shippingData.recipient.country}</Text>
          <Text style={styles.text}>Phone: {shippingData.recipient.phone}</Text>
        </View>

        <View style={styles.shipmentInfo}>
          <View style={styles.section}>
            <Text style={styles.text}>
              Weight: {shippingData.shipment.weight}
            </Text>
            <Text style={styles.text}>
              Service: {shippingData.shipment.service}
            </Text>
            <Text style={styles.text}>Date: {shippingData.shipment.date}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>TRACKING #:</Text>
            <Text style={[styles.text, { fontWeight: "bold" }]}>
              {shippingData.shipment.trackingNumber}
            </Text>
          </View>
        </View>

        {/* <Image style={styles.barcode} src={shippingData.barcodeUrl} /> */}

        <Text style={styles.footer}>
          This label was created on {shippingData.shipment.date}
        </Text>
      </View>
    </Page>
  </Document>
);

export default ShippingLabel;
