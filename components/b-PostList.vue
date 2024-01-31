<template>
  <div v-if="pendingGetUserList && pendingGetPostList">loading...</div>
  <div v-else>
    <SelectAuthor v-model="selectedUserid" :user-list="userMap" />
    <l-Post :post-list="filteredPosts"></l-Post>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
import type Post from "@/types/post";
import type User from "@/types/user";

const selectedUserid = ref(-1);
const filteredPosts = computed(() => {
  const pMap = postList.value
    ?.filter(
      (el) =>
        selectedUserid.value === -1 || el.userId === +selectedUserid.value,
    )
    .reduce((pMap, el) => {
      el.userName = userMap.value?.get(el.userId)?.username;
      pMap.set(el.id, el);
      return pMap;
    }, new Map<number, Post>());
  return pMap;
});
const userMap = computed(() =>
  userList.value?.reduce((uMap, el) => {
    uMap.set(el.id, el);
    return uMap;
  }, new Map<number, User>()),
);
const {
  data: postList,
  pending: pendingGetPostList,
  // error: errorGetPostList,
  // execute: getPostList,
} = await useAsyncData<Post[], FetchError>(
  "postList",
  async () => {
    return await $fetch<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      method: "get",
    });
  },
  {
    server: false,
  },
);
// async function reloadPosts() {
//   await getPostList();
// }
const {
  data: userList,
  pending: pendingGetUserList,
  // error: errorGetPostList,
  // execute: getUserList,
} = await useAsyncData<User[], FetchError>(
  "userList",
  async () => {
    return await $fetch<User[]>("https://jsonplaceholder.typicode.com/users", {
      method: "get",
    });
  },
  {
    server: false,
  },
);
// async function reloadUsers() {
//   await getUserList();
// }
</script>

<!-- <style scoped>

</style> -->
