<script setup lang="ts">
import { QScrollArea } from 'quasar';
import { storeToRefs } from 'pinia';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import OrderConfirmation from 'src/components/details/events/OrderConfirmation.vue';
import DeliveryReceipt from 'src/components/details/events/DeliveryReceipt.vue';
import InvoiceReceipt from 'src/components/details/events/InvoiceReceipt.vue';
import ArticleBooking from 'src/components/details/events/ArticleBooking.vue';
import ReturnReceipt from 'src/components/details/events/ReturnReceipt.vue';
import CancellationInvoice from 'src/components/details/events/CancellationInvoice.vue';
import AccountingProcess from 'src/components/details/events/AccountingProcess.vue';
import NoteCreated from './details/events/NoteCreated.vue';
import AddressChange from 'src/components/details/events/AddressChange.vue';
import CreditReceipt from 'src/components/details/events/CreditReceipt.vue';
import ProblemsOperation from 'src/components/details/events/ProblemsOperation.vue';
import NotedReplacement from 'src/components/details/events/NotedReplacement.vue';
import CarrierShipmentTracking from 'src/components/details/events/CarrierShipmentTracking.vue';
import ArrivedReturn from 'src/components/details/events/ArrivedReturn.vue';
import AnnouncedReturn from 'src/components/details/events/AnnouncedReturn.vue';
import CreatedReplacement from 'src/components/details/events/CreatedReplacement.vue';
import ManuEvent from 'src/components/details/events/ManuEvent.vue';
import OrderCancellation from 'src/components/details/events/OrderCancellation.vue';
import AddressCorrected from 'src/components/details/events/AddressCorrected.vue';
import ExportedToManu from 'src/components/details/events/ExportedToManu.vue';

const operationEventStore = useOperationEventStore();
const { scrollAreaRef, eventsRef } = storeToRefs(operationEventStore);

const eventComponents = {
  OrderConfirmation,
  DeliveryReceipt,
  InvoiceReceipt,
  ArticleBooking,
  ReturnReceipt,
  CancellationInvoice,
  AccountingProcess,
  NoteCreated,
  AddressChange,
  CreditReceipt,
  ProblemsOperation,
  NotedReplacement,
  CarrierShipmentTracking,
  ArrivedReturn,
  AnnouncedReturn,
  CreatedReplacement,
  ManuEvent,
  OrderCancellation,
  AddressCorrected,
  ExportedToManu,
};
type EVENT_COMPONENTS = keyof typeof eventComponents;
</script>

<template>
  <QScrollArea
    ref="scrollAreaRef"
    class="col q-pr-md"
  >
    <Transition
      mode="out-in"
      name="opacity"
    >
      <div v-if="!operationEventStore.isEventsLoading">
        <TransitionGroup name="list">
          <div
            v-for="(currentEvent, index) in operationEventStore.getFilteredEvents"
            :key="index"
            ref="eventsRef"
            style="transition: all 0.2s ease-in-out"
          >
            <component
              :is="eventComponents[currentEvent.name as EVENT_COMPONENTS]"
              :event="{ ...currentEvent, details: '' }"
              :details="currentEvent?.details ? JSON.parse(currentEvent.details) : null"
              :currency="operationEventStore.currency"
            />
          </div>
        </TransitionGroup>
      </div>
      <div v-else>
        <QCard
          v-for="sk in 4"
          :key="sk"
          class="q-pa-lg q-mb-lg"
        >
          <div class="row">
            <QSkeleton
              class="q-mr-lg"
              type="rect"
              height="2rem"
              width="5rem"
            />
            <QSkeleton
              :width="sk % 2 === 0 ? '12rem' : '18rem'"
              type="text"
            />
          </div>
        </QCard>
      </div>
    </Transition>
  </QScrollArea>
</template>
