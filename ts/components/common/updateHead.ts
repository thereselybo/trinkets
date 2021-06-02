export default function updateHead(
  title: string,
  description: string,
  image: string,
  url: string
) {
  const titleMetaTag = document.querySelector(
    'meta[property="og:title"]'
  ) as HTMLMetaElement;
  const descriptionMetaTag = document.querySelector(
    'meta[property="og:description"]'
  ) as HTMLMetaElement;
  const ogImageMetaTag = document.querySelector(
    'meta[property="og:image"]'
  ) as HTMLMetaElement;
  const ogUrlMetaTag = document.querySelector(
    'meta[property="og:url"]'
  ) as HTMLMetaElement;

  titleMetaTag.setAttribute("content", `${title}Trinkets`);
  descriptionMetaTag.setAttribute("content", description);
  ogImageMetaTag.setAttribute("content", image);
  ogUrlMetaTag.setAttribute("content", url);
}
