<template>
  <div class="container">
    <h1>{{ t("title") }}</h1>
    <b-MyToDoList />
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
    "title": "MyToDoList"
  },
  "ru": {
    "title": "Список задач"
  }
}
</i18n>
