<template>
  <div id="my_to_do_list">
    <div class="todolist_header">
      <div class="add-wrapper">
        <MyInput
          v-model="toDoInput"
          :placeholder="t('new_task')"
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
          :placeholder="t('search')"
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
const { t } = useI18n({
  useScope: "local",
});

const toDoInput = ref("");
const filterValue = ref("");
const toDoListStorage = ref([] as Task[]);

const addItemToList = () => {
  if (toDoInput.value) {
    const newTask = {
      time: new Date().getTime(),
      subject: toDoInput.value,
      state: "new",
    };
    toDoListStorage.value
      ? toDoListStorage.value.push(newTask)
      : (toDoListStorage.value = [newTask]);
    toDoInput.value = "";
  }
};
const deleteTaskFromList = (id: number) => {
  toDoListStorage.value.splice(
    toDoListStorage.value.findIndex((value: Task) => value.time === id),
    1,
  );
};
const changeTask = (id: number, subject: string) => {
  toDoListStorage.value.find((value: Task) => value.time === id).subject =
    subject;
};
const completeTask = (id: number) => {
  toDoListStorage.value.find((value: Task) => value.time === id).state =
    "completed";
};
onMounted(() => {
  toDoListStorage.value = useStorage("to_do_list", [] as Task[]).value;
});
const filteredList = computed(() =>
  toDoListStorage.value
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
  background-color: var(--content-bg-color);
  padding: 10px 20px;
  border-radius: 5px;
}
.todolist_header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}
.add-wrapper {
  display: flex;
}
.add-to-do-button {
  color: var(--stroke-color);
  width: 34px;
  height: 34px;
  margin-left: 20px;
  border-radius: 50%;
  border: none;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
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
<i18n lang="json">
{
  "en": {
    "new_task": "New task",
    "search": "Search"
  },
  "ru": {
    "new_task": "Новая задача",
    "search": "Поиск"
  }
}
</i18n>
