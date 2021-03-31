<template>
  <footer class="bg-primary text-white w-full p-10 flex flex-col items-center">
    <div class="sm:flex max-w-grid w-full">
      <div v-for="entry in entries" :key="entry.category" class="sm:flex flex-grow justify-center">
        <div class="mb-6 sm:mb-0">
          <h4 class="text-lg uppercase mb-2 text-white">{{ $t(entry.category) }}</h4>

          <ul>
            <li v-for="link in entry.entries" :key="link.name" class="mb-1">
              <a :href="link.path" class="text-anchor hover:text-anchor-hover">
                {{ $t(link.name) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="max-w-grid w-full text-xs mt-4 text-center">
      {{ $t('legal.copyright') }}
    </div>
  </footer>
</template>

<script>
import footerEntries from '../config/footer.json';

export default {
  name: 'PageFooter',
  data() {
    return {
      entries: footerEntries,
    };
  },
};
</script>
