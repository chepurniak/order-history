<script setup lang="ts">
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { useI18n } from 'vue-i18n';
import { baseData, CATEGORY_DATA } from 'src/configs/baseData';
import AppInfoBox from 'src/components/AppInfoBox.vue';

const operationEventStore = useOperationEventStore();
const { t } = useI18n();

function show(item: CATEGORY_DATA) {
  return item.label !== t('EBAY_USER_NAME') || operationEventStore.baseData.marketplace?.toLowerCase().includes('ebay');
}
</script>

<template>
  <QScrollArea class="col">
    <div
      v-for="(category, categoryIndex) in baseData"
      :key="categoryIndex"
      class="base-data"
    >
      <div class="q-ma-lg q-pa-lg q-mb-lg bg-brown-2 app-default-border-radius">
        <h4 class="text-h4 text-bold q-ma-none ellipsis">{{ category.title }}</h4>
        <div
          v-for="(item, itemIndex) in category.data"
          :key="`${categoryIndex}_${itemIndex}`"
        >
          <AppInfoBox
            v-show="show(item)"
            :is-loading="Object.keys(operationEventStore.baseData).length === 0"
            :label="item.label"
            :value="item.value(operationEventStore.baseData)"
            :could-be-copied="item.couldBeCopied"
            class="q-mt-md"
            color="brown-1"
          />
        </div>
      </div>
    </div>
  </QScrollArea>
</template>
