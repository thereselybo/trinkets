import displayMessage from "../common/displayMessage.js";
import { checkUrlProtocol } from "../../utils/validation.js";
import { getFromStorage, tokenKey } from "../../utils/storage.js";
import { baseUrl } from "../../settings/variables.js";

export default async function updateHeader(
  caption: string,
  image: string,
  button: string,
  buttonText: string
) {
  image = checkUrlProtocol(image);

  const messageContainer = "#edit-header .message-container";
  const headerUrl = `${baseUrl}/home`;
  const token = getFromStorage(tokenKey);
  const data = JSON.stringify({
    hero_caption: caption,
    hero_banner: image,
    hero_button: button,
    hero_button_text: buttonText,
  });

  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: data,
  };

  try {
    const response = await fetch(headerUrl, options);
    const updatedHeader = await response.json();

    if (updatedHeader.updated_at) {
      displayMessage(
        messageContainer,
        "success",
        "Successfully updated header"
      );
    }
    if (updatedHeader.error) {
      displayMessage(messageContainer, "danger", updatedHeader.error);
    }
  } catch (error) {
    displayMessage(messageContainer, "danger", error);
  }
}
