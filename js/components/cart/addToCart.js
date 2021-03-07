import { cartKey, getFromStorage, saveToStorage } from "../../utils/storage.js";

export default function addToCart() {
  const cartBtns = document.querySelectorAll(".addToCart");

  cartBtns.forEach((button) => {
    button.onclick = () => {
      const title = button.dataset.title;
      const id = button.dataset.id;
      const price = button.dataset.price;
      const image = button.dataset.img;
      let qty = 1;

      const cart = getFromStorage(cartKey);
      const product = { title, id, price, image, qty };
      const itemInCart = cart.find((product) => product.id === id);

      if (!itemInCart) {
        cart.push(product);
      } else {
        itemInCart.qty++;
      }

      saveToStorage(cartKey, cart);
      updateCartIcon();
    };
  });
}

export function updateCartIcon() {
  const currentCart = getFromStorage(cartKey);
  let cartQty = 0;
  currentCart.forEach((product) => {
    const productQty = product.qty;
    cartQty += productQty;
  });

  const itemsInCart = document.querySelectorAll(".itemsInCart");

  itemsInCart.forEach((cart) => {
    if (cartQty) {
      cart.style.display = "inline";
      cart.innerText = cartQty;
    } else {
      cart.style.display = "none";
    }
  });
}
