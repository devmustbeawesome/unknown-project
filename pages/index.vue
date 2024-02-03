<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <SelectAlbum v-model="albumId" />
    <b-Swiper :id="`main_swiper`">
      <template
        v-for="picture in pictureArr"
        :key="picture.id"
        #[`pic_${picture.id}`]
      >
        <div class="slider_img-wrapper">
          <picture loading="lazy">
            <source :srcset="picture.url" media="(min-width: 600px)" />
            <img :src="picture.thumbnailUrl" :alt="picture.title" />
          </picture>
        </div>
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
  data: pictureArr,
  // pending: pendingGetPicArr,
  // error: errorGetPicArr,
  // execute: executeGetPicArr,
} = await useAsyncData<any, FetchError>(
  "pictureArr",
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

<style scoped>
.slider_img-wrapper img {
  width: 100%;
}
</style>
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
