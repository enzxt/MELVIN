// JavaScript code
window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) { // Check if it's a mobile viewport
        var images = document.querySelectorAll('.melvinPics img');
        images.forEach(function (image) {
            image.addEventListener('click', function () {
                var imageUrl = this.getAttribute('data-url');
                openModal(imageUrl);
            });
        });
    }
});

// Function to open modal with clicked image
function openModal(url) {
    var modalContainer = document.getElementById('modalContainer');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = url;
    modalContainer.style.display = 'flex';
    // Close modal when clicking outside of the image
    modalContainer.addEventListener('click', closeModal);
}

// Function to close modal
function closeModal() {
    var modalContainer = document.getElementById('modalContainer');
    modalContainer.style.display = 'none';
    // Remove the click event listener to prevent it from closing the modal again when clicking inside
    modalContainer.removeEventListener('click', closeModal);
}