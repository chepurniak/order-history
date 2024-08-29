<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { useQuasar } from 'quasar';
import { specialCaseReasons } from 'src/configs/eventEnums';

const MAX_CHARACTER = 250;

const props = defineProps<{ orderReceiptId: number }>();
const $q = useQuasar();

const { t } = useI18n();
const route = useRoute();

const isLoading = ref(false);
const orderId = ~~route.params.orderReceiptId;
const operationEventStore = useOperationEventStore();

const newSpecialCase = ref({
  OrderReceiptId: props.orderReceiptId,
  Reason: '',
  Note: '',
  Id: 0,
});

async function createSpecialCase() {
  $q.loading.show();
  const success = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await operationEventStore.fetchMainOperationEvents(orderId);
  $q.loading.hide();
  $q.notify({
    type: success ? 'positive' : 'negative',
    message: success ? t('SPECIAL_CASE_CREATED') : t('ERROR_DEFAULT_TITLE'),
  });
  if (success) {
    newSpecialCase.value.Reason = '';
    newSpecialCase.value.Note = '';
  }
}
</script>

<template>
  <QCard
    v-if="!isLoading"
    class="dialog q-pa-lg column no-wrap"
  >
    <div class="row justify-between q-mb-md">
      <h2 class="col q-ma-none text-center ellipsis">{{ t('SPECIAL_CASE_MARK') }}</h2>
      <QIcon
        v-close-popup
        name="close"
        size="md"
        class="q-ml-lg cursor-pointer"
      />
    </div>

    <div class="text-h5 q-mb-md">{{ t('SPECIAL_CASE') }}:</div>
    <QSelect
      v-model="newSpecialCase.Reason"
      :label="t('SPECIAL_CASE_CHOOSE')"
      :options="specialCaseReasons"
      map-options
      emit-value
      outlined
      dense
    />
    <div class="text-h5 q-my-md">{{ t('SPECIAL_CASE_ADDITIONAL_INFORMATION') }}:</div>
    <QInput
      v-model="newSpecialCase.Note"
      :rules="[(val) => val.length <= MAX_CHARACTER || `${val.length}/${MAX_CHARACTER}`]"
      :hint="`${newSpecialCase.Note?.length}/${MAX_CHARACTER}`"
      spellcheck="true"
      type="textarea"
      no-error-icon
      outlined
      dense
    />
    <div class="q-mt-md row reverse items-center justify-between">
      <QBtn
        v-close-popup
        :label="t('APP_SAVE')"
        color="primary"
        no-caps
        :disable="!newSpecialCase.Reason || (newSpecialCase.Note?.length ?? 0) > MAX_CHARACTER"
        @click="createSpecialCase()"
      />
    </div>
  </QCard>
  <QSpinner
    v-else
    color="white"
    size="xl"
  />
</template>

<style scoped>
.dialog {
  min-width: 30%;
  max-width: 30%;
  min-height: 30%;
  max-height: 90%;
}
</style>

<style>
textarea.q-field__native {
  resize: none !important;
}
</style>
