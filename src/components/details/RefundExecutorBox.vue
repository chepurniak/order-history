<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { useQuasar } from 'quasar';
import { refundExecutors } from 'src/configs/eventEnums';
import AppInfoBox from 'src/components/AppInfoBox.vue';
import AppTooltip from 'src/components/AppTooltip.vue';

const props = defineProps<{ refundedThrough: string; processParentId: number }>();

const { t } = useI18n();
const route = useRoute();
const operationEventStore = useOperationEventStore();
const $q = useQuasar();
const redirectToAccountigDialog = ref(false);

async function redirectToAccountig() {
  if (!props.processParentId) {
    $q.notify({ type: 'negative', message: t('NO_PROCESS_ID') });
    return;
  }
  operationEventStore.isEventsLoading = true;
  const success = await operationEventStore.redirectProcessToAccounting(props.processParentId);
  $q.notify({
    type: success ? 'positive' : 'negative',
    message: success ? t('REFUND_CHANGED') : t('REFUND_NOT_CHANGED'),
  });
  if (success) await operationEventStore.fetchMainOperationEvents(~~route.params.orderReceiptId);
  operationEventStore.isEventsLoading = false;
}
</script>

<template>
  <AppInfoBox
    :label="t('REFUND_BY')"
    :value="
      refundExecutors.find((executor) => executor.value === props.refundedThrough)?.label ?? props.refundedThrough ?? ''
    "
  >
    <template #end>
      <div
        v-if="
          props.refundedThrough?.toLowerCase() !== 'accounting'
        "
      >
        <QIcon
          name="o_settings_backup_restore"
          size="sm"
          color="grey-7"
          class="q-ml-sm cursor-pointer"
          @click="redirectToAccountigDialog = true"
        />
        <AppTooltip :label="t('CHANGE_REFUND_THROUGH')" />
      </div>
    </template>
  </AppInfoBox>

  <QDialog
    v-model="redirectToAccountigDialog"
    persistent
  >
    <QCard class="dialog q-pa-lg column no-wrap">
      <div class="row justify-between">
        <h2 class="col q-ma-none text-center">{{ t('CHANGE_REFUND_THROUGH') }}</h2>
        <QIcon
          v-close-popup
          name="close"
          size="md"
          class="q-ml-lg cursor-pointer"
        />
      </div>

      <div class="q-my-xl">{{ t('CHANGE_REFUND_THROUGH_TEXT') }}</div>

      <div class="full-width row justify-between">
        <QBtn
          v-close-popup
          :label="t('APP_BACK')"
          class="fontsize-primary"
          color="grey-7"
          no-caps
        />
        <QBtn
          v-close-popup
          :label="t('APP_YES')"
          class="fontsize-primary"
          color="primary q-ml-md q-px-lg"
          no-caps
          @click="redirectToAccountig()"
        />
      </div>
    </QCard>
  </QDialog>
</template>

<style lang="scss" scoped>
.dialog {
  min-width: 35%;
  max-width: 90%;
  max-height: 90%;
}
</style>
