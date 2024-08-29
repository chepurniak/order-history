import { OPERATION_TYPE } from 'src/stores/operationEventStore';

export const eventsColors: Record<OPERATION_TYPE, 'mint' | 'pigeon' | 'nut' | 'peach' | 'swamp'> = {
  PreShipping: 'mint',
  ShippingRelated: 'pigeon',
  ReturnRelated: 'swamp',
  ReplacementRelated: 'peach',
  Other: 'nut',
};
