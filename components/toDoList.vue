<template>
  <ul class="to-do-list">
    <TaskItem
      v-for="value in list"
      :id="value.time"
      :key="value.time"
      v-model="value.subject"
      :state="value.state"
      @update:delete-task="deleteTask"
      @update:change-task="changeTask"
      @update:complete-task="completeTask"
    >
    </TaskItem>
  </ul>
</template>

<script setup lang="ts">
import type Task from "~/types/task";

const { list } = defineProps({
  list: { type: Array<Task>, required: false, default: () => [] },
  modelValue: { type: String, required: false, default: "" },
});
const emit = defineEmits([
  "update:deleteTask",
  "update:changeTask",
  "update:completeTask",
]);
const deleteTask = (id: number) => {
  emit("update:deleteTask", id);
};
const changeTask = (id: number, subject: string) => {
  emit("update:changeTask", id, subject);
};
const completeTask = (id: number) => {
  emit("update:completeTask", id);
};
</script>
<style>
.to-do-list {
  padding: 0;
}
</style>
