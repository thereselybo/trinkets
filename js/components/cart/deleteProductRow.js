import { saveToStorage, getFromStorage, cartKey } from "../../utils/storage.js";
import renderCart from "./renderCart.js";
import updateCartIcon from "./addToCart.js";
import updateOrderTotal from "./updateOrderTotal.js";
export default function deleteProductRow() {
    const deleteBtns = document.querySelectorAll(".flaticon-shopping-cart-1");
    deleteBtns.forEach((button) => {
        button.onclick = () => {
            const id = button.dataset.id;
            const cart = getFromStorage(cartKey);
            const newCart = cart.filter((item) => item.id.toString() !== (id === null || id === void 0 ? void 0 : id.toString()));
            saveToStorage(cartKey, newCart);
            // render again without product row
            renderCart();
            updateCartIcon();
            updateOrderTotal();
        };
    });
}
