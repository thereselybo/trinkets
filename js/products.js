var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const title = `${document.title} - `;
    const desc = "Browse our many lovely products";
    const img = `${hostedUrl}/img/logo-horizontal.svg`;
    const url = location.href;
    updateHead(title, desc, img, url);
})();
export default function getProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const pathname = location.pathname;
        if (pathname === "/products.html") {
            const searchValue = getFromStorage(searchKey);
            const productsUrl = `${baseUrl}/products`;
            const messageContainer = "#products .message-container";
            try {
                const response = yield fetch(productsUrl);
                const products = yield response.json();
                if (searchValue && searchValue.length) {
                    filterProducts(products, searchValue);
                }
                else {
                    renderProducts(products);
                    searchProducts();
                }
                handleFaves();
                addToCart();
            }
            catch (error) {
                displayMessage(messageContainer, "danger", error);
            }
        }
    });
}
getProducts();
