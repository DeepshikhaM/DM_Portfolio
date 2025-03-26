document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in, .slide-in, .parallax, .strength-card");

    function revealElements() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Trigger on load
});
