import { Isotipo } from "../shared/isotipo";

export default function ShippingLabelHtml() {
  const shipment = {
    from: {
      name: "Bernalux",
      address: "Calle 27 de Febrero, #1",
      city: "Santiago, Rep. Dominicana",
    },
    to: {
      name: "Josuan Castillo",
      address: "Las Palomas, Licey, Casa 2",
      city: "Santiago, Rep. Dominicana",
    },
    trackingNumber: "TRK1234567890",
    carrier: "Express Shipping",
    weight: "1.2 kg",
    date: "March 13, 2025",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: 432,
        height: 288,
        border: "2px solid #333",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "15px",
          borderBottom: "1px solid #eee",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Simple logo */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <Isotipo style={{ width: 26, height: 26 }} />
            </span>
          </div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#333",
            }}
          >
            {shipment.carrier}
          </span>
        </div>
        <div
          style={{
            backgroundColor: "#f1f1f1",
            padding: "5px 10px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          {shipment.date}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginBottom: "20px",
        }}
      >
        {/* From section */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "12px",
              color: "#666",
              marginBottom: "3px",
            }}
          >
            FROM:
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {shipment.from.name}
          </div>
          <div style={{ fontSize: "14px" }}>{shipment.from.address}</div>
          <div style={{ fontSize: "14px" }}>{shipment.from.city}</div>
        </div>

        {/* To section */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "12px",
              color: "#666",
              marginBottom: "3px",
            }}
          >
            TO:
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {shipment.to.name}
          </div>
          <div style={{ fontSize: "14px" }}>{shipment.to.address}</div>
          <div style={{ fontSize: "14px" }}>{shipment.to.city}</div>
        </div>
      </div>

      <div
        style={{
          marginBottom: "15px",
          padding: "10px",
          backgroundColor: "#f8f8f8",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "3px",
          }}
        >
          TRACKING NUMBER:
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          {shipment.trackingNumber}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <div>Weight: {shipment.weight}</div>
        <div>
          {/* Barcode representation (simplified) */}
          <div
            style={{
              height: "40px",
              width: "150px",
              backgroundImage:
                "linear-gradient(90deg, #000 2px, transparent 2px, transparent 4px, #000 4px, #000 6px, transparent 6px, transparent 8px, #000 8px, #000 10px, transparent 10px, transparent 12px, #000 12px, #000 14px)",
              backgroundSize: "16px 100%",
              backgroundRepeat: "repeat-x",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
