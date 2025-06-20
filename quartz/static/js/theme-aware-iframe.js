// static/js/theme-aware-iframe.js

// This script now handles both:
// 1. Initial iframe source setting on DOMContentLoaded.
// 2. Subsequent iframe source changes when the theme is toggled.

(function() {
    const iframe = document.getElementById('theme-aware-iframe-viewer');
    
    // If the iframe element isn't found on this particular page, exit.
    if (!iframe) {
        console.log("theme-aware-iframe.js: Iframe element not found. Script will not activate.");
        return; 
    }
    console.log("theme-aware-iframe.js: Iframe element found.");

    const lightSrc = iframe.dataset.lightSrc;
    const darkSrc = iframe.dataset.darkSrc;
    
    if (!lightSrc || !darkSrc) {
        console.warn("WARNING (theme-aware-iframe.js): 'data-light-src' or 'data-dark-src' attributes are missing on the iframe. Theme switching may not work.");
        return;
    }

    /**
     * Updates the iframe's source URL based on the provided theme.
     * It appends a cache-busting timestamp to ensure the browser reloads the content.
     * @param {string} theme - The new theme to apply ("light" or "dark").
     */
    function updateIframeSource(theme) {
        let newSrc;
        if (theme === 'dark') {
            newSrc = darkSrc;
        } else {
            newSrc = lightSrc;
        }

        // Only update if the base src has changed, add cache-busting timestamp
        if (iframe.src.split('?')[0] !== newSrc) {
            const timestamp = new Date().getTime(); 
            iframe.src = `${newSrc}?_t=${timestamp}`;
            console.log(`theme-aware-iframe.js: Iframe source updated to: ${iframe.src}`);
        } else {
            console.log(`theme-aware-iframe.js: Iframe source already set to ${newSrc}, no change needed.`);
        }
    }

    // --- Logic for Initial Page Load (DOMContentLoaded) ---
    document.addEventListener('DOMContentLoaded', function() {
        console.log('theme-aware-iframe.js: DOMContentLoaded fired. Determining initial theme.');
        
        let initialIsDark = false;
        const storedTheme = localStorage.getItem('quartz-theme'); // Check localStorage first

        if (storedTheme === 'dark') {
            initialIsDark = true;
            console.log('Initial theme from localStorage: dark');
        } else if (storedTheme === 'light') {
            initialIsDark = false;
            console.log('Initial theme from localStorage: light');
        } else {
            // Fallback to system preference if no explicit choice in localStorage
            initialIsDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            console.log('Initial theme from system preference: ' + (initialIsDark ? 'dark' : 'light'));
        }
        const initialTheme = initialIsDark ? 'dark' : 'light';
        
        updateIframeSource(initialTheme);
    });

    // --- Logic for Subsequent Theme Changes (themechange event) ---
    document.addEventListener("themechange", (e) => {
        const customEvent = e; // Cast to CustomEvent if using TypeScript directly
        const newTheme = customEvent.detail.theme; 
        console.log("theme-aware-iframe.js: Quartz 'themechange' event fired. New theme: " + newTheme);
        updateIframeSource(newTheme);
    });
})();