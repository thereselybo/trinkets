import { breakpoint } from "../../settings/variables.js";
import findProductSpecs from "./findProductSpecs.js";
import handleFaves from "../favorites/handleFaves.js";
import addToCart from "../cart/addToCart.js";
import { favesKey, getFromStorage } from "../../utils/storage.js";
import updateHead from "../common/updateHead.js";
import { Product } from "../../settings/interfaces.js";

const container = document.querySelector(
  ".product-container"
) as HTMLDivElement;

let mobileDisplay = "";
let desktopDisplay = "";

export default function renderProductDetails(currentProduct: Product) {
  const product = findProductSpecs(currentProduct);

  const title = product.title;
  const price = product.price;
  const id = product.id;
  const intro = product.intro;
  const description = product.description;
  const details = product.details;
  const image = product.productImg;

  const ogTitle = `${title} - `;
  const ogDesc = intro;
  const ogImg = image;
  const ogUrl = location.href;
  updateHead(ogTitle, ogDesc, ogImg, ogUrl);

  const faves = getFromStorage(favesKey);
  const isAlreadyFave = faves.find(
    (fave: Product) => fave.id.toString() === id.toString()
  );

  let faveClass = "";
  if (isAlreadyFave) {
    faveClass = "isFavorite";
  }

  mobileDisplay = `
    <div class="mobile-display">
        <section class="pdp-main">
            <div id="productImageCarouselMobile" class="carousel slide" data-ride="false">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="embed-responsive embed-responsive-1by1">
                            <div
                            class="embed-responsive-item card-img-top"
                            style="background-image: url('${image}')"
                            ></div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="embed-responsive embed-responsive-1by1">
                            <div
                            class="embed-responsive-item card-img-top"
                            style="background-image: url('${image}')"
                            ></div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="embed-responsive embed-responsive-1by1">
                            <div
                            class="embed-responsive-item card-img-top"
                            style="background-image: url('${image}')"
                            ></div>
                        </div>
                    </div>

                </div>
                <a
                class="carousel-control-prev"
                href="#productImageCarouselMobile"
                role="button"
                data-slide="prev"
                >
                <span class="carousel-arrow carousel-arrow-left">
                    <span class="flaticon flaticon-left-arrow"></span>
                </span>
                <span class="sr-only">Previous</span>
                </a>
                <a
                class="carousel-control-next"
                href="#productImageCarouselMobile"
                role="button"
                data-slide="next"
                >
                <span class="carousel-arrow carousel-arrow-right">
                    <span class="flaticon flaticon-chevron"></span>
                </span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            
            <div class="container">
                <div class="card mb-5">
                <div class="card-body">
                    <h1 class="h4 text-left text-md-center">${title}</h1>
                    <h2 class="h1 text-left text-md-center">${price}kr</h2>
                    <button class="position-absolute favorite-btn" data-id="${id}" data-title="${title}" data-img="${image} data=price="${price}">
                    <span class="flaticon flaticon-heart ${faveClass}"></span>
                    </button>
                    <p class="card-text text-center">
                    ${intro}
                    </p>
                    <a
                    href="javascript:void(0);"
                    class="btn btn-primary btn-lg btn-block addToCart"
                    data-id="${id}" data-title="${title}" data-price="${price}" data-img="${image}" 
                    >
                    Add to cart
                    <span class="flaticon flaticon-shopping-cart-2"></span>
                    </a>
                </div>
                </div>
            </div>
            </section>
            
            <section class="pdp-details container">
            <div class="accordion text-center" id="details-accordion">
                <div class="card">
                <div
                    class="accordion-header"
                    id="headingDescription"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseDetails"
                    aria-expanded="true"
                    aria-controls="collapseDetails"
                >
                    <h5 class="mb-0">Description</h5>
                </div>
            
                <div
                    id="collapseDetails"
                    class="collapse show"
                    aria-labelledby="headingDescription"
                    data-parent="#details-accordion"
                >
                    <div class="card-body">
                    ${description}
                    </div>
                </div>
                </div>
            
                <div class="card">
                <div
                    class="accordion-header"
                    id="productDetails"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseProductDetails"
                    aria-expanded="false"
                    aria-controls="collapseProductDetails"
                >
                    <h5 class="mb-0 collapsed">Details</h5>
                </div>
                <div
                    id="collapseProductDetails"
                    class="collapse"
                    aria-labelledby="productDetails"
                    data-parent="#details-accordion"
                >
                    <div class="card-body">
                    ${details}
                    </div>
                </div>
                </div>
            
                <div class="card">
                <div
                    class="accordion-header"
                    id="headingReviews"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseReviews"
                    aria-expanded="false"
                    aria-controls="collapseReviews"
                >
                    <h5 class="mb-0 collapsed">Reviews</h5>
                </div>
                <div
                    id="collapseReviews"
                    class="collapse"
                    aria-labelledby="headingReviews"
                    data-parent="#details-accordion"
                >
                    <div class="card-body">
                    <p>
                        Muffin I love apple pie macaroon pie sesame snaps brownie.
                        Sweet jelly-o wafer bonbon caramels tart chocolate cake. I
                        love croissant dessert fruitcake.
                    </p>
                    <p>
                        Liquorice bear claw jelly-o cotton candy powder. Sweet roll
                        gummi bears chocolate cupcake. Oat cake candy canes pudding
                        fruitcake cake gummi bears liquorice jujubes jelly-o.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>`;

  desktopDisplay = `
    <div class="desktop-display">
        <section class="pdp-main pt-5 pb-5">
            <div class="container">
                <div class="card mb-5">
                <div class="row">
                    <div class="col pr-0">
                    <div
                        id="productImageCarouselDesktop"
                        class="carousel slide h-100"
                        data-ride="false"
                    >
                        <ol class="carousel-indicators">
                        <li
                            data-target="#productImageCarouselDesktop"
                            data-slide-to="0"
                            class="active"
                        ></li>
                        <li
                            data-target="#productImageCarouselDesktop"
                            data-slide-to="1"
                        ></li>
                        <li
                            data-target="#productImageCarouselDesktop"
                            data-slide-to="2"
                        ></li>
                        </ol>
                        <div class="carousel-inner h-100">
                        <div
                            class="carousel-item active h-100"
                            style="background-image: url('${image}')"
                        ></div>
                        <div
                            class="carousel-item h-100"
                            style="background-image: url('${image}')"
                        ></div>
                        <div
                            class="carousel-item h-100"
                            style="background-image: url('${image}')"
                        ></div>
                        </div>
                        <a
                        class="carousel-control-prev"
                        href="#productImageCarouselDesktop"
                        role="button"
                        data-slide="prev"
                        >
                        <span class="carousel-arrow carousel-arrow-left">
                            <span class="flaticon flaticon-left-arrow"></span>
                        </span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a
                        class="carousel-control-next"
                        href="#productImageCarouselDesktop"
                        role="button"
                        data-slide="next"
                        >
                        <span class="carousel-arrow carousel-arrow-right">
                            <span class="flaticon flaticon-chevron"></span>
                        </span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                    <div class="col pl-0">
                    <div class="card-body h-100 d-flex flex-column">
                        <h1 class="h4 text-center">${title}</h1>
                        <h2 class="h1 text-center">${price}kr</h2>
                        <button class="position-absolute favorite-btn" data-id="${id}" data-title="${title}" data-img="${image}" data-price="${price}">
                        <span class="flaticon flaticon-heart ${faveClass}"></span>
                        </button>
                        <p class="card-text text-center">
                        ${description}
                        </p>
                        <a
                        href="javascript:void(0);"
                        class="btn btn-primary btn-lg btn-block addToCart mt-auto"
                        data-id="${id}" data-title="${title}" data-price="${price}" data-img="${image}" 
                        >
                        Add to cart
                        <span class="flaticon flaticon-shopping-cart-2"></span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section class="pdp-details container">
            <div class="tabs row">
                <nav class="col">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                    class="nav-item nav-link active"
                    id="nav-description-tab"
                    data-toggle="tab"
                    href="#nav-description"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                    ><h5>Description</h5></a
                    >

                    <a
                    class="nav-item nav-link"
                    id="nav-product-details-tab"
                    data-toggle="tab"
                    href="#nav-product-details"
                    role="tab"
                    aria-controls="nav-product-details"
                    aria-selected="false"
                    ><h5>Details</h5></a
                    >

                    <a
                    class="nav-item nav-link"
                    id="nav-reviews-tab"
                    data-toggle="tab"
                    href="#nav-reviews"
                    role="tab"
                    aria-controls="nav-reviews"
                    aria-selected="false"
                    ><h5>Reviews</h5></a
                    >
                </div>
                </nav>
                <div class="col-12">
                <div id="nav-tabContent" class="tab-content col pt-3">
                    <div
                    class="tab-pane fade show active"
                    id="nav-description"
                    role="tabpanel"
                    aria-labelledby="nav-description-tab"
                    >
                    <p>
                        Muffin I love apple pie macaroon pie sesame snaps brownie.
                        Sweet jelly-o wafer bonbon caramels tart chocolate cake. I
                        love croissant dessert fruitcake.
                    </p>
                    <p>
                        Liquorice bear claw jelly-o cotton candy powder. Sweet roll
                        gummi bears chocolate cupcake. Oat cake candy canes pudding
                        fruitcake cake gummi bears liquorice jujubes jelly-o.
                    </p>
                    </div>

                    <div
                    class="tab-pane fade"
                    id="nav-product-details"
                    role="tabpanel"
                    aria-labelledby="nav-product-details-tab"
                    >
                    <p>
                        Muffin I love apple pie macaroon pie sesame snaps brownie.
                        Sweet jelly-o wafer bonbon caramels tart chocolate cake. I
                        love croissant dessert fruitcake.
                    </p>
                    <p>
                        Liquorice bear claw jelly-o cotton candy powder. Sweet roll
                        gummi bears chocolate cupcake. Oat cake candy canes pudding
                        fruitcake cake gummi bears liquorice jujubes jelly-o.
                    </p>
                    </div>

                    <div
                    class="tab-pane fade"
                    id="nav-reviews"
                    role="tabpanel"
                    aria-labelledby="nav-reviews-tab"
                    >
                    <p>
                        Muffin I love apple pie macaroon pie sesame snaps brownie.
                        Sweet jelly-o wafer bonbon caramels tart chocolate cake. I
                        love croissant dessert fruitcake.
                    </p>
                    <p>
                        Liquorice bear claw jelly-o cotton candy powder. Sweet roll
                        gummi bears chocolate cupcake. Oat cake candy canes pudding
                        fruitcake cake gummi bears liquorice jujubes jelly-o.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>`;

  updateHtml();
  handleFaves();
  addToCart();
}

function updateHtml() {
  if (breakpoint.matches) {
    container.innerHTML = mobileDisplay;
  } else {
    container.innerHTML = desktopDisplay;
  }
}

breakpoint.addListener(updateHtml);
