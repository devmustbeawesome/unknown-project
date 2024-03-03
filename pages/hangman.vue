<script lang="ts" setup>
import type { FetchError } from "ofetch";

const triesLeft = ref(6);
const gameEnded = ref(false);
const usedLetters: Ref<Array<string>> = ref([]);
const {
  data: word,
  // pending: pendingGetWord,
  // error: errorGetUser,
  execute: getWord,
} = await useAsyncData<Array<string>, FetchError>(
  "hangmanGetWord",
  async () => {
    return await (
      await $fetch<String>("/api/hangman", {
        method: "get",
      })
    ).split("");
  },
  {
    lazy: true,
  },
);
watch(
  usedLetters,
  () => {
    if (compareArrays(word.value ?? [], usedLetters.value)) {
      Notification.addNotification({
        message: "you won",
        type: "success",
        position: "bottom-center",
        time: 0,
        id: "",
        onClick: () => refreshGame(),
      });
      gameEnded.value = true;
      // refreshGame();
    }
  },
  { deep: true },
);
watch(
  triesLeft,
  () => {
    if (triesLeft.value <= 0) {
      triesLeft.value = 0;
      Notification.addNotification({
        message: "you lose (the word was " + word.value?.join("") + ") ",
        type: "error",
        position: "bottom-center",
        time: 0,
        id: "",
        onClick: () => refreshGame(),
      });
      gameEnded.value = true;

      // refreshGame();
    }
  },
  { deep: true },
);
const keyEventHandler = (e: KeyboardEvent) => {
  if (gameEnded.value) {
    return;
  }
  const charCode = e.key.charCodeAt(0);
  if (charCode >= 1040 && charCode <= 1103) {
    const eKey = e.key.toLowerCase();
    if (!usedLetters.value.includes(eKey)) {
      usedLetters.value.push(eKey);
    }
    if (!word.value?.includes(eKey)) {
      triesLeft.value--;
    }
  }
};
const compareArrays = (a: Array<string>, b: Array<string>) => {
  for (let i = 0, length = a.length; i < length; i++) {
    if (!b.includes(a[i])) {
      return false;
    }
  }
  return true;
};
const refreshGame = () => {
  gameEnded.value = false;
  triesLeft.value = 6;
  usedLetters.value = [];
  getWord();
};
onMounted(() => {
  document.addEventListener("keypress", keyEventHandler);
});
onUnmounted(() => {
  document.removeEventListener("keypress", keyEventHandler);
});
const Notification = useNotification();
</script>

<template>
  <div class="hangman-game-container">
    <div class="game_header">
      <h1>Hangman</h1>
      <p>Tries left {{ triesLeft }}</p>
    </div>
    <div class="game_body">
      <div class="game_body-left">
        <HangmanSvg :tries-left="triesLeft" />
      </div>
      <div class="game_body-right">
        <div class="used_letters">
          Использованные буквы:<br />
          {{ usedLetters.join(" ") }}
        </div>
        <div class="word_wrapper">
          <div v-for="(letter, index) in word" :key="index" class="word_letter">
            <span v-if="usedLetters.includes(letter)">{{ letter }}</span>
            <span v-else> &nbsp;</span>
          </div>
        </div>
      </div>
    </div>
    <button v-if="gameEnded" @click="refreshGame">Refresh</button>
    <p v-if="gameEnded">Game ended</p>

    <NotificationsList />
  </div>
</template>

<style scoped>
.hangman-game-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

.game_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

.game_body {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}

.game_body-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
}

.word_wrapper {
  display: flex;
}

.word_letter {
  border-bottom: 2px solid var(--accent-color);
  padding-left: 5px;
  padding-right: 5px;
  margin: 5px;
}
</style>