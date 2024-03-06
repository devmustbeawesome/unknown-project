import type Notification from "../types/notification";
const useNotification = () => {
  const notificationList = useState(
    "notificationList",
    () => [] as Array<Notification>,
  );
  const addNotification = (notification: Notification) => {
    const id = Date.now().toString();
    notificationList.value.push({
      id,
      message: notification.message,
      position: notification.position ?? "bottom-right",
      type: notification.type ?? "info",
      time: notification.time,
      onClick: notification.onClick,
    });
    if (notification.time !== 0) setTimeout(() => removeNotification(id), 3000);
    return id;
  };
  const getNotificationList = () => notificationList.value;
  const removeNotification = (id: string) => {
    notificationList.value = notificationList.value.filter(
      (notification) => notification.id !== id,
    );
  };

  return {
    notificationList,
    addNotification,
    getNotificationList,
    removeNotification,
  };
};
export default useNotification;
