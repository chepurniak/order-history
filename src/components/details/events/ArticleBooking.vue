<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import EventPositions from 'src/components/details/EventPositions.vue';
import { ARTICLE_BOOKING } from 'src/types/events/ArticleBooking';
import { articleConditions } from 'src/configs/eventEnums';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ARTICLE_BOOKING | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('EDITOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
];

const positionAdditionalColumns: QTableColumn[] = [
  { name: 'quantity', label: t('QUANTITY'), field: 'Quantity' },
  { name: 'cartNumber', label: t('CART_NUMBER'), field: 'CartNumber' },
  {
    name: 'condition',
    label: t('ARTICLE_CONDITION'),
    field: 'Condition',
    format: (val: string | null | undefined) =>
      articleConditions.find((col) => col.value === val)?.label ?? (val || '-'),
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
        :rows="props.details?.BookedArticle ?? []"
      />
    </template>
  </EventDetails>
</template>
