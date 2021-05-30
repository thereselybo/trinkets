export default function initCarousel() {
    const carousels = document.querySelectorAll(".glide");
    const config = {
        type: "carousel",
        perView: 3,
        breakpoints: {
            768: {
                perView: 1,
                slideWidth: 70,
            },
        },
    };
    carousels.forEach((carousel) => {
        new Glide(carousel, config).mount();
    });
}
