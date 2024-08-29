<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const feedback = ref('');
</script>

<template>
  <QCard class="dialog q-pa-lg column no-wrap">
    <div class="row justify-between q-mb-md">
      <h2 class="col q-ma-none text-center ellipsis">{{ t('FEEDBACK') }}</h2>
      <QIcon
        v-close-popup
        name="close"
        size="md"
        class="q-ml-lg cursor-pointer"
      />
    </div>

    <div class="text-h5 q-mb-md">{{ t('FEEDBACK_HINT') }}:</div>
    <QInput
      v-model="feedback"
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
        :disable="!feedback.length"
        @click=""
      />
    </div>
  </QCard>
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
