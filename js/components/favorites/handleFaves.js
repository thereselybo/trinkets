import {
  favesKey,
  getFromStorage,
  saveToStorage,
} from "../../utils/storage.js";

export default function handleFaves() {
  const faveBtns = document.querySelectorAll(".favorite-btn");

  faveBtns.forEach((button) => {
    button.onclick = () => {
      const heart = button.querySelector(".flaticon-heart");
      heart.classList.toggle("isFavorite");

      const title = button.dataset.title;
      const id = button.dataset.id;
      const price = button.dataset.price;
      const image = button.dataset.img;

      const currentFaves = getFromStorage(favesKey);

      const alreadyFave = currentFaves.find((fave) => fave.id === id);

      if (!alreadyFave) {
        const product = { title, id, price, image };
        currentFaves.push(product);
        saveToStorage(favesKey, currentFaves);
      } else {
        const newFaves = currentFaves.filter((fave) => fave.id !== id);
        saveToStorage(favesKey, newFaves);
      }
    };
  });
}
