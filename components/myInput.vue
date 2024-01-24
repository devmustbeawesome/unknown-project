<template>
  <input
    v-if="type !== 'textarea'"
    ref="input"
    class="input-group"
    :type="newType"
    :value="computedValue"
    :placeholder="placeholder"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
    @focus="onFocus"
  />
  <textarea
    v-else
    ref="textarea"
    class="input-group"
    :value="newType"
    :placeholder="placeholder"
    @input="onInput"
    @change="onChange"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: { type: String, required: true, default: "" },
  type: { type: String, required: false, default: "text" },
  placeholder: { type: String, required: false, default: "" },
});
const emit = defineEmits(["update:modelValue"]);
const newValue = ref(props.modelValue);
const computedValue = computed({
  get: () => newValue.value,
  set: (value) => {
    newValue.value = value;
    emit("update:modelValue", value);
  },
});
const newType = ref(props.type);

watch(
  () => props.modelValue,
  (value) => {
    newValue.value = value;
  },
);
// watch(() => newValue, (value) => {
//     emit('update:modelValue', value)
// })
watch(
  () => props.type,
  (value) => {
    newType.value = value;
  },
);

function onInput(event) {
  updateValue(event.target.value);
}
function onChange(event) {
  updateValue(event.target.value);
}
function updateValue(value) {
  computedValue.value = value;
  // !this.isValid && this.checkHtml5Validity()
}
</script>
<style>
.input-group {
  margin: 0;
  font-family: inherit;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  /* width: calc(100% - 1.5rem); */
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 5px;
}
.input-group[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  width: 17px;
  height: 16px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
  margin-right: 2px;
  cursor: pointer;
}
</style>
