export interface ANNOUNCED_RETURN {
  State?: string | null;
  FinishDate?: string | null;
  DeliveryReceiptId?: number | null;
  DeliveryReceiptNumber?: string | null;
  OrderReceiptId?: number | null;
  OrderReceiptNumber?: string | null;
  AnnouncingDate?: string | null;
  AnnouncedPallets?: number | null;
  RecordedPallets?: number | null;
  IsCompleteReturn?: boolean | null;
  ReturnReason?: string | null;
  ProcessParentId?: number | null;
  Creator?: string | null;
}
