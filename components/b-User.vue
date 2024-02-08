<template>
  <RouterLink class="back" :to="`/users`"
    ><font-awesome-icon :icon="['fas', 'chevron-left']" /> back
  </RouterLink>
  <div v-if="pendingGetUser">loading...</div>
  <div v-else-if="userInfo" class="user-block">
    <div class="user-info">
      <h1>{{ userInfo.name }} ({{ userInfo.username }})</h1>
      <p>
        <font-awesome-icon :icon="['fas', 'envelope']" />
        {{ userInfo.email }}
      </p>
      <p>
        <font-awesome-icon :icon="['fas', 'phone']" />
        {{ userInfo.phone }}
      </p>
      <p>
        <font-awesome-icon :icon="['fas', 'globe']" />
        {{ userInfo.website }}
      </p>
    </div>
    <div v-if="!pendingGetPostList && filteredPosts" class="user-posts">
      <l-Post :post-list="filteredPosts"></l-Post>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
import type User from "@/types/user";
import type Post from "~/types/post";
// const { t } = useI18n({
//   useScope: "local",
// });
const { id } = defineProps({
  id: { type: String, required: true },
});

const {
  data: userInfo,
  pending: pendingGetUser,
  // error: errorGetUser,
  // execute: getUser,
} = await useAsyncData<User, FetchError>(
  "userInfo" + id,
  async () => {
    return await $fetch<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "get",
      },
    );
  },
  {
    lazy: true,
  },
);
const {
  data: postList,
  pending: pendingGetPostList,
  // error: errorGetPostList,
  // execute: getPostList,
} = await useAsyncData<Post[], FetchError>(
  "postList",
  async () => {
    return await $fetch<Post[]>(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`,
      {
        method: "get",
      },
    );
  },
  {
    lazy: true,
  },
);
const filteredPosts = computed(() => {
  const pMap = postList.value?.reduce((pMap, el) => {
    pMap.set(el.id, el);
    return pMap;
  }, new Map<number, Post>());
  return pMap;
});
// async function reloadUsers() {
//   await getUserList();
// }
</script>

<style scoped>
.back {
  text-decoration: none;
  color: var(--accent-color);
}
</style>

<!-- <i18n lang="json">
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
</i18n> -->
