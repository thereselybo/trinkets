import createMenu from "../common/createMenu.js";
import { favesKey, getFromStorage } from "../../utils/storage.js";
import removeFromFaves from "./removeFromFaves.js";
import displayMessage from "../common/displayMessage.js";
import handleFaves from "./handleFaves.js";
import updateHead from "../common/updateHead.js";
import addToCart from "../cart/addToCart.js";
import { hostedUrl } from "../../settings/variables.js";

createMenu();

(function () {
  const title = "Favorites";
  const desc = "Which product is your favorite?";
  const img = `${hostedUrl}/img/logo-horizontal.svg`;
  const url = location.href;
  updateHead(title, desc, img, url);
})();

export default function renderFaves() {
  const container = document.querySelector(".products-container");
  const messageContainer = "#products .message-container";
  const faves = getFromStorage(favesKey);

  container.innerHTML = "";

  if (faves && faves.length) {
    faves.forEach((fave) => {
      const title = fave.title;
      const image = fave.image;
      const price = fave.price;
      const id = fave.id;

      const card = `
        <div class="col-6 col-md-4 flex-fill mb-4">
            <div class="card h-100 product-card">
                <div class="embed-responsive embed-responsive-1by1">
                    <a href="./product.html?id=${id}">
                        <div
                            class="embed-responsive-item card-img-top"
                            style="background-image: url('${image}')"
                            >
                        </div>
                    </a>
                    <button class="position-absolute favorite-btn" data-id="${id}">
                        <i class="flaticon flaticon-heart isFavorite"></i>
                    </button>
                </div>
            <div
                class="card-body d-flex flex-column text-left text-md-center"
            >
                <div class="h5">${title}</div>
                <div class="h2 mb-0 mb-md-2">${price} kr</div>
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
                ></a>
            </div>
            </div>
        </div>`;

      container.innerHTML += card;
    });
  } else {
    displayMessage(
      messageContainer,
      "light",
      "You have not added any products to favorites yet"
    );
  }
  handleFaves();
  removeFromFaves();
  addToCart();
}

renderFaves();
