document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".experience-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.querySelector(".card-inner").style.transform = "rotateY(180deg)";
        });
        card.addEventListener("mouseleave", () => {
            card.querySelector(".card-inner").style.transform = "rotateY(0deg)";
        });
    });
});
