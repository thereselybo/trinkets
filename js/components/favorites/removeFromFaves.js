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
            const newFaves = currentFaves.filter((fave) => parseInt(fave.id) !== parseInt(id));
            saveToStorage(favesKey, newFaves);
            renderFaves();
        };
    });
}
