<template>
  <UserList :user-list="userMap"></UserList>
</template>

<script setup lang="ts">
import type { FetchError } from "ofetch";
import type User from "@/types/user";
// const { t } = useI18n({
//   useScope: "local",
// });
const userMap = computed(() =>
  userList.value?.reduce((uMap, el) => {
    uMap.set(el.id, el);
    return uMap;
  }, new Map<number, User>()),
);

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

<!-- <style scoped>

</style> -->

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
