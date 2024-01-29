<template>
  <ul class="post-list">
    <li v-for="post in postList" :key="post.id">
      <PostItem :post="post"></PostItem>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type Post from "@/types/post";
defineProps({
  postList: { type: Array<Post>, required: true },
});
</script>

<style scoped>
.post-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
