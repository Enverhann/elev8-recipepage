// Function to create the entire content of the homepage
function loadHomePage() {
    console.log('loadHomePage function called')
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    // Create the header
    const header = document.createElement('header');
    header.className = 'header';

    const headerGrid = document.createElement('div');
    headerGrid.className = 'header-grid';

    // Create the search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchIcon = document.createElement('img');
    searchIcon.src = 'images/magnify.svg';
    searchIcon.alt = 'Search';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';

    searchContainer.appendChild(searchIcon);
    searchContainer.appendChild(searchInput);

    headerGrid.appendChild(searchContainer);
    header.appendChild(headerGrid);

    // Create the sidebar
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'sidebar-header';

    const foodIcon = document.createElement('img');
    foodIcon.src = 'images/food-fork-drink.svg';
    foodIcon.alt = '';

    const sidebarDash = document.createElement('div');
    sidebarDash.className = 'sidebar-dash';
    sidebarDash.textContent = "Enverhan's Epic Eats";

    sidebarHeader.appendChild(foodIcon);
    sidebarHeader.appendChild(sidebarDash);

    const sidebarNav = document.createElement('nav');
    sidebarNav.className = 'sidebar-nav';

    const navUl = document.createElement('ul');

    const navItems = [
        { id: 'home-tab', text: 'Home', icon: 'images/home-outline.svg' },
        { id: 'recipes-tab', text: 'Recipes', icon: 'images/silverware-spoon.svg' },
        { id: 'categories-tab', text: 'Categories', icon: 'images/shape-plus-outline.svg' },
        { id: 'favorites-tab', text: 'Favorites', icon: 'images/heart-outline.svg' },
        { id: 'contact-tab', text: 'Contact', icon: 'images/phone-outline.svg' },
    ];

    navItems.forEach((item) => {
        const li = document.createElement('li');
        li.id = item.id;

        const a = document.createElement('a');
        a.href = '#';

        const img = document.createElement('img');
        img.src = item.icon;
        img.alt = '';

        const span = document.createElement('span');
        span.textContent = item.text;

        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        navUl.appendChild(li);
    });

    sidebarNav.appendChild(navUl);

    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(sidebarNav);

    // Create the main content
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';

    // ... Create and append main content's child elements here ...

    // Append all the elements to the wrapper
    wrapper.appendChild(header);
    wrapper.appendChild(sidebar);
    wrapper.appendChild(mainContent);

    const footer = document.createElement('footer');
    
    const footerText = document.createElement('p');
    footerText.textContent = '© 2023 Enverhan';

    footer.appendChild(footerText);
    document.body.innerHTML = '';
    // Append the footer to the wrapper
    // Replace the existing content of the document with the new structure
    document.body.appendChild(wrapper);
    document.body.appendChild(footer);
}

// Call the createHomePage function to generate the content when the page loads
loadHomePage();
export{loadHomePage};
