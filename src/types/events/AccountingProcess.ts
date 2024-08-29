export interface ACCOUNTING_PROCESS {
  Id?: number | null;
  FinishTime?: string | null;
  User?: string | null;
  RefundedThrough?: string | null;
  StartTime?: string | null;
  CreditReceiptIds?: number[] | null;
  CancellationInvoiceReceiptIds?: number[] | null;
  CancellationInvoiceReceiptPositions?: never[] | null;
  CreditReceiptPositions?: never[] | null;
  ShippingCosts?: number | null;
}
