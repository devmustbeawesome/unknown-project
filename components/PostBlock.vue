<template>
  <div class="posts_select-wrapper">
    <label for="posts_select-user">{{ t("authors") }}</label>
    <select id="posts_select-user" v-model="selectedUserid" name="user">
      <option value="-1">{{ t("all") }}</option>
      <option v-for="[id, user] in userMap" :key="id" :value="id">
        {{ user.username }}
      </option>
    </select>
  </div>
  <PostList :post-list="filteredPosts"></PostList>
</template>

<script setup lang="ts">
// https://jsonplaceholder.typicode.com/posts/1/comments
import type { FetchError } from "ofetch";
import type Post from "@/types/post";
import type User from "@/types/user";
const { t } = useI18n({
  useScope: "local",
});
const selectedUserid = ref("-1");
const filteredPosts = computed(() => {
  const pMap = postList.value
    ?.filter(
      (el) =>
        selectedUserid.value === "-1" || el.userId === +selectedUserid.value,
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
  // pending: pendingGetPostList,
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
  // pending: pendingGetPostList,
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

<style scoped>
#posts_select-user {
  /* width: 140px; */
  height: 35px;
  padding: 5px 35px 5px 5px;
  font-size: 18px;
  border: 2px solid #ccc;
}
.posts_select-wrapper {
  margin-bottom: 25px;
}
label {
  display: block;
}
</style>
<i18n lang="json">
{
  "en": {
    "all": "All",
    "authors": "Authors"
  },
  "ru": {
    "all": "Все",
    "authors": "Авторы"
  }
}
</i18n>
