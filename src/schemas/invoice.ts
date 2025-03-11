import { z } from "zod";

const ItemSchema = z.object({
  itemDescription: z.string(),
  qty: z.number().optional(),
  amount: z.number().optional(),
});

const YourDetailsSchema = z.object({
  yourEmail: z.string().email().nullable().optional(),
  yourName: z.string().nullable().optional(),
  yourAddress: z.string().nullable().optional(),
  yourCity: z.string().nullable().optional(),
  yourState: z.string().nullable().optional(),
  yourCountry: z.string().nullable().optional(),
  yourLogo: z.string().nullable().optional(),
  yourTaxId: z.string().nullable().optional(),
  yourZip: z.string().nullable().optional(),
});

const CompanyDetailsSchema = z.object({
  email: z.string().email().nullable().optional(),
  companyName: z.string().nullable().optional(),
  companyAddress: z.string().nullable().optional(),
  companyCity: z.string().nullable().optional(),
  companyState: z.string().nullable().optional(),
  companyCountry: z.string().nullable().optional(),
  companyLogo: z.string().nullable().optional(),
  companyTaxId: z.string().nullable().optional(),
  companyZip: z.string().nullable().optional(),
});

const InvoiceItemDetailsSchema = z.object({
  note: z.string().nullable().optional(),
  discount: z.string().nullable().optional(),
  taxRate: z.string().nullable().optional(),
  items: z.array(ItemSchema),
  currency: z.string().optional(),
});

const InvoiceTermsSchema = z.object({
  invoiceNumber: z.string().nullable().optional(),
  issueDate: z.string().nullable().optional(),
  dueDate: z.string().nullable().optional(),
});

const PaymentDetailsSchema = z.object({
  bankName: z.string().nullable().optional(),
  accountNumber: z.string().nullable().optional(),
  accountName: z.string().nullable().optional(),
  routingCode: z.string().nullable().optional(),
  swiftCode: z.string().nullable().optional(),
  ifscCode: z.string().nullable().optional(),
  currency: z.string().optional(),
});

export const InvoicePDFSchema = z.object({
  clientDetails: YourDetailsSchema,
  companyDetails: CompanyDetailsSchema,
  invoiceDetails: InvoiceItemDetailsSchema,
  paymentDetails: PaymentDetailsSchema,
  invoiceTerms: InvoiceTermsSchema,
  countryImageUrl: z.string().optional(),
});

export type InvoicePDFData = z.infer<typeof InvoicePDFSchema>;
