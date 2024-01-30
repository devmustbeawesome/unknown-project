<template>
  <UserBlock :id="id"></UserBlock>
</template>

<script setup lang="ts">
definePageMeta({
  validate: (route) => {
    return /^\d+$/.test(route.params.id as string);
  },
});
const route = useRoute();
const id = route.params.id as string;
</script>

<!-- <style scoped>

</style> -->
