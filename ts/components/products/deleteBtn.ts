import { baseUrl } from "../../settings/variables.js";
import { getFromStorage, tokenKey } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";

export default function deleteBtn(id: string | null): void {
  const button = document.querySelector("#confirmDelete") as HTMLButtonElement;
  const messageContainer = "#deleteModal .message-container";

  // if clicking the confirm button, delete product
  button.onclick = async function () {
    const productUrl = `${baseUrl}/products/${id}`;
    const token = getFromStorage(tokenKey);
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(productUrl, options);

      displayMessage(
        messageContainer,
        "success",
        "Product was successfully deleted"
      );
      setTimeout(() => {
        location.href = "./";
      }, 2000);
    } catch (error) {
      displayMessage(messageContainer, "danger", error);
    }
  };
}
