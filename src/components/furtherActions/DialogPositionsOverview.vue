<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useOperationEventStore } from 'src/stores/operationEventStore';
import { storeToRefs } from 'pinia';
import { QTableColumn } from 'quasar';

const { t } = useI18n();
const operationEventStore = useOperationEventStore();
const { operationPositions } = storeToRefs(operationEventStore);

const pagination = ref({ rowsPerPage: 0 });
const toggleUnshippedPositions = ref(false);

const tableColumns: QTableColumn[] = [
  { name: 'article', label: t('ARTICLE'), field: (val) => val as never, align: 'left' },
  { name: 'variantName', label: t('VARIANT_NAME'), field: 'VariantName', align: 'left' },
  {
    name: 'quantity',
    label: t('QUANTITY_SHIPPED_ORDERED'),
    field: (val) => val as never,
  },
];

const sumQuantityShipped = computed(() =>
  operationPositions.value.reduce((prev, curr) => prev + (curr?.QuantityShipped ?? 0), 0)
);
const sumQuantityOrdered = computed(() =>
  operationPositions.value.reduce((prev, curr) => prev + (curr?.QuantityOrdered ?? 0), 0)
);
</script>

<template>
  <QCard class="dialog q-pa-lg column no-wrap">
    <div class="row justify-between q-mb-md">
      <h2 class="col q-ma-none text-center">{{ t('POSITION_OVERVIEW') }}</h2>
      <QIcon
        v-close-popup
        name="close"
        size="md"
        class="q-ml-lg cursor-pointer"
      />
    </div>

    <QToggle
      v-model="toggleUnshippedPositions"
      :label="`${t('UNSHIPPED_ARTICLE')} (${sumQuantityOrdered - sumQuantityShipped})`"
      :disable="!operationPositions.length || sumQuantityOrdered === sumQuantityShipped"
      class="q-mb-md"
      color="indigo-6"
    />

    <div
      v-if="!operationPositions.length"
      class="q-mt-xl row flex-center"
    >
      <QSpinner
        color="primary"
        size="3rem"
      />
    </div>

    <QTable
      v-else
      v-model:pagination="pagination"
      :rows="
        toggleUnshippedPositions
          ? operationPositions.filter((pos) => pos.QuantityOrdered > pos.QuantityShipped)
          : operationPositions
      "
      :columns="tableColumns.map((cols) => ({ ...cols, classes: 'bg-white' }))"
      :rows-per-page-options="[0]"
      style="max-height: 26.15rem"
      table-header-style="position: sticky; top: 0; z-index: 1"
      table-header-class="bg-powder-light text-caption"
      card-class="bg-white"
      row-key="name"
      hide-bottom
      virtual-scroll
      flat
    >
      <template #body-cell-article="tableProps">
        <QTd
          key="Article"
          :props="tableProps"
        >
          <div>{{ tableProps.row.ArticleName }}</div>
          <div class="text-italic">{{ tableProps.row.ArticleNumber }}</div>
        </QTd>
      </template>

      <template #body-cell-quantity="tableProps">
        <QTd
          key="Quantity"
          :props="tableProps"
        >
          <div :class="tableProps.row.QuantityOrdered > tableProps.row.QuantityShipped ? 'text-warning' : ''">
            {{ tableProps.row.QuantityShipped }} / {{ tableProps.row.QuantityOrdered }}
          </div>
        </QTd>
      </template>

      <template #bottom-row="tableProps">
        <QTr
          class="bg-powder-light text-bold"
          style="bottom: 0; position: sticky; z-index: 1"
        >
          <QTd
            v-for="col in tableProps.cols"
            :key="col.name"
            :class="col.__thClass"
          >
            <div v-if="col.name === 'article'">{{ t('APP_SUMMARY') }}</div>
            <div
              v-if="col.name === 'quantity'"
              :class="sumQuantityOrdered > sumQuantityShipped ? 'text-warning' : ''"
            >
              {{ sumQuantityShipped }} / {{ sumQuantityOrdered }}
            </div>
          </QTd>
        </QTr>
      </template>
    </QTable>
  </QCard>
</template>

<style lang="scss" scoped>
.dialog {
  min-width: 40%;
  max-width: 90%;
  min-height: 30%;
  max-height: 90%;
}
</style>
