<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { date } from 'quasar';
import { QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import EventPositions from 'src/components/details/EventPositions.vue';
import { replacementDeliveryReasons, replacementChangeReasons } from 'src/configs/eventEnums';
import { NOTED_REPLACEMENT } from 'src/types/events/NotedReplacement';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: NOTED_REPLACEMENT | null }>();

const { t } = useI18n();
const { formatDate } = date;

const shortDetails = [
  {
    label: t('CREATOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
  {
    label: t('LAST_EDITED_DATE'),
    value: props.details?.LastActionTime ? formatDate(props.details.LastActionTime, 'DD.MM.YY | HH:mm') : '',
    couldBeCopied: false,
  },
  {
    label: t('LAST_EDITED_NAME'),
    value: props.details?.LastProcessorName ?? '',
    couldBeCopied: false,
  },
];

const positionAdditionalColumns: QTableColumn[] = [
  { name: 'quantity', label: t('QUANTITY'), field: 'QuantityAnnounced' },
  {
    name: 'replacementReason',
    label: t('REPLACEMENT_REASON'),
    field: 'ReplacementReason',
    format: (val: string | null | undefined) =>
      replacementDeliveryReasons.find((reason) => reason.value === val)?.label ?? (val || '-'),
  },
  {
    name: 'shouldNotBeReturnedReason',
    label: t('CHANGE_REASON'),
    field: 'ShouldNotBeReturnedReason',
    format: (val: string | null | undefined) =>
      replacementChangeReasons.find((reason) => reason.value === val)?.label ?? (val || '-'),
  },
  {
    name: 'shouldBeReturned',
    label: t('RETURN_SHIPPING'),
    field: 'ShouldBeReturned',
    format: (val: boolean | null | undefined) =>
      typeof val === 'boolean' ? (val ? t('APP_YES') : t('APP_NO')) : t('APP_UNKNOWN'),
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
        :rows="props.details?.NotedPosition ?? []"
      />
    </template>
  </EventDetails>
</template>
