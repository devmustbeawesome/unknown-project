<script lang="ts" setup>
defineProps({
  disabledKeys: {
    type: Array<string>,
    default: () => [],
  },
  accentKeys: {
    type: Array<string>,
    default: () => [],
  },
});
const keys = [
  ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
  ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
  ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ё"],
];
const onKey = (key: string) => {
  const event = new KeyboardEvent("keypress", { key });
  document.dispatchEvent(event);
};
</script>

<template>
  <div class="key_board">
    <div v-for="(row, index) in keys" :key="index" class="key_board_row">
      <div
        v-for="(key, keyIndex) in row"
        :key="keyIndex"
        class="key_board_key"
        :class="{
          'accent-key': accentKeys.includes(key),
          'disabled-key': disabledKeys.includes(key),
        }"
        @click="onKey(key)"
      >
        {{ key }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.key_board {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: calc(100% - 40px);
}
.key_board_row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1px;
  margin-bottom: 5px;
}

.key_board_key.accent-key {
  background-color: var(--accent-color);
  cursor: default;
}
.key_board_key.disabled-key {
  background-color: grey;
  cursor: default;
}
@media screen and (min-width: 600px) {
  .key_board_key {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    margin: 1px;
  }
}
@media screen and (max-width: 600px) {
  .key_board {
    margin: 10px;
    width: calc(100% - 20px);
  }
  .game_body {
    flex-direction: column;
    margin-bottom: 10px;
  }
  .key_board_key {
    border: 1px solid black;
    text-align: center;
    cursor: pointer;
    margin: 1px;
  }
  .key_board_row {
    margin-bottom: 5px;
  }
}
@media screen and (max-width: 420px) {
  .key_board {
    margin: 5px;
    width: calc(100% - 10px);
  }
}
</style>
