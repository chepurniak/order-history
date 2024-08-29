import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { Quasar, Dialog, Notify, Loading } from 'quasar'
import i18n from './i18n'

import 'quasar/src/css/index.sass'
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import 'quasar/src/css/index.sass';

import './styles/main.scss';

import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)
  .use(Quasar, {
    plugins: {
      Dialog,
      Notify,
      Loading,
    }
  })
  .use(pinia)
  .use(router)
  .use(i18n)

app.mount('#app')

