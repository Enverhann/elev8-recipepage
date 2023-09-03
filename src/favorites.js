// favorites.js

// Function to initialize the Favorites page
function loadFavoritesPage() {
    console.log('created');
    const favoritesPageContainer = document.createElement('div');
    favoritesPageContainer.id = 'favorites-container';

    //Clear page after clicking another page
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';

    // Create and insert contact information into the container
    const favoritesContainer = document.createElement('div');
    favoritesContainer.innerHTML = `
        <h2>Favorites</h2>
        <p>Recipes will be here</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
    `;

    // Clear any existing content in the container
    favoritesPageContainer.innerHTML = '';

    // Append the contact information to the container
    favoritesPageContainer.appendChild(favoritesContainer);

    // Get the element where you want to display the contact information
    const existingContainer = document.querySelector('#favorites-container');

// Append the contact information container to the main content
mainContent.appendChild(favoritesPageContainer);

    // Replace the existing container with the new one
    if (existingContainer) {
        existingContainer.replaceWith(favoritesPageContainer);
    }
    console.log('Favorites page created successfully');
    console.log('successfull');

}

// Export the loadFavoritesPage function
export { loadFavoritesPage };
