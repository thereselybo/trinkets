import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import { baseUrl, hostedUrl } from "./settings/variables.js";
import { checkIfAdmin, getFromStorage, tokenKey } from "./utils/storage.js";
import validateElement, {
  checkUrlProtocol,
  validateLink,
} from "./utils/validation.js";
import toggleFeaturedSwitch from "./components/misc/toggleFeaturedSwitch.js";
import updateHead from "./components/common/updateHead.js";
import { Product } from "./settings/interfaces.js";

createMenu();
toggleFeaturedSwitch();

(function () {
  const title = "Add product - ";
  const desc = "Add new product to inventory";
  const img = `${hostedUrl}/img/logo-horizontal.svg`;
  const url = location.href;
  updateHead(title, desc, img, url);
})();

const admin = checkIfAdmin();
if (!admin) {
  location.href = "./";
}

const form = document.querySelector("#add-product") as HTMLFormElement;
const title = document.querySelector("#product-name") as HTMLInputElement;
const price = document.querySelector("#product-price") as HTMLInputElement;
const category = document.querySelector("#category") as HTMLInputElement;
const intro = document.querySelector("#intro") as HTMLTextAreaElement;
const description = document.querySelector(
  "#description"
) as HTMLTextAreaElement;
const details = document.querySelector("#details") as HTMLTextAreaElement;
const imgLink = document.querySelector("#image-link") as HTMLInputElement;
const featured = document.querySelector("#featured") as HTMLInputElement;

const messageContainer: string = "#add-product .message-container";

form.onsubmit = (e) => {
  e.preventDefault();

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const categoryValue = category.value.trim();
  const introValue = intro.value.trim();
  const descValue = description.value.trim();
  const detailsValue = details.value.trim();
  const imgValue = imgLink.value.trim();

  let featuredValue = false;
  if (featured.classList.contains("checked")) {
    featuredValue = true;
  }

  if (
    validateElement(title, 3) &&
    validateElement(price, 1) &&
    validateElement(category, 3) &&
    validateElement(intro, 3) &&
    validateElement(description, 3) &&
    validateElement(details, 3) &&
    validateLink(imgLink)
  ) {
    addProduct(
      titleValue,
      priceValue,
      categoryValue,
      introValue,
      descValue,
      detailsValue,
      imgValue,
      featuredValue
    );
  }
};

async function addProduct(
  title: string,
  price: string,
  category: string,
  intro: string,
  description: string,
  details: string,
  image: string,
  featured: boolean
) {
  image = checkUrlProtocol(image);

  const productsUrl = `${baseUrl}/products`;
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

  const token = getFromStorage(tokenKey);

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: data,
  };

  try {
    const response = await fetch(productsUrl, options);
    const product = await response.json();

    if (product.created_at) {
      displayMessage(messageContainer, "success", "Successfully added product");
      setTimeout(() => {
        location.href = "./";
      }, 2000);
    }
    if (product.error) {
      displayMessage(messageContainer, "danger", product.error);
    }
  } catch (error) {
    displayMessage(messageContainer, "danger", error);
  }
}
