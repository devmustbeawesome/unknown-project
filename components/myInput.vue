<template>
  <input
    v-if="type !== 'textarea'"
    ref="input"
    class="input-group"
    :type="newType"
    :value="computedValue"
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
    @input="onInput"
    @change="onChange"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: { type: String, required: true, default: "" },
  type: { type: String, required: false, default: "text" },
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
