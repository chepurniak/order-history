<script setup lang="ts">
import LayoutHeader from 'src/components/LayoutHeader.vue';
import LayoutLeftDrawer from 'src/components/LayoutLeftDrawer.vue';
</script>

<template>
  <QLayout view="lHh LpR fFf">
    <LayoutHeader />
    <LayoutLeftDrawer />
    <QPageContainer class="app-background app-fontsize">
      <QPage>
        <RouterView />
      </QPage>
    </QPageContainer>
  </QLayout>
</template>