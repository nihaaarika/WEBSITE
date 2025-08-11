document.addEventListener("DOMContentLoaded", () => {
    // Fade-in gallery images
    const images = document.querySelectorAll(".gallery img");
    const revealOnScroll = () => {
        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < window.innerHeight - 50) {
                img.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
