export interface CREATED_REPLACEMENT {
  OrderId: number | null;
  ServiceReceiptId?: number | null;
  OrderReceiptPositions?: ORDER_RECEIPT_POSITION[] | null;
  ReceiptDate?: string | null;
  ReplacementEmailSent?: boolean | null;
}

interface ORDER_RECEIPT_POSITION {
  ReceiptId?: number | null;
  Id?: number | null;
  VorPosId?: number | null;
  ArticleNumber?: string | null;
  VariantId?: number | null;
  PricePerUnit?: number | null;
  IsNetPrice?: boolean | null;
  RowVersion?: number | null;
  Quantity?: number | null;
  TaxRate?: number | null;
  DiscountPercentage?: number | null;
  DiscountAmount?: number | null;
  TotalPositionPriceGross?: number | null;
}
