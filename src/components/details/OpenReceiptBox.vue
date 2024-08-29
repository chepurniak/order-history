<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const props = defineProps<{ receiptNumber: string }>();
const { t } = useI18n();
const $q = useQuasar();

const receiptIsLoading = ref(false);

/**
 * open sage invoice receipt
 */
async function openReceipt() {
  if (receiptIsLoading.value) return;
  receiptIsLoading.value = true;
  // const resp = await axiosWrapper('Invoice', {
  //   method: 'GET',
  //   baseURL,
  //   params: {
  //     documentYear: splittedReceiptNumber.value[0],
  //     documentNumber: splittedReceiptNumber.value[1],
  //     takeLivesystem: isProduction,
  //     invoiceDocumentsOnly: false,
  //   },
  // });
  const resp = {
    status: 200,
    data: {}
  }
  receiptIsLoading.value = false;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (resp.data?.error) {
    $q.notify({ type: 'negative', message: t('RECEIPT_CANT_OPENED') });
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  // invoiceUrl.value = resp.data[0].assetUrl;
  const invoiceUrl = 'https://www.google.com/';
  window.open(invoiceUrl, '_blank')?.focus();
}
</script>

<template>
  <div
    class="box row no-wrap justify-between items-center app-default-border-radius bg-powder-light"
    :style="receiptIsLoading ? 'cursor: wait' : 'cursor: pointer'"
    role="button"
    :tabindex="0"
    @click="openReceipt"
    @keydown.enter="openReceipt"
  >
    <div class="q-my-sm q-py-xs ellipsis">
      {{ t('OPEN_RECEIPT') }}
    </div>
    <QIcon
      v-if="props.receiptNumber && !receiptIsLoading"
      name="o_file_open"
      size="sm"
      color="grey-7"
      class="cursor-pointer"
    />
    <QSpinnerPuff
      v-else-if="props.receiptNumber && receiptIsLoading"
      color="primary"
      size="sm"
    />
  </div>
</template>

<style scoped lang="scss">
.box {
  padding: 0 0.75rem;
  font-weight: 600;
}
</style>
