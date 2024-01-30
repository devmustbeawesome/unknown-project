<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <UserListBlock />
  </div>
</template>
<script setup>
const { t } = useI18n({
  useScope: "local",
});
</script>
<!-- <style>
  
  </style> -->
<i18n lang="json">
{
  "en": {
    "title": "Users"
  },
  "ru": {
    "title": "Пользователи"
  }
}
</i18n>
