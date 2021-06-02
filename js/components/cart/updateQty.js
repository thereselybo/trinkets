import updateCartIcon from "./addToCart.js";
import updateOrderTotal from "./updateOrderTotal.js";
import renderCart from "./renderCart.js";
import { cartKey, getFromStorage, saveToStorage } from "../../utils/storage.js";
export default function updateQty() {
    const subtractBtns = document.querySelectorAll(".subtract");
    const addBtns = document.querySelectorAll(".add");
    subtractBtns.forEach((button) => {
        button.onclick = () => {
            // console.log("removing an item");
            const parent = button.parentNode;
            const qty = parent.querySelector(".quantity");
            const id = button.dataset.id;
            const cart = getFromStorage(cartKey);
            const itemInCart = cart.find((product) => product.id.toString() === (id === null || id === void 0 ? void 0 : id.toString()));
            itemInCart.qty--;
            if (itemInCart.qty < 1) {
                const newCart = cart.filter((item) => item.id.toString() !== (id === null || id === void 0 ? void 0 : id.toString()));
                saveToStorage(cartKey, newCart);
                // render again without product row
                renderCart();
            }
            else {
                qty.innerText = itemInCart.qty;
                saveToStorage(cartKey, cart);
            }
            updateCartIcon();
            updateOrderTotal();
        };
    });
    addBtns.forEach((button) => {
        button.onclick = () => {
            console.log("adding another item");
            const parent = button.parentNode;
            const qty = parent.querySelector(".quantity");
            const id = button.dataset.id;
            const cart = getFromStorage(cartKey);
            const itemInCart = cart.find((product) => product.id.toString() === (id === null || id === void 0 ? void 0 : id.toString()));
            itemInCart.qty++;
            qty.innerText = itemInCart.qty;
            saveToStorage(cartKey, cart);
            updateCartIcon();
            updateOrderTotal();
        };
    });
    updateOrderTotal();
}
