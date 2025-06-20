// static/js/theme-aware-iframe.js

// This script ONLY handles theme changes *after* the page has initially loaded.
// It DOES NOT handle setting the initial iframe source on page load based on user/system preference.
// The iframe's initial 'src' will be whatever is specified in your Markdown's HTML.

(function() {
    const iframe = document.getElementById('theme-aware-iframe-viewer');
    
    // If the iframe element isn't found on this particular page, gracefully exit.
    if (!iframe) {
        console.log("theme-aware-iframe.js: Iframe element not found. Theme change listener will not activate.");
        return; 
    }
    console.log("theme-aware-iframe.js: Iframe element found for theme change.");

    const lightSrc = iframe.dataset.lightSrc;
    const darkSrc = iframe.dataset.darkSrc; // Corrected: was dataset.dataset.darkSrc in previous drafts
    
    if (!lightSrc || !darkSrc) {
        console.warn("WARNING (theme-aware-iframe.js): 'data-light-src' or 'data-dark-src' attributes are missing on the iframe. Theme changes will not update the iframe source.");
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

        const timestamp = new Date().getTime(); 
        const finalSrc = `${newSrc}?_t=${timestamp}`;

        // Only update if the current source is different to avoid unnecessary reloads.
        if (iframe.src !== finalSrc) {
            iframe.src = finalSrc;
            console.log(`theme-aware-iframe.js: Iframe source updated by theme change to: ${iframe.src}`);
        } else {
            console.log(`theme-aware-iframe.js: Iframe source already set to ${finalSrc}, no change needed by theme change.`);
        }
    }

    // --- This script ONLY listens for Quartz's custom 'themechange' event ---
    document.addEventListener("themechange", (e) => {
        const customEvent = e; // You can cast to CustomEvent if using TypeScript directly
        const newTheme = customEvent.detail.theme; 
        console.log("theme-aware-iframe.js: Quartz 'themechange' event fired. New theme: " + newTheme);
        updateIframeSource(newTheme);
    });
})();