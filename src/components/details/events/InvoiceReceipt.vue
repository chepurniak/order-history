<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import { getPrettyNumber } from 'src/utils/dataFormatters';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import OpenReceiptBox from 'src/components/details/OpenReceiptBox.vue';
import EventPositions from 'src/components/details/EventPositions.vue';
import { INVOICE_RECEIPT } from 'src/types/events/InvoiceReceipt';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: INVOICE_RECEIPT | null; currency: string }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('RECEIPT_NUMBER'),
    value: props.details?.ReceiptNumber ?? '',
    couldBeCopied: true,
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
        :rows="props.details?.InvoiceReceiptPositions ?? []"
      />
    </template>
  </EventDetails>
</template>
