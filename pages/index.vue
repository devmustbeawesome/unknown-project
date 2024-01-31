<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <ExampleSwiper />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
</script>

<!-- <style scoped>
</style> -->
<i18n lang="json">
{
  "en": {
    "title": "index"
  },
  "ru": {
    "title": "Главная"
  }
}
</i18n>
