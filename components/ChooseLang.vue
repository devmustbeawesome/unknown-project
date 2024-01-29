<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <button
    v-for="loc in availableLocales"
    :key="loc.code"
    class="footer_choose-lang-button"
    href="#"
    @click.prevent.stop="setLocale(loc.code)"
  >
    {{ loc.name }}
  </button>
</template>
<style scoped>
.footer_choose-lang-button {
  background: none;
  border: 1px solid var(--accent-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--accent-color);
}
</style>
