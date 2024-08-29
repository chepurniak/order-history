<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { announcingStates } from 'src/configs/eventEnums';
import { ANNOUNCED_RETURN } from 'src/types/events/AnnouncedReturn';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ANNOUNCED_RETURN | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('EVENT_DELIVERY_RECEIPT'),
    value: props.details?.DeliveryReceiptNumber ?? '',
    couldBeCopied: true,
  },
  {
    label: t('EDITOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
  {
    label: t('NUMBER_OF_PALLETS_ANNOUNCED'),
    value: `${props.details?.AnnouncedPallets ?? 0} (${
      props.details?.IsCompleteReturn ? t('COMPLETE_DELIVERY') : t('PARTIAL_DELIVERY')
    })`,
    couldBeCopied: false,
  },
  {
    label: t('NUMBER_OF_PALLETS_RECORDED'),
    value: props.details?.RecordedPallets || '0',
    couldBeCopied: false,
  },
  {
    label: 'Status',
    value: announcingStates.find((state) => state.value === props.details?.State)?.label ?? props.details?.State ?? '',
    couldBeCopied: false,
  },
];
</script>

<template>
  <EventDetails :event="props.event">
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
  </EventDetails>
</template>
