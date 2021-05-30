export default function updateHead(title, description, image, url) {
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", `${title}Trinkets`);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", image);
  document
    .querySelector('meta[property="og:url"]')
    .setAttribute("content", url);
}
