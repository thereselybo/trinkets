var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import { baseUrl } from "./settings/variables.js";
import { checkIfAdmin } from "./utils/storage.js";
import validateElement, { validateLink } from "./utils/validation.js";
import updateHeader from "./components/misc/updateHeader.js";
import updateHead from "./components/common/updateHead.js";
createMenu();
const admin = checkIfAdmin();
if (!admin) {
    location.href = "./";
}
const form = document.querySelector("#edit-header");
const caption = document.querySelector("#caption");
const imageLink = document.querySelector("#image-link");
const buttonLink = document.querySelector("#button-link");
const buttonText = document.querySelector("#button-text");
const messageContainer = document.querySelector("#edit-header .fetch-error");
const spinner = document.querySelector("#spinner");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const headerUrl = `${baseUrl}/home`;
        try {
            const response = yield fetch(headerUrl);
            const header = yield response.json();
            caption.value = header.hero_caption;
            imageLink.value = header.hero_banner;
            buttonLink.value = header.hero_button;
            buttonText.value = header.hero_button_text;
            const title = "Edit header - ";
            const desc = "Edit the header of the main page";
            const img = header.hero_banner;
            const url = location.href;
            updateHead(title, desc, img, url);
        }
        catch (error) {
            displayMessage(messageContainer, "danger, error");
        }
        finally {
            spinner.style.display = "none";
            form.style.display = "block";
        }
    });
})();
form.onsubmit = (e) => {
    e.preventDefault();
    const captionValue = caption.value.trim();
    const imageLinkValue = imageLink.value.trim();
    const buttonLinkValue = buttonLink.value.trim();
    const buttonTextValue = buttonText.value.trim();
    if (validateElement(caption, 3) &&
        validateLink(imageLink) &&
        validateElement(buttonLink, 3) &&
        validateElement(buttonText, 3)) {
        updateHeader(captionValue, imageLinkValue, buttonLinkValue, buttonTextValue);
    }
};
