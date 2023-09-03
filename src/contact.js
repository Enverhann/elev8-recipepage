// contact.js

// Function to initialize the Contact page
function loadContactPage() {
    console.log('loadContactPage function called');
    // Create a container div for the contact information
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.id = 'contact-info';
    
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';

    // Create and insert contact information into the container
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, you can reach us at:</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
        <p>Phone: (123) 456-7890</p>
    `;

    // Clear any existing content in the container
    contactInfoContainer.innerHTML = '';

    // Append the contact information to the container
    contactInfoContainer.appendChild(contactInfo);

    // Get the element where you want to display the contact information
    const existingContainer = document.querySelector('#contact-info');

// Append the contact information container to the main content
mainContent.appendChild(contactInfoContainer);

    // Replace the existing container with the new one
    if (existingContainer) {
        existingContainer.replaceWith(contactInfoContainer);
    }
    console.log('Contact page created successfully');
}

// Export the loadContactPage function
export { loadContactPage };
  