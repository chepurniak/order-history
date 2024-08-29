<script setup lang="ts">
import { computed } from 'vue';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import EventPositions from 'src/components/details/EventPositions.vue';
import { ODER_CANCELLATION, CANCELLED_POSITION } from 'src/types/events/OrderCancellation';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ODER_CANCELLATION | null }>();

const { t } = useI18n();
const operationEventStore = useOperationEventStore();

interface ENRICHED_CANCELLED_POSITION extends CANCELLED_POSITION {
  ArticleName?: string;
  VariantName?: string;
}

const shortDetails = [
  {
    label: t('REASON'),
    value: props.details?.CancellationReason ?? '',
    couldBeCopied: false,
  },
  {
    label: t('ORDER_COMPLETELY_CANCELLED'),
    value:
      typeof props.details?.IsCompletelyCancelled === 'boolean'
        ? props.details?.IsCompletelyCancelled
          ? t('APP_YES')
          : t('APP_NO')
        : '',
    couldBeCopied: false,
  },
];

const enrichedCancelledPositions = computed<ENRICHED_CANCELLED_POSITION[]>(() => {
  const positions = [...(props.details?.CancelledPositions ?? [])] as Array<ENRICHED_CANCELLED_POSITION>;
  positions.forEach((positionToEnrich) => {
    const position = operationEventStore.operationPositions.find(
      (pos) =>
        pos.ArticleNumber === positionToEnrich.ArticleNumber && pos.VariantId === positionToEnrich.CharacteristicId
    );
    positionToEnrich.ArticleName = position?.ArticleName;
    positionToEnrich.VariantName = position?.VariantName;
  });
  return positions;
});

const positionAdditionalColumns: QTableColumn[] = [
  { name: 'oldQuantity', label: t('QUANTITY_OLD'), field: 'OldQuantity' },
  { name: 'newQuantity', label: t('QUANTITY_NEW'), field: 'NewQuantity' },
  {
    name: 'isCompletelyCancelled',
    label: t('COMPLETELY_CANCELLED'),
    field: 'IsCompletelyCancelled',
    format: (val: boolean | null | undefined) => (typeof val === 'boolean' ? (val ? t('APP_YES') : t('APP_NO')) : ''),
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
        :rows="enrichedCancelledPositions"
      />
    </template>
  </EventDetails>
</template>
