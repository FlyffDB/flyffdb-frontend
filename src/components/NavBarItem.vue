<template>
  <li class="nav-item relative">
    <a :href="path"
       :title="$t(name)"
       class="inline-block p-3 hover:text-anchor-hover"
    >
      {{ $t(name) }}
    </a>

    <ul v-if="entries" class="hidden absolute">
      <li v-for="entry in entries"
          :key="entry.name"
          class="bg-primary py-2 px-3 text-white cursor-pointer hover:text-anchor-hover"
      >
        <a :href="entry.path"
           :title="entry.name"
        >
          {{ $t(entry.name) }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    entries: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
.nav-item:hover ul {
  display: block;
  position: absolute;
  left: 0;
}
</style>
