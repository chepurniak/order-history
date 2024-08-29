<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppCopyBtn from 'src/components/AppCopyBtn.vue';
import AppTooltip from 'src/components/AppTooltip.vue';

const props = defineProps<{
  label?: string;
  value?: string | number;
  couldBeCopied?: boolean;
  isLoading?: boolean;
  color?: string;
}>();

const { t } = useI18n();
const MAX_POSSIBLE_LENGTH = 25;
</script>

<template>
  <Transition
    name="opacity"
    mode="out-in"
  >
    <div
      v-if="!props.isLoading"
      class="box row no-wrap justify-between items-center app-default-border-radius"
      :class="`bg-${props.color ? props.color : 'powder-light'}`"
    >
      <div class="col q-my-xs">
        <div class="box-label ellipsis">{{ props.label }}</div>
        <div
          v-if="props.value"
          class="box-value ellipsis"
        >
          {{ props.value }}
          <AppTooltip
            v-if="props.value.toString().length >= MAX_POSSIBLE_LENGTH"
            :label="props.value.toString()"
          />
        </div>
        <div
          v-else
          class="text-grey-8"
        >
          {{ t('APP_NO_INFO') }}
        </div>
      </div>
      <div>
        <AppCopyBtn
          v-if="props.couldBeCopied && props.value"
          :item-to-copy="props.value.toString()"
        />
        <slot name="end"></slot>
      </div>
    </div>
    <QSkeleton
      v-else
      class="q-mt-md"
      type="rect"
      width="100%"
      height="3.2rem"
    />
  </Transition>
</template>

<style lang="scss" scoped>
.box {
  padding: 0 0.75rem;

  &-label {
    font-size: 0.813rem;
  }
  &-value {
    font-weight: 600;
  }
}
</style>