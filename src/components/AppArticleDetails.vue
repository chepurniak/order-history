<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppCopyBtn from 'src/components/AppCopyBtn.vue';
import { ORDER_RECEIPT_POSITION } from 'src/types/events/OrderConfirmation';

const { t } = useI18n();
const FREE_REPLACEMENT_LIMIT = 20;

const props = defineProps<{
  article: ORDER_RECEIPT_POSITION;
}>();

const articleCanBeReplacedFree = computed(() => (props.article.PricePerUnit ?? 0) < FREE_REPLACEMENT_LIMIT);
</script>

<template>
  <QCard class="dialog q-pa-lg column no-wrap">
    <div class="row justify-between q-mb-md">
      <h2 class="col q-ma-none text-center">{{ article.ArticleName }}</h2>
      <QIcon
        v-close-popup
        name="close"
        size="md"
        class="q-ml-lg cursor-pointer"
      />
    </div>
    <div class="row q-mt-lg">
      <div class="col-5 row justify-center">
        <QImg
          class="q-my-sm"
          :src="props.article.ImageUrl as string"
          spinner-color="primary"
          style="max-width: 16rem; height: 16rem"
        >
          <template #error>
            <div class="absolute-full flex flex-center bg-white text-negative text-bold">Cannot load image!</div>
          </template>
        </QImg>
      </div>
      <div class="q-mt-md col">
        <div class="q-mb-lg row no-wrap justify-between">
          <div class="q-mr-md text-weight-light">{{ t('ARTICLE_NUMBER') }}:</div>
          <div class="text-right">
            {{ `${article.ArticleNumber}_${article.VariantId}` }}
            <AppCopyBtn :item-to-copy="`${article.ArticleNumber}_${article.VariantId}`" />
          </div>
        </div>
        <div class="q-mb-lg row no-wrap justify-between">
          <div class="q-mr-md text-weight-light">{{ t('ARTICLE_NAME') }}:</div>
          <div class="q-pr-sm q-mr-lg text-right">{{ article.ArticleName }}</div>
        </div>
        <div class="q-mb-lg row no-wrap justify-between">
          <div class="q-mr-md text-weight-light">{{ t('VARIANT_NAME') }}:</div>
          <div class="q-pr-sm q-mr-lg text-right">{{ article.VariantName?.length ? article.VariantName : '-' }}</div>
        </div>
        <div class="q-mb-lg row no-wrap justify-between">
          <div class="q-mr-md text-weight-light">EAN:</div>
          <div class="text-right">
            {{ article.Ean }}
            <AppCopyBtn :item-to-copy="article?.Ean ?? ''" />
          </div>
        </div>
        <div
          v-if="props.article.PricePerUnit"
          class="row items-center q-my-sm"
        >
          <QIcon
            :name="articleCanBeReplacedFree ? 'redeem' : 'payments'"
            color="grey-8"
            size="1.8rem"
            class="q-mr-md"
          />
          <div class="">{{ articleCanBeReplacedFree ? t('FREE_REPLACEMENT') : t('NO_FREE_REPLACEMENT') }}</div>
        </div>
      </div>
    </div>
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
