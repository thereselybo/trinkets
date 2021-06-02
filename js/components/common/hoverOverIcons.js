export default function hoverOverIcons() {
    const navIcons = document.querySelectorAll(".nav-icon");
    navIcons.forEach((icon) => {
        const listItem = icon.parentNode;
        const hoverText = listItem.querySelector(".hover-text");
        console.log(typeof hoverText);
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
