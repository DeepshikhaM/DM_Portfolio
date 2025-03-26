
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
