<template>
  <div id="my_to_do_list">
    <div class="todolist_header">
      <div class="add-wrapper">
        <MyInput
          v-model="toDoInput"
          placeholder="New task"
          @keyup.enter="addItemToList"
        ></MyInput>
        <div>
          <button type="button" class="add-to-do-button" @click="addItemToList">
            <font-awesome-icon icon="plus" />
          </button>
        </div>
      </div>
      <div class="search-wrapper">
        <MyInput
          v-model="filterValue"
          placeholder="Search"
          type="search"
        ></MyInput>
      </div>
    </div>
    <ToDoList
      :list="filteredList"
      @update:delete-task="deleteTaskFromList"
      @update:change-task="changeTask"
      @update:complete-task="completeTask"
    />
  </div>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import type Task from "@/types/task";

const toDoInput = ref("");
const filterValue = ref("");
let toDoListStorage = useStorage("to_do_list", [] as Task[]).value;

const addItemToList = () => {
  if (toDoInput.value) {
    const newTask = {
      time: new Date().getTime(),
      subject: toDoInput.value,
      state: "new",
    };
    toDoListStorage
      ? toDoListStorage.push(newTask)
      : (toDoListStorage = [newTask]);
    toDoInput.value = "";
  }
};
const deleteTaskFromList = (id: number) => {
  toDoListStorage.splice(
    toDoListStorage.findIndex((value: Task) => value.time === id),
    1,
  );
};
const changeTask = (id: number, subject: string) => {
  toDoListStorage.find((value: Task) => value.time === id).subject = subject;
};
const completeTask = (id: number) => {
  toDoListStorage.find((value: Task) => value.time === id).state = "completed";
};
const filteredList = computed(() =>
  toDoListStorage
    ?.filter((el) =>
      filterValue.value ? el.subject.includes(filterValue.value) : el,
    )
    .sort((a: Task, b: Task) => {
      return (a.state !== "new" && b.state === "new") || a.time < b.time
        ? 1
        : -1;
    }),
);
</script>

<style scoped>
#my_to_do_list {
  position: relative;
  background-color: rgb(22, 22, 22);
  padding: 10px 20px;
  border-radius: 5px;
}
.todolist_header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
.add-wrapper {
  display: flex;
}
.add-to-do-button {
  color: white;
  width: 34px;
  height: 34px;
  margin-left: 20px;
  border-radius: 50%;
  border: none;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
}
@media (max-width: 600px) {
  .search-wrapper {
    display: none;
  }
  #my_to_do_list {
    padding: 10px 1px;
  }
}
</style>
