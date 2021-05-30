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
import { getFromStorage, tokenKey } from "../../utils/storage.js";
import { checkUrlProtocol } from "../../utils/validation.js";
import displayMessage from "../common/displayMessage.js";
export default function updateProduct(title, price, category, intro, description, details, image, featured, id) {
    return __awaiter(this, void 0, void 0, function* () {
        image = checkUrlProtocol(image);
        const messageContainer = "#edit-product .message-container";
        const productUrl = `${baseUrl}/products/${id}`;
        const token = getFromStorage(tokenKey);
        const data = JSON.stringify({
            title: title,
            price: price,
            category: category,
            introduction: intro,
            description: description,
            details: details,
            image_url: image,
            featured: featured,
        });
        const options = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: data,
        };
        try {
            const response = yield fetch(productUrl, options);
            const updatedProduct = yield response.json();
            if (updatedProduct.updated_at) {
                displayMessage(messageContainer, "success", "Successfully updated product");
            }
            if (updatedProduct.error) {
                displayMessage(messageContainer, "danger", updatedProduct.error);
            }
        }
        catch (error) {
            displayMessage(messageContainer, "danger", error);
        }
    });
}
