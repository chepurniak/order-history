<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { toggleOptions } from 'src/configs/toggleOptions';
import { storeToRefs } from 'pinia';
import { eventsColors } from 'src/configs/eventsColorPalette';

const { t } = useI18n();
const operationEventStore = useOperationEventStore();

const { eventsToggle, eventsFilter } = storeToRefs(operationEventStore);
</script>

<template>
  <QCard class="q-px-lg q-py-sm q-mx-lg q-mb-lg row items-center">
    <QToggle
      v-for="option in toggleOptions"
      :key="option.value"
      v-model="eventsToggle"
      :val="option.value"
      :label="option.label"
      :color="`${eventsColors[option.value]}-light`"
      class="q-mr-lg"
      size="lg"
      keep-color
      dense
    />
    <QInput
      v-model="eventsFilter"
      :label="t('BROWSE_EVENTS')"
      for="eventsFilter"
      style="width: 16rem"
      type="text"
      label-color="grey-7"
      standout="bg-grey-2 no-shadow"
      input-class="text-grey-10"
      dense
      rounded
      :disable="!operationEventStore.operationEvents?.length"
    >
      <template #prepend>
        <QIcon
          name="search"
          style="color: #333"
        />
      </template>
      <template
        v-if="eventsFilter"
        #append
      >
        <QIcon
          name="close"
          style="color: #333"
          class="cursor-pointer"
          @click.stop.prevent="eventsFilter = ''"
        />
      </template>
    </QInput>

    <!-- <QInput
      v-model="eventsFilter"
      :label="t('BROWSE_EVENTS')"
      style="width: 16rem"
      type="text"
      :standout="'bg-white text-'"
      rounded
      bottom-slots
      
      :disable="!operationEventStore.operationEvents?.length"
    >
      <template #prepend>
        <QIcon
          name="search"
          color="grey-10"
        />
      </template>
      <template
        v-if="eventsFilter"
        #append
      >
        <QIcon
          name="close"
          color="grey-10"
          class="cursor-pointer"
          @click.stop.prevent="eventsFilter = ''"
        />
      </template>
    </QInput> -->
    <!-- comes in future updates for specification/filtering -->
    <!-- <QBtn
      icon="o_filter_alt"
      class="bg-grey-3 q-mr-md"
      flat
      round
    />
    <QBtn
      icon="settings"
      class="bg-grey-3"
      flat
      round
    /> -->
  </QCard>
</template>
