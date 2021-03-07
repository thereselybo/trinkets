import createMenu from "./components/common/createMenu.js";
import updateHead from "./components/common/updateHead.js";
import { hostedUrl } from "./settings/variables.js";

createMenu();

(function () {
  const title = "Categories - ";
  const desc = "Browse our categories and products";
  const img = `${hostedUrl}/img/logo-horizontal.svg`;
  const url = location.href;
  updateHead(title, desc, img, url);
})();
