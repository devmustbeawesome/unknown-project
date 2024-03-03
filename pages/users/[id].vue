<template>
  <div class="container">
    <b-User :id="id" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: (route) => {
    return /^\d+$/.test(route.params.id as string);
  },
  key: (route) => route.fullPath,
});
const route = useRoute();
const id = route.params.id as string;
</script>

<!-- <style scoped>

</style> -->
