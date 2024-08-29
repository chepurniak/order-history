export interface NOTED_REPLACEMENT {
  StartTime?: string | null;
  FinishTime?: string | null;
  LastActionTime?: string | null;
  ProcessorName?: string | null;
  LastProcessorName?: string | null;
  NotedPosition?: NOTED_POSITION[] | null;
}

interface NOTED_POSITION {
  QuantityAnnounced?: number | null;
  ArticleNumber?: string | null;
  VariantId?: number | null;
  ReplacementReason?: number | null;
  ShouldNotBeReturnedReason?: number | null;
  ShouldBeReturned?: boolean | null;
}
