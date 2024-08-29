<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';
import EventDetails from 'src/components/details/EventDetails.vue';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import AppTooltip from 'src/components/AppTooltip.vue';
import { clarificationCaseReasons, departments } from 'src/configs/eventEnums';
import { PROBLEMS_OPERATION } from 'src/types/events/ProblemsOperation';

const props = defineProps<{ event: OPERATION_EVENT_DTO; details: PROBLEMS_OPERATION | null }>();

const { t } = useI18n();

const shortDetails = [
  {
    label: t('EDITOR'),
    value: props.event?.employee ?? '',
    couldBeCopied: false,
  },
  {
    label: t('DEPARTMENT'),
    value:
      departments.find((department) => department.value === props.details?.Details?.Department)?.label ??
      props.details?.Details?.Department ??
      '',
    couldBeCopied: false,
  },
];

onMounted(() => {
  if (props.details?.Details?.CreationReason) {
    shortDetails.unshift({
      label: t('PROBLEM_REASON'),
      value:
        clarificationCaseReasons.find((reason) => reason.value === props.details?.Details?.CreationReason)?.label ??
        props.details?.Details?.CreationReason ??
        '',
      couldBeCopied: false,
    });
  }
});
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
          :value="props.details?.Details?.Note ?? '-'"
        >
          <template #end>
            <div v-if="props.details?.Details?.Note">
              <QIcon
                name="o_chat"
                size="sm"
                color="grey-7"
                class="q-ml-sm"
                style="cursor: help"
              />
              <AppTooltip :label="props.details?.Details?.Note" />
            </div>
          </template>
        </AppInfoBox>
      </div>
    </template>
  </EventDetails>
</template>
