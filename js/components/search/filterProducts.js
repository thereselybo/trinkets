import { removeFromStorage, searchKey } from "../../utils/storage.js";
import renderProducts from "../products/renderProducts.js";
export default function filterProducts(products, searchValue) {
    const container = document.querySelector(".products-container");
    const filteredProducts = products.filter((product) => {
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
    }
    else {
        renderProducts(filteredProducts);
    }
}
