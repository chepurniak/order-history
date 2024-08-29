export interface ODER_CANCELLATION {
  IsCompletelyCancelled?: boolean | null;
  CancelledPositions?: CANCELLED_POSITION[] | null;
  CancellationReason?: string | null;
}

export interface CANCELLED_POSITION {
  ReceiptItemId?: number | null;
  OldQuantity?: number | null;
  NewQuantity?: number | null;
  Position?: number | null;
  ArticleNumber?: string | null;
  CharacteristicId?: number | null;
  IsCompletelyCancelled?: boolean | null;
}
