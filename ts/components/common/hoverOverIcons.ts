export default function hoverOverIcons() {
  const navIcons = document.querySelectorAll(
    ".nav-icon"
  ) as NodeListOf<HTMLSpanElement>;

  navIcons.forEach((icon) => {
    const listItem = icon.parentNode as HTMLAnchorElement;

    const hoverText = listItem.querySelector(
      ".hover-text"
    ) as HTMLParagraphElement;

    listItem.onmouseover = () => {
      if (!hoverText.classList.contains("active")) {
        hoverText.classList.add("active");
      }
    };

    listItem.onmouseout = () => {
      if (hoverText.classList.contains("active")) {
        hoverText.classList.remove("active");
      }
    };
  });
}
