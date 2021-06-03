import validateElement, { validateEmail } from "../../utils/validation.js";

export default function addShippingInfo() {
  const form = document.querySelector("#form-shipping-info") as HTMLFormElement;
  const firstName = document.querySelector("#first-name") as HTMLInputElement;
  const lastName = document.querySelector("#last-name") as HTMLInputElement;
  const email = document.querySelector("#email") as HTMLInputElement;
  const address = document.querySelector("#address") as HTMLInputElement;
  const zipCode = document.querySelector("#zip-code") as HTMLInputElement;
  const city = document.querySelector("#city") as HTMLInputElement;

  form.onsubmit = (e) => {
    e.preventDefault();

    if (
      validateElement(firstName, 3) &&
      validateElement(lastName, 3) &&
      validateEmail(email) &&
      validateElement(address, 5) &&
      validateElement(zipCode, 4) &&
      validateElement(city, 3)
    ) {
      const modal: any = $("#checkoutModal");
      modal.modal("show");
    }
  };
}
