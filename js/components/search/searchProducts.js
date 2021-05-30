import { saveToStorage, searchKey } from "../../utils/storage.js";
import getProducts from "../../products.js";
export default function searchProducts() {
    const searchForms = document.querySelectorAll(".product-search-form");
    searchForms.forEach((form) => {
        form.onsubmit = (e) => {
            e.preventDefault();
            const searchField = form.querySelector(".product-search");
            const searchValue = searchField.value.trim().toLowerCase();
            saveToStorage(searchKey, searchValue);
            const pathname = location.pathname;
            if (pathname !== "/products.html") {
                location.href = "./products.html";
            }
            else {
                getProducts();
            }
        };
    });
}
