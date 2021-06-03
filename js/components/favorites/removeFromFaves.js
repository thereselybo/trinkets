import { getFromStorage, saveToStorage, favesKey, } from "../../utils/storage.js";
import renderFaves from "./renderFaves.js";
export default function removeFromFaves() {
    const faveBtns = document.querySelectorAll(".favorite-btn");
    faveBtns.forEach((button) => {
        button.onclick = () => {
            const heart = button.querySelector(".flaticon-heart");
            heart.classList.toggle("isFavorite");
            const id = button.dataset.id;
            const currentFaves = getFromStorage(favesKey);
            const newFaves = currentFaves.filter((fave) => fave.id.toString() !== (id === null || id === void 0 ? void 0 : id.toString()));
            saveToStorage(favesKey, newFaves);
            renderFaves();
        };
    });
}
