import updateCartIcon from "./addToCart.js";
import updateOrderTotal from "./updateOrderTotal.js";
import renderCart from "./renderCart.js";
import { cartKey, getFromStorage, saveToStorage } from "../../utils/storage.js";
import { Product } from "../../settings/interfaces.js";

export default function updateQty() {
  const subtractBtns = document.querySelectorAll(
    ".subtract"
  ) as NodeListOf<HTMLButtonElement>;
  const addBtns = document.querySelectorAll(
    ".add"
  ) as NodeListOf<HTMLButtonElement>;

  subtractBtns.forEach((button) => {
    button.onclick = () => {
      const parent = button.parentNode as HTMLDivElement;
      const qty = parent.querySelector(".quantity") as HTMLSpanElement;
      const id = button.dataset.id;

      const cart = getFromStorage(cartKey);
      const itemInCart = cart.find(
        (product: Product) => product.id.toString() === id?.toString()
      );

      itemInCart.qty--;

      if (itemInCart.qty < 1) {
        const newCart = cart.filter(
          (item: Product) => item.id.toString() !== id?.toString()
        );
        saveToStorage(cartKey, newCart);

        // render again without product row
        renderCart();
      } else {
        qty.innerText = itemInCart.qty;
        saveToStorage(cartKey, cart);
      }
      updateCartIcon();
      updateOrderTotal();
    };
  });

  addBtns.forEach((button) => {
    button.onclick = () => {
      const parent = button.parentNode as HTMLDivElement;
      const qty = parent.querySelector(".quantity") as HTMLSpanElement;
      const id = button.dataset.id;
      const cart = getFromStorage(cartKey);
      const itemInCart = cart.find(
        (product: Product) => product.id.toString() === id?.toString()
      );

      itemInCart.qty++;
      qty.innerText = itemInCart.qty;

      saveToStorage(cartKey, cart);
      updateCartIcon();
      updateOrderTotal();
    };
  });
  updateOrderTotal();
}
