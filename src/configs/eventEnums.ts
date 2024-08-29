import i18n from 'src/i18n';

const { t } = i18n.global;

// TransportDamage, Refused - distribution announcing & package return
// PoExpired, NoNotificationData - only distribution announcing
export const retoureReasons: Array<{ value: string; label: string }> = [
  { value: 'Unknown', label: t('RETOURE_REASON_UNKNOWN') },
  { value: 'NotFunctional', label: t('RETOURE_REASON_NOT_FUNCTIONAL') },
  { value: 'NoInfo', label: t('RETOURE_REASON_NO_INFO') },
  { value: 'WrongAddress', label: t('RETOURE_REASON_WRONG_ADDRESS') },
  { value: 'Disliked', label: t('RETOURE_REASON_DISLIKED') },
  { value: 'TransportDamage', label: t('RETOURE_REASON_TRANSPORT_DAMAGE') },
  { value: 'Refused', label: t('RETOURE_REASON_REFUSED') },
  { value: 'PoExpired', label: t('RETOURE_REASON_EXPIRED') },
  { value: 'NoNotificationData', label: t('RETOURE_REASON_NO_NOTIFICATION_DATA') },
];

export const articleConditions: Array<{ value: string; label: string }> = [
  { value: 'ToCheckArticleBroken', label: t('ARTICLE_CONDITION_TO_CHECK_ARTICLE_BROKEN') },
  { value: 'ToCheckPackagingBroken', label: t('ARTICLE_CONDITION_TO_CHECK_PACKAGING_BROKEN') },
  { value: 'ToSale', label: t('ARTICLE_CONDITION_TO_SALE') },
  { value: 'ToTrash', label: t('ARTICLE_CONDITION_TO_TRASH') },
];

export const refundExecutors: Array<{ value: string; label: string }> = [
  { value: 'Accounting', label: t('REFUND_EXECUTOR_ACCOUNTING') },
  { value: 'MarketplaceAlreadyRefunded', label: t('REFUND_EXECUTOR_ALREADY_REFUNDED_VIA_MARKETPLACE') },
  { value: 'MarketplaceSupport', label: t('REFUND_EXECUTOR_MARKETPLACE_SUPPORT') },
  { value: 'NoRefund', label: t('REFUND_EXECUTOR_NO_REFUND') },
];

export const refundReasons: Array<{ value: string; label: string }> = [
  { value: 'ArticleNotComplete', label: t('REFUND_REASON_ARTICLE_NOT_COMPLETE') },
  { value: 'Defect', label: t('REFUND_REASON_DEFECT') },
  { value: 'DeliveryDelay', label: t('REFUND_REASON_DELIVERY_DELAY') },
  { value: 'Dispute', label: t('REFUND_REASON_DISPUTE') },
  { value: 'NoStock', label: t('REFUND_REASON_NO_STOCK') },
  { value: 'PackageLoss', label: t('REFUND_REASON_PACKAGE_LOSS') },
  { value: 'RefundBeforeReturn', label: t('REFUND_REASON_REFUND_BEFORE_RETURN_SHIPPING') },
  { value: 'TransportDamage', label: t('REFUND_REASON_TRANSPORT_DAMAGE') },
];

export const clarificationCaseReasons: Array<{ value: string; label: string }> = [
  { value: 'ComplexRetoure', label: t('CLARIFICATION_REASON_COMPLEX_RETURNS') },
  { value: 'MissingBankDetails', label: t('CLARIFICATION_REASON_BANK_DETAILS') },
  { value: 'Other', label: t('CLARIFICATION_REASON_OTHER') },
  { value: 'ReturnDeadline', label: t('CLARIFICATION_REASON_RETURN_DEADLINE') },
  { value: 'WrongData', label: t('CLARIFICATION_REASON_WRONG_DATA') },
];

export const departments: Array<{ value: string; label: string }> = [
  { value: 'Accounting', label: t('DEPARTMENT_ACCOUNTING') },
  { value: 'Distribution', label: 'Distribution' },
  { value: 'Retoure', label: 'Retoure' },
  { value: 'Support', label: 'Support' },
];

export const replacementDeliveryReasons: Array<{ value: string; label: string }> = [
  { value: 'ArticleNotComplete', label: t('REPLACEMENT_REASON_ARTICLE_NOT_COMPLETE') },
  { value: 'ArticleNotReceived', label: t('REPLACEMENT_REASON_ARTICLE_NOT_RECEIVED') },
  { value: 'Defect', label: t('REPLACEMENT_REASON_DEFECT') },
];

export const replacementChangeReasons: Array<{ value: string; label: string }> = [
  { value: 'ArticleDamaged', label: t('REPLACEMENT_CHANGE_REASON_ARTICLE_DAMAGED') },
  { value: 'ArticleNotReceived', label: t('REPLACEMENT_CHANGE_REASON_ARTICLE_NOT_RECEIVED') },
  { value: 'HighQuantity', label: t('REPLACEMENT_CHANGE_REASON_HIGH_QUANTITY') },
  { value: 'HighShippingCosts', label: t('REPLACEMENT_CHANGE_REASON_HIGH_SHIPPING_COSTS') },
];

export const refundThrough: Array<{ value: string; label: string }> = [
  { value: 'SFirm', label: 'S-Firm' },
  { value: 'Marketplace', label: t('REFUND_THROUGH_MARKETPLACE') },
  { value: 'PaymentProvider', label: t('REFUND_THROUGH_PAYMENT_PROVIDER') },
  { value: 'AlreadyRefunded', label: t('REFUND_THROUGH_ALREADY_REFUNDED') },
];

export const shipmentTrackingTypes: Array<{ value: string; label: string }> = [
  { value: 'Advise', label: t('SHIPMENT_TYPE_ADVISE') },
  { value: 'Damaged', label: t('SHIPMENT_TYPE_DAMAGED') },
  { value: 'Delay', label: t('SHIPMENT_TYPE_DELAY') },
  { value: 'Delivered', label: t('SHIPMENT_TYPE_DELIVERED') },
  { value: 'Disposed', label: t('SHIPMENT_TYPE_DISPOSED') },
  { value: 'Exception', label: t('SHIPMENT_TYPE_EXCEPTION') },
  { value: 'Forwarded', label: t('SHIPMENT_TYPE_FORWARDED') },
  { value: 'Movement', label: t('SHIPMENT_TYPE_MOVEMENT') },
  { value: 'NotDelivered', label: t('SHIPMENT_TYPE_NOT_DELIVERED') },
  { value: 'NotPickedUp', label: t('SHIPMENT_TYPE_NOT_PICKED_UP') },
  { value: 'PickedUp', label: t('SHIPMENT_TYPE_PICKED_UP') },
  { value: 'PickUpRequest', label: t('SHIPMENT_TYPE_PICK_UP_REQUEST') },
  { value: 'ReadyForPickup', label: t('SHIPMENT_TYPE_READY_FOR_PICKUP') },
  { value: 'ReceivedData', label: t('SHIPMENT_TYPE_RECEIVED_DATA') },
  { value: 'Refused', label: t('SHIPMENT_TYPE_REFUSED') },
  { value: 'Return', label: t('SHIPMENT_TYPE_RETURN') },
  { value: 'Storage', label: t('SHIPMENT_TYPE_STORAGE') },
];

export const shipmentTrackingReasons: Array<{ value: string; label: string }> = [
  { value: 'Accepted', label: t('SHIPMENT_REASON_ACCEPTED') },
  { value: 'AddressError', label: t('SHIPMENT_REASON_ADDRESS_ERROR') },
  { value: 'Authority', label: t('SHIPMENT_REASON_AUTHORITY') },
  { value: 'CarrierError', label: t('SHIPMENT_REASON_CARRIER_ERROR') },
  { value: 'ContactedCustomer', label: t('SHIPMENT_REASON_CONTACTED_CUSTOMER') },
  { value: 'CustomerRequest', label: t('SHIPMENT_REASON_CUSTOMER_REQUEST') },
  { value: 'Damaged', label: t('SHIPMENT_REASON_DAMAGED') },
  { value: 'DeliveryTime', label: t('SHIPMENT_REASON_DELIVERY_TIME') },
  { value: 'DriverDeletedEvent', label: t('SHIPMENT_REASON_DRIVER_DELETED_EVENT') },
  { value: 'Facility', label: t('SHIPMENT_REASON_FACILITY') },
  { value: 'Failed', label: t('SHIPMENT_REASON_FAILED') },
  { value: 'ForceMajeur', label: t('SHIPMENT_REASON_FORCE_MAJEUR') },
  { value: 'Ghost', label: t('SHIPMENT_REASON_GHOST') },
  { value: 'Hub', label: t('SHIPMENT_REASON_HUB') },
  { value: 'Lost', label: t('SHIPMENT_REASON_LOST') },
  { value: 'MissingLabel', label: t('SHIPMENT_REASON_MISSING_LABEL') },
  { value: 'Moved', label: t('SHIPMENT_REASON_MOVED') },
  { value: 'NoPieceReceived', label: t('SHIPMENT_REASON_NO_PIECE_RECEIVED') },
  { value: 'NotCompliant', label: t('SHIPMENT_REASON_NOT_COMPLIANT') },
  { value: 'NotOrdered', label: t('SHIPMENT_REASON_NOT_ORDERED') },
  { value: 'NotPickedUp', label: t('SHIPMENT_REASON_NOT_PICKED_UP') },
  { value: 'Ordered', label: t('SHIPMENT_REASON_ORDERED') },
  { value: 'Other', label: t('SHIPMENT_REASON_OTHER') },
  { value: 'PackingStation', label: t('SHIPMENT_REASON_PACKING_STATION') },
  { value: 'PickedUpDamaged', label: t('SHIPMENT_REASON_PICKED_UP_DAMAGED') },
  { value: 'PickedUpFromAutomatedSite', label: t('SHIPMENT_REASON_PICKED_UP_FROM_AUTOMATED_SITE') },
  { value: 'PickedUpFromCustomer', label: t('SHIPMENT_REASON_PICKED_UP_FROM_CUSTOMER') },
  { value: 'Postbox', label: t('SHIPMENT_REASON_POSTBOX') },
  { value: 'PreferredLocation', label: t('SHIPMENT_REASON_PREFERRED_LOCATION') },
  { value: 'ReceiverNotReached', label: t('SHIPMENT_REASON_RECEIVER_NOT_REACHED') },
  { value: 'ReceiverRequest', label: t('SHIPMENT_REASON_RECEIVER_REQUEST') },
  { value: 'ReceiverUnknown', label: t('SHIPMENT_REASON_RECEIVER_UNKNOWN') },
  { value: 'RedirectedBySender', label: t('SHIPMENT_REASON_REDIRECTED_BY_SENDER') },
  { value: 'Refused', label: t('SHIPMENT_REASON_REFUSED') },
  { value: 'Rejected', label: t('SHIPMENT_REASON_REJECTED') },
  { value: 'Return', label: t('SHIPMENT_REASON_RETURN') },
  { value: 'SecurePlace', label: t('SHIPMENT_REASON_SECURE_PLACE') },
  { value: 'SenderRequest', label: t('SHIPMENT_REASON_SENDER_REQUEST') },
  { value: 'ServicePoint', label: t('SHIPMENT_REASON_SERVICE_POINT') },
  { value: 'StoppedBySender', label: t('SHIPMENT_REASON_STOPPED_BY_SENDER') },
  { value: 'TechnicalProblem', label: t('SHIPMENT_REASON_TECHNICAL_PROBLEM') },
  { value: 'ThirdParty', label: t('SHIPMENT_REASON_THIRD_PARTY') },
  { value: 'ToExportHandling', label: t('SHIPMENT_REASON_TO_EXPORT_HANDLING') },
  { value: 'Vehicle', label: t('SHIPMENT_REASON_VEHICLE') },
];

export const shipmentTrackingStatus: Array<{ value: string; label: string }> = [
  { value: 'ArrivedAtCarrier', label: t('SHIPMENT_STATUS_ARRIVED_AT_CARRIER') },
  { value: 'ArrivedAtCustomer', label: t('SHIPMENT_STATUS_ARRIVED_AT_CUSTOMER') },
  { value: 'Failed', label: t('SHIPMENT_STATUS_FAILED') },
];

export const specialCaseReasons = [
  { value: 'CustomerGotWrongArticle', label: t('SPECIAL_CASE_REASON_CUSTOMER_GOT_WRONG_ARTICLE') },
  { value: 'NonCompanyGoods', label: t('SPECIAL_CASE_REASON_NON_COMPANY_GOODS') },
  { value: 'NewShipping', label: t('SPECIAL_CASE_REASON_NEW_SHIPPING') },
  { value: 'AlreadyRefundedOrReplaced', label: t('SPECIAL_CASE_REASON_ALREADY_REFUNDED_OR_REPLACED') },
  { value: 'ReturnAnnounced', label: t('SPECIAL_CASE_REASON_RETURN_ANNOUNCED') },
  { value: 'Other', label: t('SPECIAL_CASE_REASON_OTHER') },
];

export const specialCaseReasonsEventApi = [
  { value: 'CustomerGotWrongArticle', label: t('SPECIAL_CASE_REASON_CUSTOMER_GOT_WRONG_ARTICLE') },
  { value: 'CustomerSentNonCompanyGoods', label: t('SPECIAL_CASE_REASON_NON_COMPANY_GOODS') },
  { value: 'NewShippingShouldBeCreated', label: t('SPECIAL_CASE_REASON_NEW_SHIPPING') },
  { value: 'AlreadyRefundedOrReplaced', label: t('SPECIAL_CASE_REASON_ALREADY_REFUNDED_OR_REPLACED') },
  { value: 'ReturnAnnounced', label: t('SPECIAL_CASE_REASON_RETURN_ANNOUNCED') },
  { value: 'Other', label: t('SPECIAL_CASE_REASON_OTHER') },
];

export const announcingStates: Array<{ value: string; label: string }> = [
  { value: 'Completed', label: t('ANNOUNCING_RETURN_COMPLETED') },
  { value: 'InProcess', label: t('ANNOUNCING_RETURN_STARTED') },
  { value: 'Announced', label: t('ANNOUNCING_RETURN_ANNOUNCED') },
];

export const manuStatuses: Array<{ value: string; label: string }> = [
  { value: 'SentToManu', label: t('MANU_SENT') },
  { value: 'ManuCorrectionFinished', label: t('MANU_FINISHED') },
];

export const correctionApproaches: Array<{ value: string; label: string }> = [
  { value: 'Manual', label: t('MANUALLY_CORRECTED') },
  { value: 'Automatic', label: t('AUTOMATICALLY_CORRECTED') },
];
