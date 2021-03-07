import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import renderFeaturedProducts from "./components/products/renderFeaturedProducts.js";
import { baseUrl } from "./settings/variables.js";
import updateHead from "./components/common/updateHead.js";

(function () {
  const title = "";
  const desc = "An home decor online store";
  const img = "https://lybo.dev/semproj2/img/logo-horizontal.svg";
  const url = location.href;
  updateHead(title, desc, img, url);
})();

createMenu();
renderFeaturedProducts();

(async function () {
  const container = document.querySelector(".header-content");
  const headerUrl = `${baseUrl}/home`;
  const caption = document.querySelector("#header-caption");
  const image = document.querySelector(".header-img");
  const button = document.querySelector("#header-button");

  try {
    const response = await fetch(headerUrl);
    const header = await response.json();

    caption.innerHTML = header.hero_caption;
    button.href = `./${header.hero_button}.html`;
    button.innerHTML = header.hero_button_text;
    image.style.backgroundImage = `url("${header.hero_banner}")`;
  } catch (error) {
    displayMessage(container, "warning", error);
  }
})();
