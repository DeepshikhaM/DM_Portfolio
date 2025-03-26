document.addEventListener("DOMContentLoaded", function () {
    console.log("Stars script loaded! ✅");  // Debugging message

    const numStars = 50; // Adjust number of stars
    const section = document.querySelector(".certifications-section");

    if (!section) {
        console.error("Error: .certifications-section not found! ❌");
        return;
    }

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        // Random position
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";

        // Random animation duration
        star.style.animationDuration = Math.random() * 3 + 2 + "s";

        section.appendChild(star);
    }

    console.log("✅ Stars added successfully!");
});
