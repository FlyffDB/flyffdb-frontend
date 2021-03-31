import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enTranslations from './translations/en.json';
import deTranslations from './translations/de.json';

Vue.use(VueI18n);

const translations = {
  en: enTranslations,
  de: deTranslations,
};

const i18n = new VueI18n({
  locale: localStorage.locale ?? 'en',
  fallbackLocale: 'en',
  messages: translations,
});

export default i18n;
