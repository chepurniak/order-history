<script setup lang="ts">
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import AppTooltip from 'src/components/AppTooltip.vue';
import { NOTE_CREATED } from 'src/types/events/NoteCreated';
import { useI18n } from 'vue-i18n';
import { specialCaseReasonsEventApi } from 'src/configs/eventEnums';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: NOTE_CREATED | null }>();
const { t } = useI18n();

const shortDetails = [
  {
    label: t('REASON'),
    value:
      specialCaseReasonsEventApi.find((reason) => reason.value === props.details?.Reason)?.label ??
      props.details?.Reason ??
      '',
    couldBeCopied: false,
  },
  {
    label: t('CREATOR'),
    value: props.event?.employee ?? '',
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
        <AppInfoBox
          :label="t('NOTE')"
          :value="props.details?.Note ?? '-'"
        >
          <template #end>
            <div v-if="props.details?.Note">
              <QIcon
                name="o_chat"
                size="sm"
                color="grey-7"
                class="q-ml-sm"
                style="cursor: help"
              />
              <AppTooltip :label="props.details?.Note" />
            </div>
          </template>
        </AppInfoBox>
      </div>
    </template>
  </EventDetails>
</template>
