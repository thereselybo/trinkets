import { saveToStorage, searchKey } from "../../utils/storage.js";
import getProducts from "../../products.js";

export default function searchProducts() {
  const searchForms = document.querySelectorAll(
    ".product-search-form"
  ) as NodeListOf<HTMLFormElement>;

  searchForms.forEach((form) => {
    form.onsubmit = (e) => {
      e.preventDefault();
      const searchField = form.querySelector(
        ".product-search"
      ) as HTMLInputElement;
      const searchValue: string = searchField.value.trim().toLowerCase();

      saveToStorage(searchKey, searchValue);
      const pathname = location.pathname;

      if (pathname !== "/products.html") {
        location.href = "./products.html";
      } else {
        getProducts();
      }
    };
  });
}
