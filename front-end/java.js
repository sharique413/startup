document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // You can add JavaScript code here to send the form data to the server-side script for processing and storage.
        // Example: Use fetch or AJAX to send the data to the server.
    });
});