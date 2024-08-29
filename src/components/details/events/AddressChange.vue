<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { ADDRESS_CHANGE } from 'src/types/events/AddressChange';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: ADDRESS_CHANGE | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('EDITOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
  {
    label: t('CHANGE_REASON'),
    value: props.details?.ChangeReason ?? '',
    couldBeCopied: false,
  },
];

const addressColumns: QTableColumn[] = [
  { name: 'label', label: 'Label', field: 'label', align: 'left' },
  { name: 'old', label: t('OLD'), field: 'old', align: 'left' },
  { name: 'new', label: t('NEW'), field: 'new', align: 'left' },
];

const addressRows = [
  { label: 'Name1', old: props.details?.OldAddress?.Name1, new: props.details?.NewAddress?.Name1 },
  { label: 'Name2', old: props.details?.OldAddress?.Name2, new: props.details?.NewAddress?.Name2 },
  { label: t('STREET'), old: props.details?.OldAddress?.Road, new: props.details?.NewAddress?.Road },
  { label: t('POSTCODE'), old: props.details?.OldAddress?.Postcode, new: props.details?.NewAddress?.Postcode },
  { label: t('CITY'), old: props.details?.OldAddress?.City, new: props.details?.NewAddress?.City },
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
      <QTable
        :rows="addressRows"
        :columns="addressColumns.map((cols) => ({ ...cols, classes: 'bg-white' }))"
        table-header-class="bg-powder-light text-caption"
        row-key="name"
        hide-bottom
        flat
      />
    </template>
  </EventDetails>
</template>
