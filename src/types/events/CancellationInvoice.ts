export interface CANCELLATION_INVOICE {
  ShippingCost?: number | null;
  RefundAmount?: number | null;
  Id?: number | null;
  InvoiceReceiptId?: number | null;
  ReceiptNumber?: string | null;
  ReceiptDate?: string | null;
  CancellationInvoiceReceiptPositions?: CANCELLATION_INVOICE_POSITION[] | null;
  RefundedThrough?: string | null;
  User?: string | null;
  ProcessParentId?: number | null;
}

interface CANCELLATION_INVOICE_POSITION {
  Id?: number | null;
  VorPosId?: number | null;
  ArticleNumber?: string | null;
  VariantId?: number | null;
  PricePerUnit?: number | null;
  IsNetPrice?: boolean | null;
  Quantity?: number | null;
  TaxRate?: number | null;
  DiscountPercentage?: number | null;
  DiscountAmount?: number | null;
  VariantName?: string | null;
  Ean?: string | null;
  ArticleName?: string | null;
  ImageUrl?: string | null;
  TotalPositionPriceGross?: number | null;
}
