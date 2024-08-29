<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import { CREATED_REPLACEMENT } from 'src/types/events/CreatedReplacement';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: CREATED_REPLACEMENT | null; currency: string }>();

const { t } = useI18n();
</script>

<template>
  <EventDetails :event="props.event">
    <template #short-details>
      <div class="row">
        <AppInfoBox
          :label="t('SAGE_STATUS')"
          :value="t('RECEIPT_TRANSFERRED_TO_SAGE')"
        />
      </div>
    </template>
  </EventDetails>
</template>
