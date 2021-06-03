import { baseUrl } from "../../settings/variables.js";
import displayMessage from "../common/displayMessage.js";
import createMenu from "../common/createMenu.js";
import renderProductDetails from "./renderProductDetails.js";

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "./404.html";
}

(async function () {
  const messageContainer = "#product .message-container";
  const productUrl = `${baseUrl}/products/${id}`;
  try {
    const response = await fetch(productUrl);
    const product = await response.json();

    document.title = product.title;

    renderProductDetails(product);
  } catch (error) {
    displayMessage(messageContainer, "danger", error);
  }
})();
