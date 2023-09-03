// categories.js

// Function to initialize the Categories page
function loadCategoriesPage() {
    console.log('created');
    const categoriesPageContainer = document.createElement('div');
    categoriesPageContainer.id = 'categories-container';

    //Clear page after clicking another page
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';

    // Create and insert contact information into the container
    const categoriesContainer = document.createElement('div');
    categoriesContainer.innerHTML = `
        <h2>Categories</h2>
        <p>Recipes will be here</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
    `;

    // Clear any existing content in the container
    categoriesPageContainer.innerHTML = '';

    // Append the contact information to the container
    categoriesPageContainer.appendChild(categoriesContainer);

    // Get the element where you want to display the contact information
    const existingContainer = document.querySelector('#categories-container');

// Append the contact information container to the main content
mainContent.appendChild(categoriesPageContainer);

    // Replace the existing container with the new one
    if (existingContainer) {
        existingContainer.replaceWith(categoriesPageContainer);
    }
    console.log('Category page created successfully');
    console.log('successfull');

}

// Export the loadCategoriesPage function
export { loadCategoriesPage };
