export default function hoverOverIcons() {
    const navIcons = document.querySelectorAll(".nav-icon");
    navIcons.forEach((icon) => {
        const listItem = icon.parentNode;
        const hoverText = listItem.querySelector(".hover-text");
        icon.parentNode.onmouseover = () => {
            if (!hoverText.classList.contains("active")) {
                hoverText.classList.add("active");
            }
        };
        icon.parentNode.onmouseout = () => {
            if (hoverText.classList.contains("active")) {
                hoverText.classList.remove("active");
            }
        };
    });
}
