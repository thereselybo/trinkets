import { removeFromStorage, tokenKey, userKey } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";

export default function logout() {
  const logoutBtn = document.querySelector("#logout") as HTMLButtonElement;
  const messageContainer = "#accountModal .message-container";

  if (logoutBtn) {
    logoutBtn.onclick = () => {
      removeFromStorage(userKey);
      removeFromStorage(tokenKey);
      displayMessage(messageContainer, "light", "Thank you come again");
      setTimeout(() => {
        location.reload();
      }, 2000);
    };
  }
}
