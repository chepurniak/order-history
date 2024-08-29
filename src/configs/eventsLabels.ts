import i18n from 'src/i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';

const { t } = i18n.global;

export const eventsLabels: Array<{ name: string; label: string }> = [
  { name: 'AccountingProcess', label: t('EVENT_ACCOUNTING_PROCESS') },
  { name: 'AddressChange', label: t('EVENT_ADDRESS_CHANGE') },
  { name: 'NoteCreated', label: t('EVENT_NOTE_CREATED') },
  { name: 'AnnouncedReturn', label: t('EVENT_ANNOUNCED_RETURN') },
  { name: 'ArticleBooking', label: t('EVENT_ARTICLE_BOOKING') },
  { name: 'OrderCancellation', label: t('EVENT_ORDER_CANCELLATION') },
  { name: 'CancellationInvoice', label: t('EVENT_CANCELLATION_INVOICE') },
  { name: 'CarrierShipmentTracking', label: t('EVENT_CARRIER_SHIPMENT_TRACKING') },
  { name: 'CreatedReplacement', label: t('EVENT_CREATED_REPLACEMENT') },
  { name: 'CreditReceipt', label: t('EVENT_CREDIT_RECEIPT') },
  { name: 'DeliveryReceipt', label: t('EVENT_DELIVERY_RECEIPT') },
  { name: 'InvoiceReceipt', label: t('EVENT_INVOICE_RECEIPT') },
  { name: 'NotedReplacement', label: t('EVENT_NOTED_REPLACEMENT') },
  { name: 'OrderConfirmation', label: t('EVENT_ORDER_CONFIRMATION') },
  { name: 'ProblemsOperation', label: t('EVENT_PROBLEM_OPERATION') },
  { name: 'ReturnReceipt', label: t('EVENT_RETURN_RECEIPT') },
  { name: 'ArrivedReturn', label: t('EVENT_ARRIVED_RETURN') },
  { name: 'ManuEvent', label: t('EVENT_MANU') },
  { name: 'AddressCorrected', label: t('EVENT_ADDRESS_CORRECTED') },
  { name: 'ExportedToManu', label: t('EVENT_MANU') },
];

export function getEventLabel(currentEvent: OPERATION_EVENT_DTO) {
  return currentEvent.name
    ? (eventsLabels.find((event) => event.name === currentEvent.name)?.label ?? currentEvent.name)
    : t('UNKNOWN_EVENT');
}
