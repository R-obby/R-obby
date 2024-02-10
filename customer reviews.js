// Function to handle form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input from the form
    const rating = document.getElementById('rating').value;
    const userReview = document.getElementById('userReview').value;
    const userName = document.getElementById('userName').value;

    // Display the new review dynamically
    displayNewReview(rating, userReview, userName);

    // Clear the form fields
    document.getElementById('rating').value = '5';
    document.getElementById('userReview').value = '';
    document.getElementById('userName').value = '';
});

// Function to display a new review dynamically
function displayNewReview(rating, userReview, userName) {
    const reviewsContainer = document.querySelector('.customer-reviews');

    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
        <div class="rating">${generateStarRating(parseInt(rating))}</div>
        <p>${userReview}</p>
        <p class="author">- ${userName}</p>
    `;

    // Insert the new review at the beginning of the reviews container
    reviewsContainer.insertBefore(newReview, reviewsContainer.firstChild);
}

// Function to generate star rating based on a numerical value
function generateStarRating(rating) {
    const stars = '⭐';
    return stars.repeat(rating);
}
