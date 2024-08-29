export interface RETURN_RECEIPT {
  Id?: number | null;
  DeliveryReceiptId?: number | null;
  ReceiptNumber?: string | null;
  ReceiptDate?: string | null;
  ReturnReceiptPositions?: RETURN_RECEIPT_POSITION[] | null;
  ReturnReason?: string | null;
  User?: string | null;
  ManualFinishedInfo?: any | null;
}

interface RETURN_RECEIPT_POSITION {
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
