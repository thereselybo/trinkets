import { Product } from "../../settings/interfaces.js";
import {
  getFromStorage,
  saveToStorage,
  favesKey,
} from "../../utils/storage.js";
import renderFaves from "./renderFaves.js";

export default function removeFromFaves() {
  const faveBtns = document.querySelectorAll(
    ".favorite-btn"
  ) as NodeListOf<HTMLElement>;

  faveBtns.forEach((button) => {
    button.onclick = () => {
      const heart = button.querySelector(".flaticon-heart") as HTMLSpanElement;
      heart.classList.toggle("isFavorite");

      const id = button.dataset.id;
      const currentFaves = getFromStorage(favesKey);
      const newFaves = currentFaves.filter(
        (fave: Product) => fave.id.toString() !== id?.toString()
      );

      saveToStorage(favesKey, newFaves);
      renderFaves();
    };
  });
}
