<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <SelectAlbum v-model="albumId" />
    <LazyPictureSwiper v-show="albumId !== -1" :album-id="albumId" />
  </div>
</template>

<script setup lang="ts">
const albumId = ref(-1);
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
