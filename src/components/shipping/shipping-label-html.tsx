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
    <body
      style={{
        margin: 0,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* Container with exact 4x6 inch dimensions and rotation */}
        <div
          style={{
            width: "432px",
            height: "288px",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
            position: "relative",
          }}
        >
          {/* Actual label content */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              fontFamily: "Arial, sans-serif",
              border: "2px solid #333",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  <Isotipo style={{ width: 24, height: 24 }} color="#fff" />
                </div>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#333",
                  }}
                >
                  {shipment.carrier}
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#f1f1f1",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "11px",
                }}
              >
                {shipment.date}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginBottom: "16px",
              }}
            >
              {/* From section */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    marginBottom: "2px",
                  }}
                >
                  FROM:
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {shipment.from.name}
                </div>
                <div style={{ fontSize: "12px" }}>{shipment.from.address}</div>
                <div style={{ fontSize: "12px" }}>{shipment.from.city}</div>
              </div>

              {/* To section */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    marginBottom: "2px",
                  }}
                >
                  TO:
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {shipment.to.name}
                </div>
                <div style={{ fontSize: "12px" }}>{shipment.to.address}</div>
                <div style={{ fontSize: "12px" }}>{shipment.to.city}</div>
              </div>
            </div>

            <div
              style={{
                marginBottom: "12px",
                padding: "8px",
                backgroundColor: "#f8f8f8",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#666",
                  marginBottom: "2px",
                }}
              >
                TRACKING NUMBER:
              </div>
              <div
                style={{
                  fontSize: "16px",
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
                fontSize: "12px",
                marginTop: "auto",
              }}
            >
              <div>Weight: {shipment.weight}</div>
              <div>
                {/* Barcode */}
                <div
                  style={{
                    height: "32px",
                    width: "140px",
                    backgroundImage:
                      "linear-gradient(90deg, #000 2px, transparent 2px, transparent 4px, #000 4px, #000 6px, transparent 6px, transparent 8px, #000 8px, #000 10px, transparent 10px, transparent 12px, #000 12px, #000 14px)",
                    backgroundSize: "16px 100%",
                    backgroundRepeat: "repeat-x",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
