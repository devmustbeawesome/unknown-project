<template>
  <div class="post-item">
    <div class="post_header">
      <!-- <RouterLink class="router-link" :to="`posts/${post.id}`">{{
        post.title
      }}</RouterLink> -->
      <RouterLink class="router-link" :to="`/posts`">
        {{ post.title }}
      </RouterLink>
      <RouterLink
        v-if="post.userName"
        class="router-link"
        :to="`/users/${post.userId}`"
      >
        <font-awesome-icon :icon="['fas', 'user']" /> {{ post.userName }}
      </RouterLink>
    </div>
    <div class="post_body">
      {{ post.body }}
    </div>
    <div class="post_footer"></div>
  </div>
</template>

<script setup lang="ts">
import type Post from "@/types/post";
defineProps({
  post: { type: Object as PropType<Post>, required: true },
});
</script>

<style scoped>
.post-item {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 5px 15px;
  margin-bottom: 10px;
}
.post_header .router-link {
  text-decoration: none;
  color: var(--accent-color);
}
.post_header {
  display: flex;
  justify-content: space-between;
}
</style>
