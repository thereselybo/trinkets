var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { baseUrl } from "../../settings/variables.js";
import displayMessage from "../common/displayMessage.js";
import createMenu from "../common/createMenu.js";
import renderProductDetails from "./renderProductDetails.js";
createMenu();
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if (!id) {
    document.location.href = "./404.html";
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const messageContainer = "#product .message-container";
        const productUrl = `${baseUrl}/products/${id}`;
        try {
            const response = yield fetch(productUrl);
            const product = yield response.json();
            document.title = product.title;
            renderProductDetails(product);
        }
        catch (error) {
            displayMessage(messageContainer, "danger", error);
        }
    });
})();
