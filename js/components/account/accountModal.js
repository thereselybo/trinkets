import login from "./login.js";
import { checkIfAdmin, checkIfUser } from "../../utils/storage.js";
import logout from "./logout.js";
let container = "";
let adminHtml = "";
let userHtml = "";
export default function accountModal() {
    const modal = `
    <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="accountModalLabel">Login</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="login-form" class="needs-validation" novalidate>
                        <div class="form-group">
                            <label for="username">Username/email</label>
                            <input type="text" class="form-control" id="username" required>
                            <div class="invalid-feedback">
                                Please enter your username or email address
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" required>
                            <div class="invalid-feedback">
                                Invalid password. Your password must be 8 characters long or more
                            </div>
                        </div>
                        <div class="message-container"></div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" form="login-form" id="submit-button" class="btn btn-primary btn-block py-2 my-2">Login</button>
                    <a href="javascript:void(0);" id="register-link" class="text-muted mx-auto">
                        New? Register here
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    container = document.querySelector(".modal-container");
    container.innerHTML = modal;
    const registerLink = document.querySelector("#register-link");
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");
    const modalFooter = document.querySelector(".modal-footer");
    if (registerLink) {
        registerLink.onclick = () => {
            modalTitle.innerText = "Register";
            modalBody.innerHTML = `
            <form id="register-form" class="needs-validation" novalidate>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" required>
                    <div class="invalid-feedback">
                        Invalid username. Your username must be 5 characters or more
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" required>
                    <div class="invalid-feedback">
                        Invalid email address
                    </div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" required>
                    <div class="invalid-feedback">
                        Invalid password. Your password must be 8 characters long or more
                    </div>
                </div>
                <div class="message-container"></div>
            </form>`;
            modalFooter.innerHTML = `
            <button type="submit" id="submit-button" form="register-form" class="btn btn-primary btn-block py-2 my-2">Register</button>
            `;
        };
    }
    adminHtml = `
    <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="accountModalLabel">Hello, admin</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="./add.html" class="nav-link">
                                <i class="flaticon flaticon-plus"></i>
                                Add new product
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="./edit-header.html" class="nav-link">
                                <i class="flaticon flaticon-edit"></i>
                                Edit header
                            </a>
                        </li>
                    </ul>
                    <div class="message-container"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>`;
    userHtml = `
    <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="accountModalLabel">Hello, user</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="./favorites.html" class="nav-link">
                                <i class="flaticon flaticon-heart"></i>
                                Favorites
                            </a>
                        </li>
                    </ul>
                    <div class="message-container"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>`;
    login();
    updateModal();
}
export function updateModal() {
    const admin = checkIfAdmin();
    const user = checkIfUser();
    if (admin) {
        container.innerHTML = adminHtml;
    }
    logout();
}
