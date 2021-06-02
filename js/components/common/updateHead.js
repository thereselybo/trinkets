export default function updateHead(title, description, image, url) {
    const titleMetaTag = document.querySelector('meta[property="og:title"]');
    const descriptionMetaTag = document.querySelector('meta[property="og:description"]');
    const ogImageMetaTag = document.querySelector('meta[property="og:image"]');
    const ogUrlMetaTag = document.querySelector('meta[property="og:url"]');
    titleMetaTag.setAttribute("content", `${title}Trinkets`);
    descriptionMetaTag.setAttribute("content", description);
    ogImageMetaTag.setAttribute("content", image);
    ogUrlMetaTag.setAttribute("content", url);
}
