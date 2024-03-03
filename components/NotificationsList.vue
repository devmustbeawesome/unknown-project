<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts" setup>
const Notification = useNotification();
const positions = ref([
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
]);
</script>

<template>
  <TransitionGroup
    v-for="position in positions"
    :key="position"
    name="list"
    tag="div"
    :class="`notifications_wrapper notifications_${position}`"
  >
    <div
      v-for="notification in Notification.getNotificationList().filter(
        (el) => el.position === position,
      )"
      :key="notification.id"
      :class="`notification ${notification.type}`"
      @click="
        () => {
          Notification.removeNotification(notification.id);
          notification.onClick?.();
        }
      "
    >
      {{ notification.message }}
    </div>
  </TransitionGroup>
</template>

<style scoped>
.notifications_wrapper {
  position: absolute;
  background: none;
  padding: 10px;
  display: flex;
}
.notifications_bottom-right {
  right: 0;
  bottom: 0;
  flex-direction: column;
}
.notifications_bottom-left {
  left: 0;
  bottom: 0;
  flex-direction: column;
}
.notifications_top-right {
  right: 0;
  top: 0;
  flex-direction: column-reverse;
}
.notifications_top-left {
  left: 0;
  top: 0;
  flex-direction: column-reverse;
}
.notifications_bottom-center {
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  bottom: 0;
}
.notification {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  margin-bottom: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
}
.notification.success {
  background-color: chartreuse;
  color: black;
}
.notification.warn {
  background-color: yellow;
  color: black;
}
.notification.error {
  background-color: red;
  color: white;
}
.notification.info {
  background-color: var(--accent-color);
  color: black;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
