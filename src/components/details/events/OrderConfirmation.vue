<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { date, QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import { getPrettyNumber } from 'src/utils/dataFormatters';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import OpenReceiptBox from 'src/components/details/OpenReceiptBox.vue';
import EventPositions from 'src/components/details/EventPositions.vue';
import { dayOfWeek } from 'src/configs/dates';
import { ORDER_CONFIRMATION } from 'src/types/events/OrderConfirmation';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ORDER_CONFIRMATION | null; currency: string }>();

const { t } = useI18n();
const { formatDate } = date;

const positionsPrice =
  props.details?.OrderReceiptPositions?.reduce(
    (currentValue, p) => (p.CalculatedPricePerUnit ?? 0) * (p.Quantity ?? 0) + currentValue,
    0
  ) ?? 0;

const shortDetails = [
  {
    label: t('EXPECTED_DELIVERY_DATE'),
    value: props.details?.ExpectedDeliveryDate
      ? formatDate(props.details?.ExpectedDeliveryDate, 'ddd. DD.MM.YYYY', dayOfWeek)
      : '-',
    couldBeCopied: false,
  },
  {
    label: t('PRICE_POSITIONS'),
    value: `${getPrettyNumber(positionsPrice)} ${props.currency}`,
    couldBeCopied: false,
  },
  {
    label: t('SHIPPING_COST'),
    value: `${getPrettyNumber(props.details?.ShippingCost ?? 0)} ${props.currency}`,
    couldBeCopied: false,
  },
  {
    label: t('PRICE_TOTAL'),
    value: `${getPrettyNumber(positionsPrice + (props.details?.ShippingCost ?? 0))} ${props.currency}`,
    couldBeCopied: false,
  },
];

const positionAdditionalColumns: QTableColumn[] = [
  { name: 'quantity', label: t('QUANTITY'), field: 'Quantity' },
  {
    name: 'calculatedPricePerUnit',
    label: t('PRICE_PER_UNIT'),
    field: 'CalculatedPricePerUnit',
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
        <OpenReceiptBox
          v-if="props.details?.ReceiptNumber"
          :receipt-number="props.details.ReceiptNumber"
        />
      </div>
    </template>
    <template #expanded-details>
      <EventPositions
        :columns="positionAdditionalColumns"
        :rows="props.details?.OrderReceiptPositions ?? []"
      />
    </template>
  </EventDetails>
</template>
