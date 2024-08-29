<script setup lang="ts">
import AppTooltip from 'src/components/AppTooltip.vue';
import dipsy_logo from 'src/assets/dipsy_logo.svg';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const avatarColors = [
  'bg-amber-5 text-primary',
  'bg-deep-orange-4 text-primary',
  'bg-orange-4 text-primary',
  'bg-cyan-4 text-primary',
  'bg-blue-grey-3 text-primary',
  'bg-light-blue-3 text-primary',
];

const randomColor = Math.floor(Math.random() * avatarColors.length);

const drawerLeft = ref(false);
const isDevelopment = import.meta.env.VITE_KEYCLOAK_REALM === 'staging';

function getNameInitials() {
  const name = 'User';
  const familyName = 'Name';
  if (name && familyName) {
    return name.substring(0, 1).toUpperCase() + familyName.substring(0, 1).toUpperCase();
  }
  return '';
}
</script>

<template>
  <QDrawer
    v-model="drawerLeft"
    :width="88"
    class="bg-primary text-white column items-center app-fontsize"
    show-if-above
  >
    <RouterLink
      to="/"
      class="row q-mx-sm q-my-md"
    >
      <img
        :src="dipsy_logo"
        style="width: 3rem"
        :alt="t('APP_HOME')"
      />
      <AppTooltip label="APP_HOME" />
    </RouterLink>
    <div
      class="avatar cursor-pointer row items-center justify-center text-bold"
      :class="avatarColors[randomColor]"
    >
      {{ getNameInitials() }}
    </div>
    <QSpace />
    <QBtn
      class="q-mb-md"
      icon="logout"
      size="lg"
      unelevated
      round
      no-caps
    />
  </QDrawer>
</template>

<style scoped lang="scss">
.warning {
  border: 1px solid yellow;
  width: 100%;
  text-align: center;
}

.avatar {
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
}
</style>
