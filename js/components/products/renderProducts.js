import { checkIfAdmin } from "../../utils/storage.js";
import findProductSpecs from "./findProductSpecs.js";
import { getFromStorage, favesKey } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";
import selectCategory from "./selectCategory.js";
const admin = checkIfAdmin();
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const category = params.get("category");
export default function renderProducts(products) {
    const container = document.querySelector(".products-container");
    const messageContainer = document.querySelector("#products .message-container");
    let productsToRender = [];
    selectCategory();
    if (category) {
        const categoryProducts = products.filter((product) => product.category.includes(category));
        productsToRender = categoryProducts;
    }
    else {
        productsToRender = products;
    }
    container.innerHTML = "";
    messageContainer.innerHTML = "";
    if (productsToRender && productsToRender.length) {
        productsToRender.forEach((currentProduct) => {
            const product = findProductSpecs(currentProduct);
            const title = product.title;
            const price = product.price;
            const id = product.id;
            const image = product.productImg;
            const faves = getFromStorage(favesKey);
            const isAlreadyFave = faves.find((fave) => parseInt(fave.id) === id);
            let faveClass = "";
            if (isAlreadyFave) {
                faveClass = "isFavorite";
            }
            let button = `
        <a
          href="javascript:void(0);"
          class="btn btn-primary btn-block mt-auto py-2 d-none d-md-block addToCart"
          data-id="${id}" data-title="${title}" data-price="${price}" data-img="${image}" 
        >
          Add to cart
          <i class="flaticon flaticon-shopping-cart-2"></i>
        </a>
        <a
          href="javascript:void(0);"
          class="mobile-button btn d-block d-md-none position-absolute addToCart"
          data-id="${id}" data-title="${title}" data-price="${price}" data-img="${image}" 
        ><i class="flaticon flaticon-shopping-cart-2"></i
        ></a>`;
            if (admin) {
                button = `
          <a href="./edit.html?id=${id}"
            class="btn btn-primary btn-block mt-auto py-2 d-none d-md-block"
          >
            Edit
            <i class="flaticon flaticon-edit"></i>
          </a>
          <a href="./edit.html?id=${id}"
            class="mobile-button btn d-block d-md-none position-absolute"
          ><i class="flaticon flaticon-edit"></i></i
          ></a>`;
            }
            container.innerHTML += `
        <div class="col-6 col-md-4 flex-fill mb-4">
          <div class="card product-card h-100">
            <div class="embed-responsive embed-responsive-1by1">
              <a href="./product.html?id=${id}">
                <div
                  class="embed-responsive-item card-img-top"
                  style="background-image: url('${image}')"
                >
                </div>
              </a>
              <button class="position-absolute favorite-btn" data-id="${id}" data-title="${title}" data-img="${image}" data-price="${price}">
                <i class="flaticon flaticon-heart ${faveClass}"></i>
              </button>
            </div>
            <div
              class="card-body d-flex flex-column text-left text-md-center"
            >
              <div class="h5">${title}</div>
              <div class="h2 mb-0 mb-md-2">${price} kr</div>
              ${button}
            </div>
          </div>
        </div>`;
        });
    }
    else {
        displayMessage(messageContainer, "warning", "No products match your search");
    }
}
