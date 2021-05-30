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

(async function () {
  const headerUrl = `${baseUrl}/home`;

  try {
    const response = await fetch(headerUrl);
    const header = await response.json();

    caption.value = header.hero_caption;
    imageLink.value = header.hero_banner;
    buttonLink.value = header.hero_button;
    buttonText.value = header.hero_button_text;

    const title = "Edit header - ";
    const desc = "Edit the header of the main page";
    const img = header.hero_banner;
    const url = location.href;
    updateHead(title, desc, img, url);
  } catch (error) {
    displayMessage(messageContainer, "danger, error");
  } finally {
    spinner.style.display = "none";
    form.style.display = "block";
  }
})();

form.onsubmit = (e) => {
  e.preventDefault();

  const captionValue = caption.value.trim();
  const imageLinkValue = imageLink.value.trim();
  const buttonLinkValue = buttonLink.value.trim();
  const buttonTextValue = buttonText.value.trim();

  if (
    validateElement(caption, 3) &&
    validateLink(imageLink) &&
    validateElement(buttonLink, 3) &&
    validateElement(buttonText, 3)
  ) {
    updateHeader(
      captionValue,
      imageLinkValue,
      buttonLinkValue,
      buttonTextValue
    );
  }
};
