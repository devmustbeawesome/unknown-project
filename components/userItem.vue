<template>
  <div class="user-item">
    <RouterLink class="router-link" :to="`/user/${user.id}`"
      >{{ user.username }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type User from "@/types/user";
defineProps({
  user: { type: Object as PropType<User>, required: true },
});
</script>

<style scoped>
.user-item {
  display: block;
}
.user-item .router-link {
  display: block;
  text-decoration: none;
  color: var(--accent-color);
  padding: 10px;
  border-right: 1px solid var(--border-color);
}
.user-item .router-link:hover {
  -moz-text-shadow: 0 0 10px var(--accent-color);
  -webkit-text-shadow: 0 0 10px var(--accent-color);
  text-shadow: 0 0 10px var(--accent-color);
}
</style>
