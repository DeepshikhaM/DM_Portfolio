document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moreInfo = this.previousElementSibling;
            if (moreInfo.classList.contains("hidden")) {
                moreInfo.classList.remove("hidden");
                this.textContent = "Read Less";
            } else {
                moreInfo.classList.add("hidden");
                this.textContent = "Read More";
            }
        });
    });
});
