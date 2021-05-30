import { cartKey, getFromStorage } from "../../utils/storage.js";
export default function updateOrderTotal() {
    const products = getFromStorage(cartKey);
    const container = document.querySelector("#orderTotal");
    let orderTotal = 0;
    products.forEach((product) => {
        const price = product.price;
        const qty = product.qty;
        const totalPrice = parseFloat(price) * qty;
        orderTotal += totalPrice;
        container.innerHTML = `${orderTotal} kr`;
    });
    if (!products.length) {
        container.innerHTML = "0 kr";
    }
}
