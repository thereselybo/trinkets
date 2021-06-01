var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { baseUrl } from "../../settings/variables.js";
import initCarousel from "../misc/carousel.js";
import displayMessage from "../common/displayMessage.js";
import { checkIfAdmin, getFromStorage, favesKey } from "../../utils/storage.js";
import findProductSpecs from "./findProductSpecs.js";
import handleFaves from "../favorites/handleFaves.js";
import addToCart from "../cart/addToCart.js";
const admin = checkIfAdmin();
export default function renderFeaturedProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const messageContainer = "#featured .message-container";
        const productsUrl = `${baseUrl}/products`;
        try {
            const response = yield fetch(productsUrl);
            const products = yield response.json();
            renderFeatures(products);
            initCarousel();
        }
        catch (error) {
            displayMessage(messageContainer, "danger", error);
        }
    });
}
function renderFeatures(products) {
    const featuredSection = document.querySelector("#featured");
    const featuredContainer = document.querySelector(".featured-container");
    featuredContainer.innerHTML = "";
    let glideSlides = "";
    // create array with only featured products
    let featuredProducts = [];
    products.forEach((product) => {
        if (product.featured) {
            featuredProducts.push(product);
        }
    });
    // depending on how many featured products, create and render appropriate html
    if (featuredProducts && featuredProducts.length > 3) {
        featuredProducts.forEach((featuredProduct) => {
            const product = findProductSpecs(featuredProduct);
            const title = product.title;
            const price = product.price;
            const id = product.id;
            const image = product.productImg;
            const faves = getFromStorage(favesKey);
            const isAlreadyFave = faves.find((fave) => fave.id.toString() === id.toString());
            let faveClass = "";
            if (isAlreadyFave) {
                faveClass = "isFavorite";
            }
            if (product.featured) {
                let button = `
            <a href="./product.html?id=${id}"
              class="btn btn-primary btn-lg btn-block py-3 mt-auto"
              >Read more</a
            >`;
                if (admin) {
                    button = `
              <a href="./edit.html?id=${id}"
                class="btn btn-primary btn-lg btn-block py-3 mt-auto"
                >Edit<i class="flaticon flaticon-edit pl-2"></i></a
              >`;
                }
                glideSlides += `
            <li class="glide__slide h-auto">
              <div class="card h-100 product-card">
                <div class="embed-responsive embed-responsive-4by3">
                  <a href="./product.html?id=${id}">
                      <div
                      class="embed-responsive-item card-img-top"
                      style="background-image: url('${image}')"
                      >
                      </div>
                  </a>
                  <button class="position-absolute favorite-btn" data-id="${id}" data-title="${title}" data-img="${image}" data-price="${price}">
                    <i class="flaticon flaticon-heart ${faveClass}"></i>
                  </button>
                </div>
                <div class="card-body d-flex flex-column text-center">
                    <div class="h5">${title}</div>
                    <div class="h2">${price} kr</div>
                    ${button}
                </div>
              </div>
            </li>`;
            }
        });
        const glide = `
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides" id="glide-slides">
                      ${glideSlides}
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button
                    class="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                    >
                    <i class="flaticon flaticon-left-arrow"></i>
                    </button>
                    <button
                    class="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                    >
                    <i class="flaticon flaticon-chevron"></i>
                    </button>
                </div>
            </div>`;
        featuredContainer.innerHTML = glide;
    }
    if (featuredProducts.length <= 3) {
        if (featuredProducts.length < 1) {
            featuredSection.style.display = "none";
        }
        featuredProducts.forEach((featuredProduct) => {
            const product = findProductSpecs(featuredProduct);
            const title = product.title;
            const price = product.price;
            const id = product.id;
            const image = product.productImg;
            const faves = getFromStorage(favesKey);
            const isAlreadyFave = faves.find((fave) => parseInt(fave.id) === id);
            let faveClass = "";
            if (isAlreadyFave) {
                faveClass = "isFavorite";
            }
            let button = `
          <a href="./product.html?id=${id}"
            class="btn btn-primary btn-lg btn-block py-3 mt-auto"
          >Read more</a>`;
            if (admin) {
                button = `
            <a href="./edit.html?id=${id}"
              class="btn btn-primary btn-lg btn-block py-3 mt-auto"
            >Edit<i class="flaticon flaticon-edit pl-2"></i></a>`;
            }
            const card = `
            <div class="col-12 col-md-4 flex-fill mb-4">
              <div class="card h-100 product-card">
                <div class="embed-responsive embed-responsive-4by3">
                  <a href="./product.html?id=${id}">
                    <div
                    class="embed-responsive-item card-img-top"
                    style="background-image: url('${image}')"
                    >
                    </div>
                  </a>
                  <button class="position-absolute favorite-btn" data-id="${id}" data-title="${title}" data-img="${image}" data-price="${price}">
                    <i class="flaticon flaticon-heart ${faveClass}"></i>
                  </button>
                </div>
                <div class="card-body d-flex flex-column text-center">
                    <div class="h5">${title}</div>
                    <div class="h2">${price} kr</div>
                    ${button}
                </div>
              </div>
            </div>`;
            featuredContainer.innerHTML += card;
        });
    }
    handleFaves();
    addToCart();
}
