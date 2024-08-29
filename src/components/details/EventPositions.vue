<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { QTableColumn } from 'quasar';
import AppArticleDetails from 'src/components/AppArticleDetails.vue';
import { ORDER_RECEIPT_POSITION } from 'src/types/events/OrderConfirmation';

const props = defineProps<{ columns: Array<QTableColumn>; rows: Array<object> }>();

const { t } = useI18n();

const pagination = ref({ rowsPerPage: 0 });

const showArticleInfo = ref(false);
const currentArticle: Ref<null | ORDER_RECEIPT_POSITION> = ref(null);

const defaultColumns: QTableColumn[] = [
  { name: 'article', label: t('ARTICLE'), field: (val) => val as never, align: 'left' },
  { name: 'variantName', label: t('VARIANT_NAME'), field: 'VariantName', align: 'left' },
];

function openArticleDetails(article: ORDER_RECEIPT_POSITION) {
  currentArticle.value = article;
  showArticleInfo.value = true;
}
</script>

<template>
  <QDialog
    v-if="currentArticle"
    v-model="showArticleInfo"
    persistent
  >
    <AppArticleDetails :article="currentArticle" />
  </QDialog>
  <QTable
    v-if="props.rows.length"
    v-model:pagination="pagination"
    :rows="props.rows"
    :columns="[...defaultColumns, ...props.columns].map((cols) => ({ ...cols, classes: 'bg-white' }))"
    :rows-per-page-options="[0]"
    style="max-height: 23.2rem"
    table-header-style="position: sticky; top: 0; z-index: 1"
    table-header-class="bg-powder-light text-caption"
    card-class="bg-white"
    table-style="font-size: 4rem !important"
    row-key="name"
    hide-bottom
    virtual-scroll
    flat
    @row-click="(_, article: ORDER_RECEIPT_POSITION) => openArticleDetails(article)"
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
  </QTable>
  <div
    v-else
    class="row flex-center q-pa-md bg-powder-light app-default-border-radius"
  >
    <QIcon
      name="o_info"
      size="sm"
    />
    <div class="q-ml-md">{{ t('NO_POSITIONS') }}</div>
  </div>
</template>
