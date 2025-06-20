// quartz/components/scripts/iframeThemeSwitcher.inline.ts

// This code will be bundled by Quartz and injected into the browser.
// It uses TypeScript, but transpiles to standard JavaScript for the browser.

document.addEventListener('DOMContentLoaded', function() {
    // Get the iframe element using its ID
    const iframe = document.getElementById('threed-viewer-iframe') as HTMLIFrameElement;
    // Get the HTML element to check for the 'dark' class
    const htmlElement = document.documentElement;

    // --- Error Handling: Make sure the iframe exists ---
    if (!iframe) {
        console.error("ERROR (iframeThemeSwitcher.inline.ts): Iframe with ID 'threed-viewer-iframe' not found. Ensure your IframeThemeSwitcher component is in the layout and its ID matches.");
        return; // Stop execution if iframe isn't found
    }
    console.log("Iframe element found by script:", iframe);

    // --- Retrieve the light and dark sources from data attributes ---
    const lightSrc = iframe.dataset.lightSrc || 'threed_example_background.html'; // Fallback to default if data-attribute is missing
    const darkSrc = iframe.dataset.darkSrc || 'threed_example_360.html';     // Fallback to default if data-attribute is missing
    
    console.log(`Configured Light Source: ${lightSrc}`);
    console.log(`Configured Dark Source: ${darkSrc}`);

    // --- Function to update the iframe's source ---
    function updateIframeSource(theme: string) {
        let newSrc: string;
        if (theme === 'dark') {
            newSrc = darkSrc;
        } else {
            newSrc = lightSrc;
        }

        // Only update the src if it's actually different from the current base src
        // This prevents unnecessary reloads and infinite loops if something goes wrong.
        // `.split('?')[0]` removes any existing query parameters (like our cache-buster)
        if (iframe.src.split('?')[0] !== newSrc) {
            // Append a unique timestamp to the URL to force the browser to reload the iframe content
            const timestamp = new Date().getTime();
            iframe.src = `${newSrc}?_t=${timestamp}`;
            console.log(`Iframe source updated to: ${iframe.src}`);
        } else {
            console.log(`Iframe source already set to ${newSrc}, no change needed.`);
        }
    }

    // --- Initial Theme Check on Page Load ---
    // This runs once when the page first loads to set the correct iframe based on the initial theme.
    const initialTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    console.log("Initial theme detected by script (on DOMContentLoaded): " + initialTheme);
    updateIframeSource(initialTheme);

    // --- Listen for Quartz's custom 'themechange' event ---
    // This handles theme changes that occur after the page has loaded (e.g., user clicks toggle).
    document.addEventListener("themechange", (e: Event) => { // Use 'Event' or 'CustomEvent' as type for 'e'
        const customEvent = e as CustomEvent; // Cast to CustomEvent to access 'detail'
        const newTheme = customEvent.detail.theme; // 'detail.theme' will be "light" or "dark"
        console.log("Quartz 'themechange' event fired. New theme: " + newTheme);
        updateIframeSource(newTheme);
    });
});