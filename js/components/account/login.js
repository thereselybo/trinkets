import handleLogin from "./handleLogin.js";
import validateElement from "../../utils/validation.js";

export default function login() {
  const loginForm = document.querySelector("#login-form");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");

  loginForm.onsubmit = (e) => {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (validateElement(username, 5) && validateElement(password, 8)) {
      loginForm.classList.add("was-validated");
      handleLogin(usernameValue, passwordValue);
    }
  };
}
