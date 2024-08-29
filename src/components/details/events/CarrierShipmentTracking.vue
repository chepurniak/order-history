<script setup lang="ts">
// import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { shipmentTrackingTypes, shipmentTrackingReasons, shipmentTrackingStatus } from 'src/configs/eventEnums';
import { CARRIER_SHIPMENT_TRACKING } from 'src/types/events/CarrierShipmentTracking';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: CARRIER_SHIPMENT_TRACKING | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('TRACKING_NUMBER'),
    value: props.details?.TrackingNumber ?? '',
    couldBeCopied: true,
  },
  {
    label: 'Status',
    value:
      shipmentTrackingStatus.find((status) => status.value === props.details?.CarrierShipmentTrackingStatus)?.label ??
      props.details?.CarrierShipmentTrackingStatus ??
      '',
    couldBeCopied: false,
  },
  {
    label: t('EVENT_TYPE'),
    value:
      shipmentTrackingTypes.find((type) => type.value === props.details?.EventType)?.label ??
      props.details?.EventType ??
      '',
    couldBeCopied: false,
  },
  {
    label: t('EVENT_REASON'),
    value:
      shipmentTrackingReasons.find((reason) => reason.value === props.details?.EventReason)?.label ??
      props.details?.EventReason ??
      '',
    couldBeCopied: false,
  },
];

function openTracking(trackingNumber: string) {
  if (!trackingNumber) return;
  window.open(`https://en.wikipedia.org/wiki/DHL`, '_blank')?.focus();
}
</script>

<template>
  <EventDetails :event="props.event">
    <template #short-details>
      <div class="short-details-grid">
        <div
          class="cursor-pointer"
          role="button"
          :tabindex="0"
          @click="openTracking(props.details?.TrackingNumber ?? '')"
          @keydown.enter="openTracking(props.details?.TrackingNumber ?? '')"
        >
          <AppInfoBox
            :label="t('SHIPPING_TRACKING')"
            :value="props.details?.Carrier ?? ''"
          >
            <template #end>
              <QIcon
                name="local_shipping"
                size="1.7rem"
                color="grey-7"
                class="cursor-pointer"
              />
            </template>
          </AppInfoBox>
        </div>
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
