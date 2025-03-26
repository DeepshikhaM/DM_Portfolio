document.addEventListener("DOMContentLoaded", function () {
    let contactButton = document.getElementById("contact-button");
    let contactModal = document.getElementById("contact-modal");
    let closeBtn = document.querySelector(".close-btn");

    contactButton.addEventListener("click", function () {
        contactModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        contactModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});
