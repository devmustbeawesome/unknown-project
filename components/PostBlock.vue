<template>
  <PostList :post-list="filteredPosts"></PostList>
</template>

<script setup lang="ts">
// https://jsonplaceholder.typicode.com/posts/1/comments
import type { FetchError } from "ofetch";
import type Post from "@/types/post";
const filteredPosts = computed(() => {
  return postList.value || [];
});
const {
  data: postList,
  // pending: pendingGetPostList,
  // error: errorGetPostList,
  execute: getBookList,
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
async function reloadPosts() {
  await getBookList();
}
// const {
//   data: userList,
//   // pending: pendingGetPostList,
//   // error: errorGetPostList,
//   execute: getUserList,
// } = await useAsyncData<any, FetchError>(
//   "userList",
//   async () => {
//     return await $fetch<any>("https://jsonplaceholder.typicode.com/users", {
//       method: "get",
//     });
//   },
//   {
//     server: false,
//   },
// );
// async function reloadUsers() {
//   await getUserList();
// }
onMounted(() => {
  reloadPosts();
  // reloadUsers();
});
</script>

<!-- <style scoped>
  
  </style> -->
