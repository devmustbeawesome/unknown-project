<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <SelectAlbum v-model="albumId" />
    <b-Swiper>
      <template v-for="pic in picArr" :key="pic.id" #[`pic_${pic.id}`]>
        <picture loading="lazy">
          <source :srcset="pic.url" media="(min-width: 600px)" />
          <img :src="pic.thumbnailUrl" :alt="pic.title" />
        </picture>
      </template>
    </b-Swiper>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
const albumId = ref(1);
const { t } = useI18n({
  useScope: "local",
});
const {
  data: picArr,
  // pending: pendingGetPicArr,
  // error: errorGetPicArr,
  // execute: executeGetPicArr,
} = await useAsyncData<any, FetchError>(
  "picArr",
  async () => {
    return await $fetch<any>(
      `https://jsonplaceholder.typicode.com/albums/${albumId.value}/photos`,
      {
        method: "get",
      },
    );
  },
  { server: false, watch: [albumId] },
);
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
