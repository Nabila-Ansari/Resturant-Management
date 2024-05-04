document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const rateUsModal = document.getElementById("rateUsModal");
    const ratingStars = document.querySelectorAll(".star");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const submitRatingBtn = document.getElementById("submitRatingBtn");

    // Open the rate us modal
    openModalBtn.addEventListener("click", function () {
        rateUsModal.style.display = "block";
    });

    // Close the rate us modal
    closeModalBtn.addEventListener("click", function () {
        rateUsModal.style.display = "none";
    });

    // Handle rating
    ratingStars.forEach(function (star) {
        star.addEventListener("click", function () {
            const rating = star.getAttribute("data-star");
            feedbackMessage.innerHTML = `You rated us ${rating} stars. Thank you!`;
        });
    });

    // Submit rating (you can add your own logic here, e.g., sending data to a server)
    submitRatingBtn.addEventListener("click", function () {
        // Add your code to submit the rating or provide feedback
        // You can send the rating to your server or take any other action.
        rateUsModal.style.display = "none";
    });
});
