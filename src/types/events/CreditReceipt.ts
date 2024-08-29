export interface CREDIT_RECEIPT {
  Id?: number | null;
  RefundThrough?: string | null;
  ReceiptDate?: string | null;
  ShippingCost?: number | null;
  ReceiptNumber?: string | null;
  CreditReceiptPositions?: CREDIT_RECEIPT_POSITION[] | null;
  InvoiceReceiptId?: number | null;
  User?: string | null;
  StartTime?: string | null;
  FinishTime?: string | null;
  ProcessParentId?: number | null;
}

interface CREDIT_RECEIPT_POSITION {
  Id?: number | null;
  RefundReason?: string | null;
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
