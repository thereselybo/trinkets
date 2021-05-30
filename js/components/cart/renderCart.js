import createMenu from "../common/createMenu.js";
import { cartKey, getFromStorage } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";
import { updateCartIcon } from "./addToCart.js";
import updateQty from "./updateQty.js";
import addShippingInfo from "./addShippingInfo.js";
import deleteProductRow from "./deleteProductRow.js";
createMenu();
export default function renderCart() {
    const container = document.querySelector(".products-container");
    const messageContainer = "#items-in-cart .message-container";
    container.innerHTML = "";
    const cartItems = getFromStorage(cartKey);
    if (cartItems && cartItems.length) {
        cartItems.forEach((product) => {
            const title = product.title;
            const image = product.image;
            const price = product.price;
            const id = product.id;
            const qty = product.qty;
            const card = `
        <div class="col-4 col-md-3 py-3 product-card" data-id="${id}">
          <a href="./product.html?id=${id}"> 
            <div
            class="product-image"
            style="background-image: url('${image}')">
          </a>
        </div>
        </div>
        <div class="col-4 pl-0 border-top py-3">
          <a href="./product.html?id=${id}"> 
            <h3>${title}</h3>
          </a>
          <p class="d-none d-lg-block">#${id}</p>
          <p class="d-block d-lg-none">${price} kr</p>
        </div>
        <div class="col-4 col-md-2 pl-0 cart-qty text-nowrap text-right text-md-left border-top py-3">
          <button class="items-button subtract" data-id="${id}">
            <i class="flaticon flaticon-left-arrow"></i>
          </button>
          <span class="mx-2 quantity">${qty}</span>
          <button class="items-button add" data-id="${id}">
            <i class="flaticon flaticon-chevron"></i>
          </button>
        </div>
        <div class="col-2 d-none d-md-flex border-top pt-3">${price} kr</div>
        <div class="col-1 d-none d-md-flex py-3">
          <i class="flaticon flaticon-shopping-cart-1" data-id="${id}"></i>
        </div>`;
            container.innerHTML += card;
        });
    }
    else {
        displayMessage(messageContainer, "secondary", "You have not added any products to the cart yet");
    }
    updateCartIcon();
    updateQty();
    deleteProductRow();
    addShippingInfo();
}
renderCart();
