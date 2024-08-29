<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import AppTooltip from './AppTooltip.vue';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
</script>

<template>
  <QHeader class="app-background">
    <QToolbar class="text-black app-fontsize">
      <div
        class="row items-center q-mr-sm"
        style="width: 2.6rem"
      >
        <QBtn
          v-if="route.meta.back"
          class="row flex-center"
          icon="arrow_back_ios_new"
          flat
          round
          @click="router.push({ name: route.meta.back })"
        >
          <AppTooltip label="APP_BACK" />
        </QBtn>
      </div>
      <h2
        v-if="route.meta.title"
        class="q-ma-none col text-bold q-my-lg"
      >
        {{ t(route.meta.title) }}
      </h2>
    </QToolbar>
  </QHeader>
</template>
