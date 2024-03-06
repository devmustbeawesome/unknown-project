<script lang="ts" setup>
const props = defineProps({
  triesLeft: { type: Number, required: true, default: 5 },
});
</script>

<template>
  <div class="hangman_picture-container">
    <svg height="250" width="200" class="figure-container">
      <!-- Rod -->
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      <!-- Head -->
      <circle v-show="props.triesLeft < 6" cx="140" cy="70" r="20" />
      <!-- Body -->
      <line v-show="props.triesLeft < 5" x1="140" y1="90" x2="140" y2="150" />
      <!-- Arms -->
      <line v-show="props.triesLeft < 4" x1="140" y1="120" x2="120" y2="100" />
      <line v-show="props.triesLeft < 3" x1="140" y1="120" x2="160" y2="100" />
      <!-- Legs -->
      <line v-show="props.triesLeft < 2" x1="140" y1="150" x2="120" y2="180" />
      <line v-show="props.triesLeft < 1" x1="140" y1="150" x2="160" y2="180" />
    </svg>
  </div>
</template>

<style scoped>
.hangman_picture-container {
  fill: transparent;
  stroke: var(--accent-color);
  stroke-width: 4px;
  stroke-linecap: round;
}
</style>
