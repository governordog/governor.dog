/* Basic styles for the page */
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    font-family: Arial, sans-serif;
}

/* The container holding the image */
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 95%; /* Adjusted max-width for container */
    max-height: 95%; /* Adjusted max-height for container */
}

/* The image itself */
#dog-image {
    width: 100%;
    height: auto;
    max-width: 85%; /* Reduced max-width for a near full-screen look */
    max-height: 85%; /* Reduced max-height to prevent overflow */
    border-radius: 16px; /* Increased border-radius for more rounding */
    cursor: pointer;
    transition: transform 0.9s ease-in-out;
}

/* Image scale effect on hover */
#dog-image:hover {
    transform: scale(1.02); /* Slightly reduced scale for a subtle effect */
}
