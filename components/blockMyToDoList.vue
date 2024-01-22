<template>
  <div id="my_to_do_list">
    <div class="todolist_header">
      <MyInput v-model="toDoInput"></MyInput>
      <button type="button" class="add-to-do-button" @click="addItemToList">
        Add
      </button>
    </div>
    <ToDoList :list="filteredList" />
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";

const toDoInput = ref("");
let toDoListStorage = useStorage("to_do_list", [] as String[]).value;

const addItemToList = () => {
  if (toDoInput.value) {
    toDoListStorage
      ? toDoListStorage.push(toDoInput.value)
      : (toDoListStorage = [toDoInput.value]);
    toDoInput.value = "";
  }
};
const filteredList = computed(() =>
  toDoListStorage?.filter((el) =>
    toDoInput.value ? el.includes(toDoInput.value) : el,
  ),
);

// onMounted(() => {});

// console.log("test");
</script>

<style scoped>
#my_to_do_list {
  position: relative;
  background-color: grey;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
}
.todolist_header {
  display: flex;
}
.add-to-do-button {
  margin-left: 20px;
  border-radius: 6px;
  border: 1px solid black;
}
</style>
