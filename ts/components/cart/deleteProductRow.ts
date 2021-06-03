import { saveToStorage, getFromStorage, cartKey } from "../../utils/storage.js";
import renderCart from "./renderCart.js";
import updateCartIcon from "./addToCart.js";
import updateOrderTotal from "./updateOrderTotal.js";
import { Product } from "../../settings/interfaces.js";

export default function deleteProductRow() {
  const deleteBtns = document.querySelectorAll(".flaticon-shopping-cart-1") as NodeListOf<HTMLSpanElement>;

  deleteBtns.forEach((button) => {
    button.onclick = () => {
      const id = button.dataset.id;
      const cart = getFromStorage(cartKey);
      const newCart = cart.filter((item: Product) => item.id.toString() !== id?.toString());
      saveToStorage(cartKey, newCart);
      
      // render again without product row
      renderCart();
      updateCartIcon();
      updateOrderTotal();
    };
  });
}
