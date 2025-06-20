Este es el recurso para estudiar grupos.

Prueba 3

<div style="position:relative;padding-bottom:56.25%; min-width: 485px; margin: 0 auto;">
    <iframe
        id="threed-viewer-iframe"  style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="threed_example_background.html"> </iframe>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const iframe = document.getElementById('threed-viewer-iframe');
        const htmlElement = document.documentElement; // The <html> tag usually has 'dark' class

        // IMPORTANT: Add a check to ensure the iframe was found
        if (!iframe) {
            console.error("Error: Iframe with ID 'threed-viewer-iframe' not found. Check your HTML ID.");
            return; // Stop script execution if iframe isn't found
        }

        function updateIframeSource(theme) {
            if (theme === 'dark') {
                iframe.src = 'threed_example_360.html'; // *** Corrected: Added .html extension here ***
                console.log("Theme is dark. Loading threed_example_360.html");
            } else {
                iframe.src = 'threed_example_background.html';
                console.log("Theme is light. Loading threed_example_background.html");
            }
        }

        // Initial check when the page loads
        const initialTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        console.log("Initial theme detected: " + initialTheme);
        updateIframeSource(initialTheme);

        // Listen for 'themechange' events
        document.addEventListener("themechange", (e) => {
            console.log("Quartz 'themechange' event fired. New theme: " + e.detail.theme);
            updateIframeSource(e.detail.theme);
        });
    });
</script>