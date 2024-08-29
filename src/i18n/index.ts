import { createI18n } from 'vue-i18n';

import en from './en';
import de from './de';

export const messages = {
  en,
  de,
};

export default createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  warnHtmlInMessage: 'off',
  messages,
});
