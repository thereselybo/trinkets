import validateElement, { validateEmail } from "../../utils/validation.js";
export default function addShippingInfo() {
    const form = document.querySelector("#form-shipping-info");
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");
    const zipCode = document.querySelector("#zip-code");
    const city = document.querySelector("#city");
    form.onsubmit = (e) => {
        e.preventDefault();
        if (validateElement(firstName, 3) &&
            validateElement(lastName, 3) &&
            validateEmail(email) &&
            validateElement(address, 5) &&
            validateElement(zipCode, 4) &&
            validateElement(city, 3)) {
            const modal = $("#checkoutModal");
            modal.modal("show");
        }
    };
}
