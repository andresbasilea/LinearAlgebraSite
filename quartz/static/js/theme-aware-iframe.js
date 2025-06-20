// static/js/theme-aware-iframe.js

// This is a plain JavaScript file (.js) to avoid HTML entity encoding issues.

document.addEventListener('DOMContentLoaded', function() {
    // Get the iframe element by its ID
    // Use the ID you set in your Markdown file.
    const iframe = document.getElementById('theme-aware-iframe-viewer');
    const htmlElement = document.documentElement; // For checking light/dark class on <html>

    // IMPORTANT: Check if the iframe exists on *this specific page*.
    // If this script is loaded on a page without the iframe, it will gracefully do nothing.
    if (!iframe) {
        // console.log("Iframe with ID 'theme-aware-iframe-viewer' not found on this page. Script will not run.");
        return; 
    }
    console.log("Iframe element found by theme-aware-iframe.js:", iframe);

    // Retrieve the light and dark sources from the iframe's data attributes
    const lightSrc = iframe.dataset.lightSrc;
    const darkSrc = iframe.dataset.darkSrc;
    
    // Basic validation: ensure data attributes are present
    if (!lightSrc || !darkSrc) {
        console.warn("WARNING (theme-aware-iframe.js): 'data-light-src' or 'data-dark-src' attributes are missing on the iframe. Theme switching may not work for this instance.");
        return;
    }
    console.log(`Configured Light Source for iframe: ${lightSrc}`);
    console.log(`Configured Dark Source for iframe: ${darkSrc}`);

    // Function to update the iframe's source based on the current theme
    function updateIframeSource(theme) {
        let newSrc;
        if (theme === 'dark') {
            newSrc = darkSrc;
        } else {
            newSrc = lightSrc;
        }

        // Compare only the base URL (ignoring any existing query parameters)
        // to prevent unnecessary reloads if the src is already correct.
        if (iframe.src.split('?')[0] !== newSrc) {
            const timestamp = new Date().getTime(); // Append a unique timestamp to force reload (cache-busting)
            iframe.src = `${newSrc}?_t=${timestamp}`;
            console.log(`Iframe source updated to: ${iframe.src}`);
        } else {
            console.log(`Iframe source already set to ${newSrc}, no change needed.`);
        }
    }

    // --- Initial Theme Check on Page Load ---
    // This runs once when the page initially loads to set the correct iframe src based on the default theme.
    const initialTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    console.log("Initial theme detected by theme-aware-iframe.js (on DOMContentLoaded): " + initialTheme);
    updateIframeSource(initialTheme);

    // --- Listen for Quartz's custom 'themechange' event ---
    // This handles theme changes that happen after the page is loaded (e.g., user clicks the theme toggle).
    document.addEventListener("themechange", (e) => {
        // 'e.detail.theme' contains the new theme ("light" or "dark")
        const newTheme = e.detail.theme; 
        console.log("Quartz 'themechange' event fired. New theme: " + newTheme);
        updateIframeSource(newTheme);
    });
});