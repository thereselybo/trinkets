import { productImgPlaceholder, productImgAltPlaceholder, } from "../../settings/variables.js";
let productImg = productImgPlaceholder;
let productImgAlt = productImgAltPlaceholder;
export default function findProductSpecs(product) {
    const title = product.title;
    const price = product.price;
    const id = product.id;
    const description = product.description;
    const intro = product.introduction;
    const details = product.details;
    const category = product.category;
    const featured = product.featured;
    const productImgUrl = product.image_url;
    const imageObject = product.image;
    let fallbackProductImgUrl;
    if (imageObject) {
        fallbackProductImgUrl = `${baseUrl}${product.image.formats.medium.url}`;
    }
    if (productImgUrl) {
        productImg = productImgUrl;
        productImgAlt = `Product image of ${title}`;
    }
    else if (imageObject) {
        if (fallbackProductImgUrl) {
            productImg = fallbackProductImgUrl;
            productImgAlt = `Product image of ${title}`;
        }
    }
    const productSpecs = {
        title: title,
        price: price,
        id: id,
        description: description,
        intro: intro,
        details: details,
        category: category,
        featured: featured,
        productImg: productImg,
        prodcutImgAlt: productImgAlt,
    };
    return productSpecs;
}
