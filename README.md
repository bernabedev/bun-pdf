# 📄 Bun PDF API

A minimalist API service built with [Bun](https://bun.sh) for generating PDF documents from React components.

## Features

- 🚀 **Fast PDF Generation** - Powered by Bun's performance
- 🛡️ **Type Safety** - Data validation with Zod
- 🧩 **React Components** - Create PDFs from React components
- 🐳 **Containerized** - Easy deployment with Docker

## Quick Start

```bash
# Clone the repository
git clone https://github.com/bernabedev/bun-pdf.git
cd bun-pdf

# Install dependencies
bun install

# Start the development server
bun run src/index.ts
```

## Docker Usage

```bash
# Build and start with Docker Compose
docker-compose up -d
```

## API Endpoints

### Generate Invoice PDF

```
POST /api/pdf/invoice
```

Request body must follow the schema defined for invoices:

```typescript
{
  clientDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
  countryImageUrl?: string;
}
```

## Tech Stack

- [Bun](https://bun.sh) - JavaScript runtime & package manager
- [Zod](https://zod.dev) - Schema validation
- [@react-pdf/renderer](https://react-pdf.org) - PDF generation from React components
- [Docker](https://www.docker.com) - Containerization

## Development

```bash
# Run in development mode with hot reload
bun --watch src/index.ts
```

## License

MIT
