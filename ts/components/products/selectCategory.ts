const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const category = params.get("category");

export default function selectCategory() {
  const categoryContainer = document.querySelector(
    "#category-container"
  ) as HTMLDivElement;
  categoryContainer.innerHTML = `
    <li class="py-1">
        <a class="py-1 ${category === "sale" ? "active" : ""}" 
        href="./products.html?category=sale" id="sale"
        >Sale</a
        >
    </li>
    <li class="py-1">
        <a class="py-1 ${category === "christmas" ? "active" : ""}" 
        href="./products.html?category=christmas" id="christmas"
        >Christmas</a
        >
    </li>
    <li class="py-1">
        <a class="py-1 ${category === "wall decor" ? "active" : ""}" 
        href="./products.html?category=wall+decor" id="wall-decoration"
        >Wall decoration</a
        >
    </li>
    <li class="py-1">
        <a class="py-1 ${category === "textiles" ? "active" : ""}" 
        href="./products.html?category=textiles" id="textiles"
        >Textiles</a
        >
    </li>`;

  const title = document.querySelector("h1") as HTMLHeadingElement;
  let formattedCategory: string;

  if (category) {
    formattedCategory = category;
    if (category.includes("+")) {
      formattedCategory = category.replace(/+/g, " ");
    }
    title.innerHTML = formattedCategory;
    document.title = formattedCategory.toUpperCase();
  }
}
