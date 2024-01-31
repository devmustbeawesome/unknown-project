<template>
  <div>{{ userInfo ? JSON.stringify(userInfo) : "404" }}</div>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
import type User from "@/types/user";
// const { t } = useI18n({
//   useScope: "local",
// });
const { id } = defineProps({
  id: { type: String, required: true },
});

const {
  data: userInfo,
  // pending: pendingGetPostList,
  // error: errorGetPostList,
  // execute: getUserList,
} = await useAsyncData<User[], FetchError>(
  "userInfo" + id,
  async () => {
    return await $fetch<User[]>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "get",
      },
    );
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
