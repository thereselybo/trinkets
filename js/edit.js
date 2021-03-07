import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import { baseUrl, productImgPlaceholder } from "./settings/variables.js";
import { checkIfAdmin } from "./utils/storage.js";
import toggleFeaturedSwitch from "./components/misc/toggleFeaturedSwitch.js";
import validateElement, { validateLink } from "./utils/validation.js";
import updateProduct from "./components/products/updateProduct.js";
import deleteBtn from "./components/products/deleteBtn.js";
import updateHead from "./components/common/updateHead.js";

createMenu();

(function () {
  const title = "Edit product - ";
  const desc = "Edit an already existing product";
  const img = "https://lybo.dev/semproj2/img/logo-horizontal.svg";
  const url = location.href;
  updateHead(title, desc, img, url);
})();

const admin = checkIfAdmin();
if (!admin) {
  location.href = "./";
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "./404.html";
}

const form = document.querySelector("#edit-product");
const title = document.querySelector("#product-name");
const price = document.querySelector("#product-price");
const category = document.querySelector("#category");
const intro = document.querySelector("#intro");
const description = document.querySelector("#description");
const details = document.querySelector("#details");
const imgLink = document.querySelector("#image-link");
const featured = document.querySelector("#featured");
const idInput = document.querySelector("#id");

const messageContainer = "#edit-product .fetch-error";
const spinner = document.querySelector("#spinner");

let featuredStatus = false;

(async function () {
  const productUrl = `${baseUrl}/products`;

  try {
    const response = await fetch(productUrl);
    const products = await response.json();

    renderEditForm(products);
    deleteBtn(id);
  } catch (error) {
    displayMessage(messageContainer, "danger, error");
  } finally {
    spinner.style.display = "none";
    form.style.display = "block";
  }
})();

function renderEditForm(products) {
  //checks if product exists in database
  const productExists = products.filter(
    (product) => product.id === parseInt(id)
  );

  if (productExists && productExists.length) {
    const product = productExists[0];

    title.value = product.title;
    price.value = product.price;
    category.value = product.category;
    intro.value = product.introduction;
    description.value = product.description;
    details.value = product.details;
    idInput.value = product.id;

    const productImgUrl = product.image_url;
    const imageObject = product.image;

    let productImg = productImgPlaceholder;
    let fallbackProductImgUrl = "";

    if (imageObject) {
      fallbackProductImgUrl = `${baseUrl}${product.image.formats.medium.url}`;
    }

    if (productImgUrl) {
      productImg = productImgUrl;
    } else if (imageObject) {
      if (fallbackProductImgUrl) {
        productImg = fallbackProductImgUrl;
      }
    }

    imgLink.value = productImg;

    if (product.featured) {
      featured.classList.add("checked");
      featuredStatus = true;
      product.featured = featuredStatus;
    } else {
      if (featured.classList.contains("checked")) {
        featured.classList.remove("checked");
        featuredStatus = false;
        product.featured = featuredStatus;
      }
    }

    toggleFeaturedSwitch();
  } else {
    document.location.href = "./404.html";
  }
}

form.onsubmit = (e) => {
  e.preventDefault();

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const categoryValue = category.value.trim();
  const introValue = intro.value.trim();
  const descriptionValue = description.value.trim();
  const detailsValue = details.value.trim();
  const imgLinkValue = imgLink.value.trim();
  const featuredValue = toggleFeaturedSwitch();

  if (
    validateElement(title, 3) &&
    validateElement(price, 1) &&
    validateElement(category, 1) &&
    validateElement(intro, 3) &&
    validateElement(description, 3) &&
    validateElement(details, 3) &&
    validateLink(imgLink)
  ) {
    updateProduct(
      titleValue,
      priceValue,
      categoryValue,
      introValue,
      descriptionValue,
      detailsValue,
      imgLinkValue,
      featuredValue,
      id
    );
  }
};
