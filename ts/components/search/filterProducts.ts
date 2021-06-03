import { removeFromStorage, searchKey } from "../../utils/storage.js";
import renderProducts from "../products/renderProducts.js";
import { Product } from "../../settings/interfaces";

export default function filterProducts(
  products: Product[],
  searchValue: string
) {
  const container = document.querySelector(
    ".products-container"
  ) as HTMLDivElement;

  const filteredProducts = products.filter((product: Product) => {
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    if (title.includes(searchValue) || description.includes(searchValue)) {
      return product;
    }
  });

  removeFromStorage(searchKey);

  if (filteredProducts && filteredProducts.length) {
    container.innerHTML = "";
    renderProducts(filteredProducts);
  } else {
    renderProducts(filteredProducts);
  }
}
