import { baseUrl } from "../../settings/variables.js";
import { getFromStorage, tokenKey } from "../../utils/storage.js";
import { checkUrlProtocol } from "../../utils/validation.js";
import displayMessage from "../common/displayMessage.js";

export default async function updateProduct(
  title,
  price,
  category,
  intro,
  description,
  details,
  image,
  featured,
  id
) {
  image = checkUrlProtocol(image);

  const messageContainer = "#edit-product .message-container";

  const productUrl = `${baseUrl}/products/${id}`;
  const token = getFromStorage(tokenKey);
  const data = JSON.stringify({
    title: title,
    price: price,
    category: category,
    introduction: intro,
    description: description,
    details: details,
    image_url: image,
    featured: featured,
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
    const response = await fetch(productUrl, options);
    const updatedProduct = await response.json();

    if (updatedProduct.updated_at) {
      displayMessage(
        messageContainer,
        "success",
        "Successfully updated product"
      );
    }
    if (updatedProduct.error) {
      displayMessage(messageContainer, "danger", updatedProduct.error);
    }
  } catch (error) {
    displayMessage(messageContainer, "danger", error);
  }
}
