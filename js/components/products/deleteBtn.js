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
import displayMessage from "../common/displayMessage.js";
export default function deleteBtn(id) {
    const button = document.querySelector("#confirmDelete");
    const messageContainer = "#deleteModal .message-container";
    // if clicking the confirm button, delete product
    button.onclick = function () {
        return __awaiter(this, void 0, void 0, function* () {
            const productUrl = `${baseUrl}/products/${id}`;
            const token = getFromStorage(tokenKey);
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = yield fetch(productUrl, options);
                displayMessage(messageContainer, "success", "Product was successfully deleted");
                setTimeout(() => {
                    location.href = "./";
                }, 2000);
            }
            catch (error) {
                displayMessage(messageContainer, "danger", error);
            }
        });
    };
}
