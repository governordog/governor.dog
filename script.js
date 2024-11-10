// Array of dog image sources
const dogImages = [
    "dog1.jpg",  // Replace with your image filenames or URLs
    "dog2.jpg",  
    "dog3.jpg",
    "dog4.jpg"
];

// Track the remaining images that haven't been shown
let remainingImages = [...dogImages];

// Function to change the image when clicked
function changeImage() {
    // If there are no more remaining images, reset the list and shuffle
    if (remainingImages.length === 0) {
        remainingImages = [...dogImages];  // Reset the remaining images to the original array
    }

    // Pick a random image from the remaining images
    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const imageToShow = remainingImages[randomIndex];

    // Change the image
    document.getElementById("dog-image").src = imageToShow;

    // Remove the shown image from the list of remaining images
    remainingImages.splice(randomIndex, 1);  // Remove the image that was just shown
}

// Initialize by showing the first image
document.getElementById("dog-image").src = dogImages[0];
