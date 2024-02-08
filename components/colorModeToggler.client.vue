<template>
  <div>
    <ul class="footer_color-mode">
      <li v-for="{ mode, icon } of modeList" :key="mode">
        <font-awesome-icon
          :icon="['fas', icon]"
          @click="$colorMode.preference = mode"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
const modeList = [
  { mode: "system", icon: "computer" },
  { mode: "light", icon: "sun" },
  { mode: "dark", icon: "moon" },
  { mode: "sepia", icon: "mug-hot" },
];
const $colorMode = useColorMode();
</script>

<style>
.footer_color-mode {
  font-size: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer_color-mode li {
  display: inline-block;
  padding: 5px;
}
</style>
