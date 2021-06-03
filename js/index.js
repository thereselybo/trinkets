var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import renderFeaturedProducts from "./components/products/renderFeaturedProducts.js";
import { baseUrl, hostedUrl } from "./settings/variables.js";
import updateHead from "./components/common/updateHead.js";
(function () {
    const title = "";
    const desc = "An home decor online store";
    const img = `${hostedUrl}/img/logo-horizontal.svg`;
    const url = location.href;
    updateHead(title, desc, img, url);
})();
createMenu();
renderFeaturedProducts();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.querySelector(".header-content");
        const headerUrl = `${baseUrl}/home`;
        const caption = document.querySelector("#header-caption");
        const image = document.querySelector(".header-img");
        const button = document.querySelector("#header-button");
        try {
            const response = yield fetch(headerUrl);
            const header = yield response.json();
            caption.innerHTML = header.hero_caption;
            button.href = `./${header.hero_button}`;
            button.innerHTML = header.hero_button_text;
            image.style.backgroundImage = `url("${header.hero_banner}")`;
        }
        catch (error) {
            displayMessage(container, "warning", error);
        }
    });
})();
