import accountModal from "../account/accountModal.js";
import { updateCartIcon } from "../cart/addToCart.js";
import searchProducts from "../search/searchProducts.js";
import hoverOverIcons from "./hoverOverIcons.js";

export default function createMenu() {
  const container = document.querySelector(".nav-container");
  const pathname = location.pathname;

  const mobileCategoryNav = `
    <div class="container d-block d-lg-none pb-3">
            <ul class="categories overflow-auto pl-1 pt-2 mb-0 text-nowrap">
                <li class="d-inline">
                <a class="px-2" href="javascript:void(0);"
                    >Sale</a
                >
                </li>
                <li class="d-inline">
                <a
                    class="px-2 active"
                    href="javascript:void(0);"
                    >Christmas</a
                >
                </li>
                <li class="d-inline">
                <a class="px-2" href="javascript:void(0);"
                    >Wall decoration</a
                >
                </li>
                <li class="d-inline">
                <a class="px-2" href="javascript:void(0);"
                    >Textiles</a
                >
                </li>
            </ul>
        </div>`;

  container.innerHTML = `
    <nav class="navbar-light fixed-top">
        <div class="container px-lg-0 flex-column">

            <div class="navbar navbar-expand-lg">
                <a class="navbar-brand d-none d-lg-block" href="./index.html">
                    <img src="./img/logo-horizontal.svg" alt="Logo" width="180px" />
                </a>
                <button
                    class="navbar-toggler px-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="cart-mobile d-lg-none">
                    <a href="./cart.html" class="shopping-cart position-relative" id="cartIcon">
                        <i class="flaticon flaticon-shopping-cart"></i>    
                        <span class="itemsInCart"></span>
                    </a>
                </div>

                <div
                    class="collapse navbar-collapse justify-content-center"
                    id="navbar"
                >
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="./index.html" class="nav-link mx-2 ${
                          pathname === "/index.html" ? "active" : ""
                        }">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="./categories.html" class="nav-link mx-2 ${
                          pathname === "/categories.html" ||
                          pathname === "/products.html" ||
                          pathname === "/product.html"
                            ? "active"
                            : ""
                        }">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link mx-2">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link mx-2">Contact</a>
                    </li>
                    <li class="nav-item d-lg-none">
                        <a href="javascript:void(0);" class="nav-link mx-2" type="button" data-toggle="modal" data-target="#accountModal">Account</a>
                    </li>
                    <li class="nav-item d-lg-none">
                        <a href="./favorites.html" class="nav-link mx-2">Favorites</a>
                    </li>
                    <li class="nav-item d-block d-lg-none">
                        <form class="form-inline my-3 d-lg-none product-search-form">
                        <div class="input-group search-form">
                            <input
                            type="search"
                            class="product-search form-control"
                            placeholder="Search"
                            aria-label="Search"
                            />
                            <div class="input-group-append">
                            <button
                                class="btn my-0 product-search-button"
                                type="submit"
                            >
                                <i class="flaticon flaticon-magnifying-glass-2"></i>
                            </button>
                            </div>
                        </div>
                        </form>
                    </li>
                    </ul>
                </div>

                <div class="d-none d-lg-block" id="nav-icons">
                    <ul class="navbar-nav">
                    <li class="nav-item px-3 flex-column text-center position-relative">
                        <a href="javascript:void(0);" id="search-button">
                            <i class="flaticon flaticon-magnifying-glass-2 nav-icon"></i>
                            <p class="hover-text position-absolute">Search</p>
                        </a>
                    </li>
                    <li class="nav-item px-3 flex-column text-center position-relative">
                        <a href="javascript:void(0);" id="account-button" data-toggle="modal" data-target="#accountModal">
                            <i class="flaticon flaticon-user nav-icon"></i>
                            <p class="hover-text position-absolute">Account</p>
                        </a>
                    </li>
                    <li class="nav-item px-3 flex-column text-center position-relative">
                        <a href="./favorites.html">
                            <i class="flaticon flaticon-heart nav-icon"></i>
                            <p class="hover-text position-absolute">Favorites</p>
                        </a>
                    </li>
                    <li class="nav-item px-3 flex-column text-center position-relative">
                    <a href="./cart.html" class="shopping-cart position-relative" id="cartIcon">
                        <i class="flaticon flaticon-shopping-cart nav-icon"></i>
                        <span class="itemsInCart"></span>
                        <p class="hover-text position-absolute">Cart</p>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>

            <div id="nav-search-desktop">
                <div class="col-5 mx-auto px-0 mb-3">
                    <form class="product-search-form">
                        <div class="input-group search-form">
                            <input
                            type="search"
                            class="product-search form-control"
                            placeholder="Search"
                            aria-label="Search"
                            />
                            <div class="input-group-append">
                            <button
                                class="btn my-0 product-search-button"
                                type="submit"
                            >
                                <i class="flaticon flaticon-magnifying-glass-2"></i>
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

        ${pathname === "/products.html" ? mobileCategoryNav : ""}
    </nav>
    <div class="modal-container"></div>`;

  accountModal();
  toggleSearchField();
  searchProducts();
  updateCartIcon();
  hoverOverIcons();
}

createMenu();

function toggleSearchField() {
  const searchBtn = document.querySelector("#search-button");
  const searchField = document.querySelector("#nav-search-desktop");

  searchBtn.onclick = () => {
    searchField.classList.toggle("active");
  };
}
