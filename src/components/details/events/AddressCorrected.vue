<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { CorrectionData } from 'src/types/events/ManuEvent';
import { correctionApproaches } from 'src/configs/eventEnums';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: CorrectionData | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: '',
    value:
      correctionApproaches.find((approach) => approach.value === props.details?.CorrectionApproach)?.label ??
      props.details?.CorrectionApproach ??
      '',
    couldBeCopied: false,
  },
  {
    label: t('EDITOR'),
    value: props.event.employee ?? '',
    couldBeCopied: false,
  },
  { label: 'Name1', value: props.details?.Address.AddressLine1, couldBeCopied: true },
  { label: 'Name2', value: props.details?.Address.AddressLine2, couldBeCopied: true },
  { label: 'Name3', value: props.details?.Address.AddressLine3, couldBeCopied: true },
  { label: t('STREET'), value: props.details?.Address.Street, couldBeCopied: true },
  { label: t('HOUSE_NUMBER'), value: props.details?.Address.HouseNumber, couldBeCopied: true },
  { label: 'Post-Id', value: props.details?.Address.PostId, couldBeCopied: true },
  { label: 'Packstation', value: props.details?.Address.PackstationId, couldBeCopied: true },
  { label: t('POSTOFFICE'), value: props.details?.Address.PostofficeId, couldBeCopied: true },
  { label: t('POSTCODE'), value: props.details?.Address.ZipCode, couldBeCopied: true },
  { label: t('CITY'), value: props.details?.Address.City, couldBeCopied: true },
  { label: t('COUNTRY'), value: props.details?.Address.CountryCode, couldBeCopied: false },
].filter((detail) => detail.value);
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
          :value="info.value ? info.value.toString() : ''"
          :could-be-copied="info.couldBeCopied"
        />
      </div>
    </template>
  </EventDetails>
</template>
<style lang="scss" scoped>
.details {
  &_name {
    width: 10rem;
    padding-right: 0.6rem;
    color: $rd-grey-9;
  }
  &_value {
    width: calc(100% - 12rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>