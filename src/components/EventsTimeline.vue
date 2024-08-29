<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { useI18n } from 'vue-i18n';
import { date } from 'quasar';
import { transformFirstNameLetters } from 'src/utils/dataFormatters';
import { eventsColors } from 'src/configs/eventsColorPalette';

const { t } = useI18n();
const { formatDate } = date;
const operationEventStore = useOperationEventStore();
const { deliveryReceiptFilter } = storeToRefs(operationEventStore);

function handleUserClick(deliveryReceiptNumber: string) {
  if (deliveryReceiptFilter.value === deliveryReceiptNumber) {
    deliveryReceiptFilter.value = '';
    return;
  }
  deliveryReceiptFilter.value = deliveryReceiptNumber;
}
</script>

<template>
  <QCard
    class="column q-ml-lg q-mb-lg"
    style="width: 22vw"
  >
    <QScrollArea class="col q-pa-lg">
      <Transition
        mode="out-in"
        name="opacity"
      >
        <div v-if="!operationEventStore.isEventsLoading">
          <TransitionGroup name="list">
            <div
              v-for="(currentGroup, groupIndex) in operationEventStore.getGroupedByDate"
              :key="groupIndex"
            >
              <div class="date">
                {{ formatDate(currentGroup[0].date, 'DD.MM.YYYY') ?? t('UNKNOWN_DATE') }}
              </div>
              <TransitionGroup name="list">
                <div
                  v-for="(currentEvent, eventIndex) in currentGroup"
                  :key="eventIndex"
                  class="event row col"
                  :class="{
                    'inactive-events': deliveryReceiptFilter && !currentEvent.details.includes(deliveryReceiptFilter),
                  }"
                >
                  <div class="time-chip flex-center">
                    <div class="time">
                      {{ currentEvent.date ? formatDate(currentEvent.date, 'HH:mm') : '' }}
                    </div>
                  </div>
                  <div
                    :class="`bg-${eventsColors[currentEvent.type]}-light text-${eventsColors[currentEvent.type]}-dark`"
                    class="event-chip col row no-wrap items-center justify-between bg-grey-3"
                    aria-hidden
                    @click.stop.prevent="operationEventStore.scrollToEvent(currentEvent.id)"
                  >
                    <div class="event-name col ellipsis">
                      {{ currentEvent.label ?? t('UNKNOWN_EVENT') }}
                    </div>
                    <div
                      v-if="currentEvent.employee"
                      :class="`bg-${eventsColors[currentEvent.type]}-dark text-${
                        eventsColors[currentEvent.type]
                      }-light`"
                      class="event-employee row flex-center"
                    >
                      {{ transformFirstNameLetters(currentEvent.employee) }}
                      <QTooltip
                        anchor="center right"
                        self="center left"
                      >
                        {{ currentEvent.employee }}
                      </QTooltip>
                    </div>
                    <div
                      v-else-if="currentEvent.name === 'DeliveryReceipt'"
                      :class="`bg-${eventsColors[currentEvent.type]}-dark text-${
                        eventsColors[currentEvent.type]
                      }-light`"
                      class="event-jump-action row justify-center items-center"
                      aria-hidden
                      @click.stop.prevent="handleUserClick(JSON.parse(currentEvent.details).PackagingDescription)"
                    >
                      <QIcon
                        :name="
                          JSON.parse(currentEvent.details).PackagingDescription === deliveryReceiptFilter
                            ? 'filter_alt_off'
                            : 'filter_alt'
                        "
                        size="1.2rem"
                        class="col"
                      />
                      <QTooltip
                        anchor="center right"
                        self="center left"
                      >
                        {{
                          JSON.parse(currentEvent.details).PackagingDescription === deliveryReceiptFilter
                            ? t('REMOVE_FILTER_DELIVERY_RECEIPT')
                            : t('FILTER_DELIVERY_RECEIPT')
                        }}
                      </QTooltip>
                    </div>
                  </div>
                </div>
              </TransitionGroup>
            </div>
          </TransitionGroup>
        </div>
        <div v-else>
          <QSkeleton
            v-for="sk in 11"
            :key="sk"
            :class="(sk + 2) % 3 === 0 ? '' : 'q-ml-xl'"
            :height="(sk + 2) % 3 === 0 ? '1.6rem' : '3rem'"
            :width="(sk + 2) % 3 === 0 ? '5.3rem' : '21rem'"
            type="rect"
            class="q-mb-lg"
          />
        </div>
      </Transition>
    </QScrollArea>
  </QCard>
</template>

<style scoped lang="scss">
.date {
  display: inline-block;
  background-color: #333;
  color: #fff;
  border-radius: 0.25rem;
  padding: 0.15rem 0.5rem 0.2rem;
  font-weight: 800;
  font-size: 0.875rem;
  margin: 0.2rem 0;
}

.time {
  width: 2.1rem;
  background-color: #fff;
  font-weight: 800;
  font-size: 0.75rem;
  color: #656565;

  &-chip {
    display: flex;
    padding: 0.15rem;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      height: 145%;
      width: 0.4rem;
      background-color: #d9d9d9;
      border-radius: 0.2rem;
    }
  }
}

.event {
  transition: all 0.2s ease-in-out;
  margin: 0.75rem 0;

  &-chip {
    padding: 0 1rem;
    margin-left: 0.75rem;
    font-weight: 700;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.9;
      transform: translateX(-0.2rem);
    }
  }

  &-name {
    margin: 0.75rem 0.5rem 0.75rem 0;
  }

  &-employee {
    font-size: 0.75rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.45rem;
    font-weight: 800;
    cursor: help;
  }
  &-jump-action {
    font-size: 0.75rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.45rem;
    font-weight: 800;
    cursor: pointer;
  }
}

.inactive-events {
  opacity: 0.5;
}
</style>
