<script setup lang="ts">
const props = defineProps({
  showSpinner: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <QInnerLoading :showing="props.showSpinner">
    <QSpinner
      size="50px"
      color="primary"
    />
  </QInnerLoading>
</template>