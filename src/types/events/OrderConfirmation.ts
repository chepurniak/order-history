export interface ORDER_CONFIRMATION {
  OrderReceiptPositions?: ORDER_RECEIPT_POSITION[] | null;
  Id?: number | null;
  MarketplaceReferenceNumber?: string | null;
  Marketplace?: string | null;
  OrderId?: number | null;
  ReceiptNumber?: string | null;
  ReceiptDate?: string | null;
  ShippingCost?: number | null;
  ShippingTaxRate?: number | null;
  Currency?: string | null;
  PaymentCondition?: string | null;
  RefundedShippingCost?: number | null;
  PaymentReference?: string | null;
  IsPriority?: boolean | null;
  ExpectedDeliveryDate?: string | null;
}

export interface ORDER_RECEIPT_POSITION {
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
