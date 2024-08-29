export interface ARTICLE_BOOKING {
  Id?: number | null;
  User?: string | null;
  BookedArticle?: ARTICLE_BOOKING_POSITION[] | null;
  StartTime?: string | null;
  FinishTime?: string | null;
}

interface ARTICLE_BOOKING_POSITION {
  Id?: number | null;
  ArticleNumber?: string | null;
  VariantId?: number | null;
  VariantName?: string | null;
  ArticleName?: string | null;
  CartNumber?: string | null;
  Ean?: string | null;
  ImageUrl?: string | null;
  ProcessId?: number | null;
  Quantity?: number | null;
  Condition?: number | null;
}
