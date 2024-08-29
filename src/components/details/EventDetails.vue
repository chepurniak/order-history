<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { date } from 'quasar';
import { eventsColors } from 'src/configs/eventsColorPalette';
import { OPERATION_EVENT_DTO } from 'src/stores/operationEventStore';

const props = defineProps<{
  event: OPERATION_EVENT_DTO;
  hasExpandedDetails?: boolean;
}>();

const { t } = useI18n();
const { formatDate } = date;

const showExpandedDetails = ref(false);
</script>

<template>
  <QCard class="q-pa-lg q-mb-lg">
    <div class="row items-center justify-between">
      <div class="row items-center">
        <div
          :class="`bg-${eventsColors[props.event.type]}-light text-${eventsColors[props.event.type]}-dark`"
          class="date app-default-border-radius"
        >
          {{ props.event.date ? formatDate(props.event.date, 'DD.MM.YY') : '' }}
        </div>
        <div
          :class="`bg-${eventsColors[props.event.type]}-light text-${eventsColors[props.event.type]}-dark`"
          class="q-ml-sm date app-default-border-radius"
        >
          {{ props.event.date ? formatDate(props.event.date, 'HH:mm') : '' }}
        </div>
        <div class="q-ml-md text-h4 text-bold">{{ props.event.label ?? t('UNKNOWN_EVENT') }}</div>
      </div>
      <QIcon
        v-if="props.hasExpandedDetails"
        :name="showExpandedDetails ? 'expand_less' : 'expand_more'"
        size="md"
        class="cursor-pointer"
        @click="showExpandedDetails = !showExpandedDetails"
      />
    </div>

    <div class="q-mt-lg">
      <slot name="short-details"></slot>
    </div>
    <div
      class="accordion-content"
      :class="showExpandedDetails ? 'accordion-content-show' : ''"
    >
      <div>
        <div class="q-mt-lg">
          <slot name="expanded-details"></slot>
        </div>
      </div>
    </div>
  </QCard>
</template>

<style lang="scss" scoped>
.date {
  font-family: 'Ranga', cursive;
  font-size: 1.25rem;
  padding: 0.1rem 0.5rem 0 0.5rem;
  font-weight: 700;
}

.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;

  &-show {
    grid-template-rows: 1fr;
  }

  & > div {
    overflow: hidden;
  }
}
</style>
