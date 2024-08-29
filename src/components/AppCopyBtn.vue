<script setup lang="ts">
import { ref } from 'vue';
import { copy } from 'src/utils/copy';
import AppTooltip from 'src/components/AppTooltip.vue';

const props = defineProps<{ itemToCopy: string; size?: string }>();

const isCopied = ref(false);

async function copyToClipboard() {
  await copy(props.itemToCopy);
  isCopied.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isCopied.value = false;
}
</script>

<template>
  <Transition
    mode="out-in"
    name="opacity"
  >
    <QIcon
      v-if="!isCopied"
      class="cursor-pointer q-ml-sm"
      :size="size ? size : 'sm'"
      :name="isCopied ? 'done' : 'content_copy'"
      color="grey-7"
      @click="copyToClipboard()"
    >
      <AppTooltip label="APP_COPY" />
    </QIcon>
    <QIcon
      v-else
      class="q-ml-sm"
      :size="size ? size : 'sm'"
      name="check_circle"
      color="positive"
    />
  </Transition>
</template>
