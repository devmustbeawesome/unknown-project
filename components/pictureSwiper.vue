<template>
  <div v-if="pendingGetPicArr">loading...</div>
  <div v-else-if="errorGetPicArr">
    {{ errorGetPicArr.cause }}
  </div>
  <b-Swiper v-else :id="`main_swiper`">
    <template
      v-for="picture in pictureArr"
      :key="picture.id"
      #[`pic_${picture.id}`]
    >
      <div class="slider_img-wrapper">
        <picture>
          <source :srcset="picture.url" media="(min-width: 600px)" />
          <img
            :src="picture.thumbnailUrl"
            :alt="picture.title"
            loading="lazy"
          />
        </picture>
      </div>
    </template>
  </b-Swiper>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
const props = defineProps({
  albumId: { type: Number, required: true, default: -1 },
});
const {
  data: pictureArr,
  pending: pendingGetPicArr,
  error: errorGetPicArr,
  // execute: executeGetPicArr,
} = await useAsyncData<any, FetchError>(
  `pictureArr${props.albumId}`,
  async () => {
    return await $fetch<any>(
      `https://jsonplaceholder.typicode.com/albums/${props.albumId}/photos`,
      {
        method: "get",
      },
    );
  },
  { server: false, watch: [() => props.albumId] },
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
