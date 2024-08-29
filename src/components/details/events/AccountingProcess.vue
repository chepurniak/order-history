<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import { getPrettyNumber } from 'src/utils/dataFormatters';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import EventPositions from 'src/components/details/EventPositions.vue';
import { ACCOUNTING_PROCESS } from 'src/types/events/AccountingProcess';
import { refundThrough } from 'src/configs/eventEnums';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ACCOUNTING_PROCESS | null; currency: string }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('EDITOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
  {
    label: t('REFUND_TYPE'),
    value:
      refundThrough.find((refund) => refund.value === props.details?.RefundedThrough)?.label ??
      props.details?.RefundedThrough ??
      '',
    couldBeCopied: false,
  },
  {
    label: t('REFUND_SHIPPING_COSTS'),
    value: `${getPrettyNumber(props.details?.ShippingCosts ?? 0)} ${props.currency}`,
    couldBeCopied: false,
  },
];

const positionAdditionalColumns: QTableColumn[] = [
  { name: 'quantity', label: t('QUANTITY'), field: 'Quantity' },
  {
    name: 'pricePerUnit',
    label: t('PRICE_PER_UNIT'),
    field: 'PricePerUnit',
    format: (val: number | null | undefined) => `${getPrettyNumber(val ?? 0)} ${props.currency}`,
  },
];
</script>

<template>
  <EventDetails
    :event="props.event"
    :has-expanded-details="Object.keys(props.details ?? {}).length > 0"
  >
    <template #short-details>
      <div class="short-details-grid">
        <AppInfoBox
          v-for="(info, infoIndex) in shortDetails"
          :key="infoIndex"
          :label="info.label"
          :value="info.value"
          :could-be-copied="info.couldBeCopied"
        />
      </div>
    </template>
    <template #expanded-details>
      <EventPositions
        :columns="positionAdditionalColumns"
        :rows="[...props.details?.CancellationInvoiceReceiptPositions, ...props.details?.CreditReceiptPositions]"
      />
    </template>
  </EventDetails>
</template>
