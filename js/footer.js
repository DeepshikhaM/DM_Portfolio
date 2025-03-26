document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")  // ✅ Fetch footer dynamically
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});

function copyEmail() {
    const emailText = document.getElementById("email").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
