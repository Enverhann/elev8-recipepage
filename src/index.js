import './style.css';
import { loadHomePage } from './home.js';
import { loadContactPage } from './contact.js';
import { loadRecipePage } from './recipe.js'; // Add this line
import { loadCategoriesPage } from './categories.js'; // Add this line
import { loadFavoritesPage } from './favorites.js'; // Add this line

document.addEventListener("DOMContentLoaded", function () {
    // Get the "Home," "Recipes," and "Contact" tabs from the sidebar
    const homeTab = document.getElementById('home-tab');
    const contactTab = document.getElementById('contact-tab');
    const recipesTab = document.getElementById('recipes-tab');
    const favoritesTab = document.getElementById('favorites-tab');
    const categoriesTab = document.getElementById('categories-tab');

    // Add a click event listener to the "Home" tab
    document.addEventListener("click", function (event) {
        const clickedTab = event.target.closest("li");

        if (!clickedTab) {
            return; // Exit early if no <li> element was found
        }
        const tabId = clickedTab.id;
        if (tabId === "home-tab") {
            loadHomePage();
            setActiveTab(clickedTab);
        }
        if (tabId === "contact-tab") {
            loadContactPage();
            setActiveTab(clickedTab);
        }
        if (tabId === "recipes-tab") { // Add this block
            loadRecipePage();
            setActiveTab(clickedTab);
        }
        if (tabId === "categories-tab") { // Add this block
            loadCategoriesPage();
            setActiveTab(clickedTab);
        }
        if (tabId === "favorites-tab") { // Add this block
            loadFavoritesPage();
            setActiveTab(clickedTab);
        }
    });
    // Initial load (usually the home page)
    loadHomePage();
    setActiveTab(homeTab);
});
// Helper function to set the active tab in the sidebar
function setActiveTab(tabElement) {
    const tabs = document.querySelectorAll('nav ul li a span');
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabElement.classList.add('active');
}
