<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { ARRIVED_RETURN } from 'src/types/events/ArrivedReturn';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ARRIVED_RETURN | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('EDITOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
  {
    label: t('SCANNED_NUMBER'),
    value: props.details?.TrackingNumber ?? '',
    couldBeCopied: true,
  },
  {
    label: t('SHIPPING_PROVIDER'),
    value:
      props.details?.ShippingServiceProvider === 'Other' ? t('OTHER') : props.details?.ShippingServiceProvider || '',
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
