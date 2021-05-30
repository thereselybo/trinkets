import createMenu from "./components/common/createMenu.js";
import displayMessage from "./components/common/displayMessage.js";
import renderFeaturedProducts from "./components/products/renderFeaturedProducts.js";
import { baseUrl, hostedUrl } from "./settings/variables.js";
import updateHead from "./components/common/updateHead.js";

(function () {
  const title: string = "";
  const desc: string = "An home decor online store";
  const img: string = `${hostedUrl}/img/logo-horizontal.svg`;
  const url: string = location.href;
  updateHead(title, desc, img, url);
})();

createMenu();
renderFeaturedProducts();

(async function () {
  const container = document.querySelector(".header-content") as HTMLDivElement;
  const headerUrl: string = `${baseUrl}/home`;
  const caption = document.querySelector(
    "#header-caption"
  ) as HTMLHeadingElement;
  const image = document.querySelector(".header-img") as HTMLDivElement;
  const button = document.querySelector("#header-button") as HTMLAnchorElement;

  try {
    const response: Response = await fetch(headerUrl);
    const header = await response.json();

    caption.innerHTML = header.hero_caption;
    button.href = `./${header.hero_button}.html`;
    button.innerHTML = header.hero_button_text;
    image.style.backgroundImage = `url("${header.hero_banner}")`;
  } catch (error) {
    displayMessage(container, "warning", error);
  }
})();
