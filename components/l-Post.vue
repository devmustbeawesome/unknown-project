<template>
  <ul class="post-list">
    <li v-for="[index, post] in postList" :key="index">
      <i-Post :post="post" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type Post from "@/types/post";
defineProps({
  postList: { type: Map<number, Post>, required: true },
});
</script>

<style scoped>
.post-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
