<template>
  <div class="posts_select-wrapper">
    <label for="posts_select-user">{{ t("authors") }}</label>
    <select id="posts_select-user" v-model="selectedUserid" name="user">
      <option value="-1">{{ t("all") }}</option>
      <option v-for="[id, user] in userList" :key="id" :value="id">
        {{ user.username }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type User from "@/types/user";
const { t } = useI18n({
  useScope: "local",
});
const { modelValue } = defineProps({
  userList: {
    type: Map<number, User>,
    required: true,
    default: new Map<number, User>(),
  },
  modelValue: { type: Number, required: false, default: -1 },
});
const emit = defineEmits(["update:modelValue"]);
const selectedUserid = ref(modelValue);
watch(selectedUserid, (selected) => {
  emit("update:modelValue", selected);
});
</script>
<style scoped>
#posts_select-user {
  /* width: 140px; */
  height: 35px;
  padding: 5px 35px 5px 5px;
  font-size: 18px;
  border: 2px solid #ccc;
}
.posts_select-wrapper {
  margin-bottom: 25px;
}
label {
  display: block;
}
</style>
<i18n lang="json">
{
  "en": {
    "all": "All",
    "authors": "Authors"
  },
  "ru": {
    "all": "Все",
    "authors": "Авторы"
  }
}
</i18n>
