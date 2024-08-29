<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import AppTooltip from 'src/components/AppTooltip.vue';
import DialogSpecialCases from 'src/components/furtherActions/DialogSpecialCases.vue';
import DialogPositionsOverview from 'src/components/furtherActions/DialogPositionsOverview.vue';
import DialogFeedback from 'src/components/furtherActions/DialogFeedback.vue';
import { ORDER_CONFIRMATION } from 'src/types/events/OrderConfirmation';

const route = useRoute();

const operationEventStore = useOperationEventStore();

const openFurtherOptions = ref(false);
const showSpecialCases = ref(false);
const showPositionsOverview = ref(false);
const showFeedback = ref(false);

const orderId = ~~route.params.orderReceiptId;

const orderReceiptId = computed(() => {
  const orderConfirmation = operationEventStore.operationEvents?.find((event) => event.name === 'OrderConfirmation');
  const details = orderConfirmation?.details ? (JSON.parse(orderConfirmation.details) as ORDER_CONFIRMATION) : null;
  return details?.Id ?? 0;
});

const furtherOptions = computed(() => [
  {
    label: 'SPECIAL_CASE',
    icon: 'attach_file',
    color: 'swamp-light',
    testColor: 'swamp-dark',
    show: orderReceiptId.value,
    handler: () => (showSpecialCases.value = true),
  },
  {
    label: 'POSITION_OVERVIEW',
    icon: 'o_fact_check',
    color: 'pigeon-light',
    testColor: 'pigeon-dark',
    show: orderId,
    handler: () => (showPositionsOverview.value = true),
  },
  {
    label: 'FEEDBACK',
    icon: 'o_rate_review',
    color: 'nut-light',
    testColor: 'nut-dark',
    show: orderId,
    handler: () => (showFeedback.value = true),
  },
]);
</script>

<template>
  <QFab
    v-if="furtherOptions.some((option) => option.show)"
    v-model="openFurtherOptions"
    class="q-ma-lg actions-btn"
    color="primary"
    icon="more_horiz"
    direction="up"
  >
    <div
      v-for="(option, index) in furtherOptions"
      :key="index"
    >
      <QFabAction
        v-if="option.show"
        :color="option.color"
        :text-color="option.testColor"
        :icon="option.icon"
        style="padding: 0.7rem"
        @click="option.handler"
      >
        <AppTooltip :label="option.label" />
      </QFabAction>
    </div>
  </QFab>

  <QDialog
    v-model="showSpecialCases"
    persistent
  >
    <DialogSpecialCases :order-receipt-id="orderReceiptId" />
  </QDialog>

  <QDialog
    v-model="showPositionsOverview"
    persistent
  >
    <DialogPositionsOverview />
  </QDialog>

  <QDialog
    v-model="showFeedback"
    persistent
  >
    <DialogFeedback />
  </QDialog>
</template>

<style scoped>
.actions-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 0 1px 3px #8c8c8c20;
}
</style>