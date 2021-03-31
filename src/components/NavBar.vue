<template>
  <nav class="sticky top-0 left-0 right-0 pl-3 pr-3 bg-primary text-white flex items-center z-20">
    <a href="/" :title="$t('navigation.back_to_index')" class="mr-4 flex items-center">
      <img src="../assets/logo.png" alt="FlyffDB" id="logo" class="mr-2">
      <span class="font-bold">flyffDB</span>
    </a>

    <ul class="flex flex-grow">
      <nav-bar-item
        v-for="entry in entries"
        :key="entry.name"
        :name="entry.name"
        :path="entry.path"
        :entries="entry.entries"
      ></nav-bar-item>
    </ul>

    <language-switch></language-switch>
  </nav>
</template>

<script>
import NavBarItem from '@/components/NavBarItem.vue';
import navigation from '@/config/navigation.json';
import LanguageSwitch from '@/components/LanguageSwitch.vue';

export default {
  name: 'NavBar',
  components: {
    LanguageSwitch,
    NavBarItem,
  },
  data() {
    return {
      entries: navigation,
    };
  },
};
</script>

<style>
#logo {
  height: 25px;
}
</style>
