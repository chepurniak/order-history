<script setup lang="ts">
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { MANU_EVENT } from 'src/types/events/ManuEvent';
import { manuStatuses } from 'src/configs/eventEnums';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: MANU_EVENT | null }>();

const shortDetails = [
  {
    label: 'Status',
    value: manuStatuses[0].label,
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
