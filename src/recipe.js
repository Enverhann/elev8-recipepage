function loadRecipePage() {
    console.log('created');
    const recipePageContainer = document.createElement('div');
    recipePageContainer.id = 'recipe-container';

    //Clear page after clicking another page
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';

    // Create and insert contact information into the container
    const recipeContainer = document.createElement('div');
    recipeContainer.innerHTML = `
        <h2>Recipes</h2>
        <p>Recipes will be here</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
    `;

    // Clear any existing content in the container
    recipePageContainer.innerHTML = '';

    // Append the contact information to the container
    recipePageContainer.appendChild(recipeContainer);

    // Get the element where you want to display the contact information
    const existingContainer = document.querySelector('#recipe-container');

// Append the contact information container to the main content
mainContent.appendChild(recipePageContainer);

    // Replace the existing container with the new one
    if (existingContainer) {
        existingContainer.replaceWith(recipePageContainer);
    }
    console.log('Recipe page created successfully');
    console.log('successfull');
}

// Export the loadRecipePage function
export { loadRecipePage };