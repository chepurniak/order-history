<script lang="ts" setup>
// import { onMounted, computed, inject, watch } from 'vue';
// import { useI18n } from 'vue-i18n';
// import { useRoute } from 'vue-router';
// import { useOperationEventStore } from 'src/stores/operationEventStore';
// import { useLocalStorage } from '@vueuse/core';
// import { Keycloak } from '@relaxdays/keycloak';
// import { overwriteKc } from 'src/services/authentication/keycloak';
// import { refreshAuthHeader } from 'src/services/axios';
// import { useQuasar } from 'quasar';
// import BaseData from 'src/components/BaseData.vue';
// import EventsFilterBar from 'src/components/EventsFilterBar.vue';
// import EventsTimeline from 'src/components/EventsTimeline.vue';
// import EventsList from 'src/components/EventsList.vue';
// import OperationActions from 'src/components/furtherActions/OperationActions.vue';
// import baseDataImg from 'src/assets/baseData.svg';

// const kc = inject('$kc') as Keycloak;
// const $q = useQuasar();
// const props = defineProps<{ orderReceiptId: number }>();

// const { t } = useI18n();
// const route = useRoute();

// const baseUrl = import.meta.env.VITE_APP_BASE_URL;

// const operationEventStore = useOperationEventStore();
// const showBaseData = useLocalStorage('ShowBaseData', false);

// const noEvents = computed(() => operationEventStore.operationEvents?.length);
// const noFilteredEvents = computed(() => operationEventStore.getFilteredEvents.length === 0);

// onMounted(async () => {
//   overwriteKc(kc);
//   refreshAuthHeader(kc.token);
//   operationEventStore.$reset();
//   operationEventStore.isEventsLoading = true;
//   const success = await operationEventStore.fetchMainOperationEvents(
//     props.orderReceiptId ?? route.params.orderReceiptId
//   );
//   operationEventStore.isEventsLoading = false;
//   if (!success) return;
//   await operationEventStore.fetchOperationBaseData(props.orderReceiptId ?? route.params.orderReceiptId);
//   await operationEventStore.fetchPositions(props.orderReceiptId ?? route.params.orderReceiptId);
//   void operationEventStore.compareAllAvailableEvents();
// });
</script>

<template>
  TEST
  <!-- <div
    class="col row no-wrap"
    style="min-height: inherit"
  >
    <div class="column col">
      <div class="row items-center justify-between no-wrap">
        <EventsFilterBar />
        <Transition name="opacity">
          <div
            v-if="!showBaseData"
            class="q-mx-lg cursor-pointer open-base-data row no-wrap items-end relative-position"
            role="button"
            :tabindex="0"
            @click="showBaseData = true"
            @keydown.enter="showBaseData = true"
          >
            <div class="open-base-data-label">{{ t('BASE_DATA').toUpperCase() }}</div>
            <QImg
              :src="baseDataImg"
              alt="avatar image"
              width="5rem"
              no-spinner
            />
          </div>
        </Transition>
      </div>
      <Transition
        mode="out-in"
        name="opacity"
      >
        <div
          v-if="!operationEventStore.isEventsLoading && noFilteredEvents"
          class="col column flex-center"
        >
          <QImg
            :src="`${baseUrl}/assets/no_filter_results.svg`"
            alt="no filter results image"
            style="width: 28rem"
            no-spinner
          />
          <template v-if="noEvents">
            <h3
              class="q-ma-lg text-weight-light text-center"
              style="font-size: 2rem; max-width: 45rem"
            >
              {{ t('NO_FILTERED_EVENTS') }}.
            </h3>
            <QBtn
              :label="t('RESET_FILTER')"
              color="primary"
              outline
              no-caps
              @click="operationEventStore.resetFilters()"
            />
          </template>
        </div>
        <div
          v-else
          class="col row relative-position"
        >
          <EventsTimeline />
          <div class="col column q-ml-lg q-mr-sm q-mb-lg">
            <EventsList />
          </div>
          <OperationActions />
        </div>
      </Transition>
    </div>
    <Transition name="slide-fade">
      <KeepAlive>
        <QCard
          v-if="showBaseData"
          class="base-data column"
        >
          <QBtn
            class="close-base-data bg-white"
            icon="arrow_forward_ios"
            size="0.8rem"
            round
            @click="showBaseData = false"
          />
          <BaseData />
        </QCard>
      </KeepAlive>
    </Transition>
  </div> -->
</template>

<!-- <style lang="scss">
@import '../styles/main.scss';
</style> -->
<style scoped lang="scss">
.open-base-data {
  margin-top: -1rem;
  z-index: 1;
  &-label {
    margin-right: -1.1rem;
    z-index: 2;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 0.4rem 0.6rem 0.3rem 0.6rem;
    background-color: #333;
    color: #fff;
  }
}

.close-base-data {
  position: absolute;
  top: 0.7rem;
  left: -1.3rem;
  z-index: 1;
}
</style>
