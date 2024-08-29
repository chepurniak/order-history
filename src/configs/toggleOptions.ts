import { OPERATION_TYPE } from 'src/stores/operationEventStore';
import i18n from 'src/i18n';

const { t } = i18n.global;

export const toggleOptions: Array<{ label: string; value: OPERATION_TYPE; color?: string }> = [
  { label: t('PRE_SHIPPING'), value: 'PreShipping' },
  { label: t('SHIPPING_RELATED'), value: 'ShippingRelated' },
  { label: t('RETURN_RELATED'), value: 'ReturnRelated' },
  { label: t('REPLACEMENT_RELATED'), value: 'ReplacementRelated' },
  { label: t('OTHER'), value: 'Other' },
];
