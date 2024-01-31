<template>
  <div class="album_select-wrapper">
    <label for="album_select">альбом</label>
    <select id="album_select" v-model="selectedAlbumId" name="album">
      <option v-for="album in albumList" :key="album.id" :value="album.id">
        {{ album.title }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
const { modelValue } = defineProps({
  modelValue: { type: Number, required: false, default: 1 },
});
const emit = defineEmits(["update:modelValue"]);
const selectedAlbumId = ref(modelValue);
watch(selectedAlbumId, (selected) => {
  emit("update:modelValue", selected);
});
const {
  data: albumList,
  // pending: pendingGetPicArr,
  // error: errorGetPicArr,
  // execute: executeGetPicArr,
} = await useAsyncData<any, FetchError>(
  "albumList",
  async () => {
    return await $fetch<any>(
      `https://jsonplaceholder.typicode.com/users/1/albums`,
      {
        method: "get",
      },
    );
  },
  { server: false },
);
</script>
<style scoped>
#album_select-user {
  /* width: 140px; */
  height: 35px;
  padding: 5px 35px 5px 5px;
  font-size: 18px;
  border: 2px solid #ccc;
}
.album_select-wrapper {
  margin-bottom: 25px;
}
label {
  display: block;
}
</style>
