import displayMessage from "../common/displayMessage.js";
import { baseUrl } from "../../settings/variables.js";
import { saveToStorage, tokenKey, userKey } from "../../utils/storage.js";

export default async function handleLogin(username: string, password: string) {
  const messageContainer = "#accountModal .message-container";
  const authUrl = `${baseUrl}/auth/local`;
  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(authUrl, options);
    const json = await response.json();

    if (json.user) {
      saveToStorage(tokenKey, json.jwt);
      saveToStorage(userKey, json.user);
      displayMessage(messageContainer, "success", "Successfully logged in");
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
    if (json.error) {
      displayMessage(messageContainer, "danger", "You shall not pass");
    }
  } catch (error) {
    displayMessage(messageContainer, "danger", error);
  }
}
