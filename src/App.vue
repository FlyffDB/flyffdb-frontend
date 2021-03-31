<template>
  <div id="app" class="bg-secondary">
    <nav-bar />

    <div class="relative z-10">
      <div class="min-h-screen">
        <router-view/>
      </div>

      <page-footer />
    </div>

    <background-layer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PageFooter from '@/components/PageFooter.vue';
import BackgroundLayer from '@/components/BackgroundLayer.vue';

export default {
  components: { BackgroundLayer, PageFooter, NavBar },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
