<template>
  <div>
    <div class="language-switch relative p-3 hover:text-anchor-hover">
      {{ $t(currentLanguageName) }}

      <ul class="hidden absoute">
        <li v-for="lang in availableLanguages"
            :key="lang"
            @click="changeLocale(lang)"
            class="bg-primary py-2 px-3 text-white cursor-pointer hover:text-anchor-hover"
        >
          {{ $t(`language.${lang}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitch',
  data() {
    return {
      availableLanguages: Object.keys(this.$i18n.messages),
    };
  },
  computed: {
    currentLanguageName() {
      return `language.${this.$i18n.locale}`;
    },
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.locale = locale;
    },
  },
};
</script>

<style scoped>
.language-switch:hover ul {
  display: block;
  position: absolute;
  margin-top: 12px;
  right: 0;
}
</style>
