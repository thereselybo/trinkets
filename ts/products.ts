import { baseUrl, hostedUrl } from "./settings/variables.js";
import renderProducts from "./components/products/renderProducts.js";
import displayMessage from "./components/common/displayMessage.js";
import handleFaves from "./components/favorites/handleFaves.js";
import addToCart from "./components/cart/addToCart.js";
import searchProducts from "./components/search/searchProducts.js";
import { getFromStorage, searchKey } from "./utils/storage.js";
import filterProducts from "./components/search/filterProducts.js";
import updateHead from "./components/common/updateHead.js";

(function () {
  const title: string = `${document.title} - `;
  const desc: string = "Browse our many lovely products";
  const img: string = `${hostedUrl}/img/logo-horizontal.svg`;
  const url: string = location.href;
  updateHead(title, desc, img, url);
})();

export default async function getProducts() {
  const pathname: string = location.pathname;
  if (pathname === "/products.html") {
    const searchValue = getFromStorage(searchKey);
    const productsUrl: string = `${baseUrl}/products`;
    const messageContainer: string = "#products .message-container";

    try {
      const response: Response = await fetch(productsUrl);
      const products = await response.json();

      if (searchValue && searchValue.length) {
        filterProducts(products, searchValue);
      } else {
        renderProducts(products);
        searchProducts();
      }
      handleFaves();
      addToCart();
    } catch (error) {
      displayMessage(messageContainer, "danger", error);
    }
  }
}

getProducts();
