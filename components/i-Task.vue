<template>
  <li class="task-item">
    <div v-if="state == 'new'" class="task-row" :class="state">
      <div>
        <input
          class="task-input"
          block
          type="text"
          placeholder="Пустая задача"
          :value="computedValue"
          @change="(e: Event) => (computedValue = e.target?.value)"
        />
      </div>
      <div class="task-control">
        <button v-if="state == 'new'" @click="completeTask">
          <font-awesome-icon :icon="['fas', 'check']" />
        </button>
        <button v-if="state == 'new'" @click="focusInput">
          <font-awesome-icon :icon="['fas', 'pencil']" />
        </button>
        <button @click="deleteTask">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
    <div v-else class="task-row completed-task" :class="state">
      <div>
        <span>
          <font-awesome-icon :icon="['fas', 'check']" />
          {{ computedValue }}
        </span>
      </div>
      <div class="task-control">
        <button @click="deleteTask">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const { modelValue, state, id } = defineProps({
  modelValue: { type: String, required: false, default: "" },
  state: { type: String, required: false, default: "" },
  id: { type: Number, required: false, default: 0 },
});
const emit = defineEmits([
  "update:deleteTask",
  "update:changeTask",
  "update:completeTask",
]);
const inputValue = ref(modelValue);
const computedValue = computed({
  get: () => inputValue.value,
  set: (value) => {
    inputValue.value = value;
    emit("update:changeTask", id, inputValue.value);
  },
});
const deleteTask = () => {
  emit("update:deleteTask", id);
};
// const changeTask = (e: Event) => {
//   emit("update:changeTask", id, e.target?.value);
// };
const completeTask = () => {
  emit("update:completeTask", id);
};
const focusInput = (e: Event) => {
  e.target?.closest(".task-row").querySelector(".task-input").focus();
  // document.querySelectorAll(".task-input")[id].focus();
};
watch(
  () => modelValue,
  (value) => {
    inputValue.value = value;
  },
);

// const emit = defineEmits(["update:modelValue", "reload"]);
// const itemPart = ref(props.modelValue);
</script>
<style>
.task-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding: 5px;
  align-items: center;
}
.task-item {
  list-style-type: none;
}
.task-control {
  display: flex;
}
.task-control button {
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
.task-input {
  width: 100%;
  background: inherit;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
.task-input:focus {
  background: inherit;
  border: none;
  outline: none;
  cursor: text;
}
.completed-task {
  background: inherit;
  color: var(--stroke-color);
  text-decoration-line: underline;
  text-decoration-color: green;
  text-underline-offset: 3px;
}
@media (max-width: 600px) {
  .task-control {
    flex-direction: column;
  }
  .task-control button {
    margin: 0;
  }
}
</style>
