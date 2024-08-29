<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
defineProps<{
  label: string;
}>();

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t, te } = useI18n();
</script>

<template>
  <QTooltip
    :delay="750"
    anchor="center right"
    self="center left"
    :offset="[10, 10]"
  >
    {{ te(label) ? t(label) : label }}
  </QTooltip>
</template>
