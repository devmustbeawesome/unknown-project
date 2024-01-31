<template>
  <ul class="user-list">
    <li v-for="[index, user] in userList" :key="index">
      <i-User :user="user"></i-User>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type User from "@/types/user";
defineProps({
  userList: { type: Map<number, User>, required: true },
});
</script>

<style scoped>
.user-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
