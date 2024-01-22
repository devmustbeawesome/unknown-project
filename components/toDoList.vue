<template>
  <div>
    <div v-for="(value, index) in list" :key="index">
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { list } = defineProps({
  list: { type: Array<String>, required: false, default: () => [] },
  modelValue: { type: String, required: false, default: "" },
});

// const emit = defineEmits(["update:modelValue", "reload"]);
// const itemPart = ref(props.modelValue);
</script>
