// Certification Modal System
function openModal(imageSrc, title, details) {
    const modal = document.createElement('div');
    modal.classList.add('cert-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${imageSrc}" alt="Certificate">
            <h3>${title}</h3>
            <p>${details}</p>
        </div>
    `;

    document.body.appendChild(modal);

    // Close Modal on Click
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });

    // Close on Outside Click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Attach Click Events to Certificate Cards
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img').src;
        const title = card.querySelector('h3').textContent;
        const details = card.querySelector('p').textContent;
        openModal(img, title, details);
    });
});
