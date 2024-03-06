export default interface Notification {
  id: string;
  message: string;
  position: string;
  type: string;
  time: number;
  onClick?: () => void;
}
