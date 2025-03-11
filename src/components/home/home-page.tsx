export default function HomePage() {
  return (
    <html>
      <head>
        <title>PDF Generator</title>
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
          background: "#000",
          color: "#fff",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PDF Generator</h1>
        </div>
      </body>
    </html>
  );
}
