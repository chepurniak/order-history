export interface DELIVERY_RECEIPT {
  Id?: number | null;
  ReceiptNumber?: string | null;
  ReceiptDate?: string | null;
  DeliveryReceiptPositions?: DELIVERY_RECEIPT_POSITION[] | null;
  PackagingDescription: string | null;
  DeliveryTrackingDetails?: any[] | null;
}

interface DELIVERY_RECEIPT_POSITION {
  Id?: number | null;
  CustomerWish?: number | null;
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
