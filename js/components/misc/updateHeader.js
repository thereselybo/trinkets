var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import displayMessage from "../common/displayMessage.js";
import { checkUrlProtocol } from "../../utils/validation.js";
import { getFromStorage, tokenKey } from "../../utils/storage.js";
import { baseUrl } from "../../settings/variables.js";
export default function updateHeader(caption, image, button, buttonText) {
    return __awaiter(this, void 0, void 0, function* () {
        image = checkUrlProtocol(image);
        const messageContainer = "#edit-header .message-container";
        const headerUrl = `${baseUrl}/home`;
        const token = getFromStorage(tokenKey);
        const data = JSON.stringify({
            hero_caption: caption,
            hero_banner: image,
            hero_button: button,
            hero_button_text: buttonText,
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
            const response = yield fetch(headerUrl, options);
            const updatedHeader = yield response.json();
            if (updatedHeader.updated_at) {
                displayMessage(messageContainer, "success", "Successfully updated header");
            }
            if (updatedHeader.error) {
                displayMessage(messageContainer, "danger", updatedHeader.error);
            }
        }
        catch (error) {
            displayMessage(messageContainer, "danger", error);
        }
    });
}
