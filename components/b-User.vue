<template>
  <div class="container">
    <div v-if="pendingGetUser">loading...</div>
    <div v-else-if="userInfo" class="user-block">
      <p>{{ userInfo.name }} ({{ userInfo.username }})</p>
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
  </div>
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
