export interface INVOICE_RECEIPT {
  Id?: number | null;
  ReceiptDate?: string | null;
  DeliveryReceiptId?: number | null;
  ReceiptNumber?: string | null;
  InvoiceReceiptPositions?: INVOICE_RECEIPT_POSITION[] | null;
}

interface INVOICE_RECEIPT_POSITION {
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
  CalculatedPricePerUnit?: number | null;
}
