<template>
  <Html :lang="locale">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<script lang="ts" setup>
const locale = useState<string>("locale.i18n");
</script>
