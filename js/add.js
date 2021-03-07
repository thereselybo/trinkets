import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/variables.js";
import { checkIfAdmin, getFromStorage, tokenKey } from "./utils/storage.js";
import validateElement, {
  checkUrlProtocol,
  validateLink,
} from "./utils/validation.js";
import toggleFeaturedSwitch from "./components/misc/toggleFeaturedSwitch.js";
import updateHead from "./components/common/updateHead.js";

createMenu();
toggleFeaturedSwitch();

(function () {
  const title = "Add product - ";
  const desc = "Add new product to inventory";
  const img = "https://lybo.dev/semproj2/img/logo-horizontal.svg";
  const url = location.href;
  updateHead(title, desc, img, url);
})();

const admin = checkIfAdmin();
if (!admin) {
  location.href = "./";
}

const form = document.querySelector("#add-product");
const title = document.querySelector("#product-name");
const price = document.querySelector("#product-price");
const category = document.querySelector("#category");
const intro = document.querySelector("#intro");
const description = document.querySelector("#description");
const details = document.querySelector("#details");
const imgLink = document.querySelector("#image-link");
const featured = document.querySelector("#featured");
const messageContainer = "#add-product .message-container";

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
  title,
  price,
  category,
  intro,
  description,
  details,
  image,
  featured
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
      displayMessage(messageContainer, "danger", json.error);
    }
  } catch (error) {
    displayMessage(messageContainer, "danger", error);
  }
}
