import i18n from 'src/i18n';
import { BASE_DATA_DTO } from 'src/stores/operationEventStore';

const { t } = i18n.global;

export type CATEGORY_DATA = {
  label: string;
  // eslint-disable-next-line no-unused-vars
  value: (baseData: BASE_DATA_DTO) => string | number;
  couldBeCopied: boolean;
};

const orderData: Array<CATEGORY_DATA> = [
  {
    label: t('MARKETPLACE_REFERENCE_NUMBER'),
    value: (val) => val?.marketplaceReference ?? '',
    couldBeCopied: true,
  },
  {
    label: t('MARKETPLACE'),
    value: (val) => val?.marketplace ?? '',
    couldBeCopied: false,
  },
  {
    label: t('MINI_DELIVERY_NUMBER'),
    value: (val) => val?.receiptNumber ?? '',
    couldBeCopied: true,
  },
];

const customerData: Array<CATEGORY_DATA> = [
  {
    label: t('CUSTOMER_NAME'),
    value: (val) => val?.customerName ?? '',
    couldBeCopied: true,
  },
  {
    label: t('CUSTOMER_NUMBER'),
    value: (val) => val?.customerNumber ?? '',
    couldBeCopied: true,
  },
  {
    label: t('CUSTOMER_ADDRESS'),
    value: (val) => val?.customerAddress ?? '',
    couldBeCopied: true,
  },
  {
    label: t('COUNTRY'),
    value: (val) => val?.customerCountry ?? '',
    couldBeCopied: false,
  },
  {
    label: t('CUSTOMER_MAIL'),
    value: (val) => val?.customerMailAddress ?? '',
    couldBeCopied: true,
  },
  {
    label: t('EBAY_USER_NAME'),
    value: (val) => val?.ebayUsername ?? '',
    couldBeCopied: true,
  },
];

const paymentData: Array<CATEGORY_DATA> = [
  {
    label: t('PAYMENT_CONDITION'),
    value: (val) => val?.paymentCondition ?? '',
    couldBeCopied: false,
  },
  {
    label: t('PAYMENT_REFERENCE'),
    value: (val) => val?.paymentReference ?? '',
    couldBeCopied: true,
  },
  {
    label: 'IBAN',
    value: (val) => val?.iban ?? '',
    couldBeCopied: true,
  },
  {
    label: 'BIC',
    value: (val) => val?.bic ?? '',
    couldBeCopied: true,
  },
];

export const baseData: Array<{ title: string; data: Array<CATEGORY_DATA> }> = [
  { title: t('ORDER_DETAILS'), data: orderData },
  { title: t('CUSTOMER_DETAILS'), data: customerData },
  { title: t('PAYMENT_DETAILS'), data: paymentData },
];
