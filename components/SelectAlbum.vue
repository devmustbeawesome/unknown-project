<template>
  <div>
    <div v-if="pendingAlbum">loading albums...</div>
    <div v-else-if="errorGetAlbum">
      {{ errorGetAlbum.cause }}
    </div>
    <div v-else class="album_select-wrapper">
      <label for="album_select">альбом</label>
      <select id="album_select" v-model="selectedAlbumId" name="album">
        <option disabled :value="-1" hidden>выберите альбом</option>
        <option v-for="album in albumList" :key="album.id" :value="album.id">
          {{ album.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
const { modelValue } = defineProps({
  modelValue: { type: Number, required: false, default: -1 },
});
const emit = defineEmits(["update:modelValue"]);
const selectedAlbumId = ref(modelValue);
watch(selectedAlbumId, (selected) => {
  emit("update:modelValue", selected);
});
const {
  data: albumList,
  pending: pendingAlbum,
  error: errorGetAlbum,
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
#album_select {
  height: 35px;
  font-size: 18px;
  border: 1px solid #ccc;
  margin: 0;
  text-transform: none;
  word-wrap: normal;
  opacity: 1;
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--main-bg-color);
  background-image: var(--accent-color), var(--accent-color, none);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.album_select-wrapper {
  margin-bottom: 25px;
}
label {
  display: block;
}
</style>
