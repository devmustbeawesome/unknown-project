<template>
  <MySelect v-model="lang" :list="langList">
    <template #default="{ spanValue }">
      <span>
        {{ spanValue }}
      </span>
    </template>
  </MySelect>
</template>

<script setup>
const lang = ref("en");
const langList = new Map([
  ["en", "English"],
  ["ru", "Russian"],
]);
</script>

<!-- <style scoped></style> -->
