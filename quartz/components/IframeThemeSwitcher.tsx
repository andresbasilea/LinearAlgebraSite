// quartz/components/IframeThemeSwitcher.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// Import your inline script. Quartz will bundle this.
import script from "./scripts/iframeThemeSwitcher.inline.ts"

// Define the options for your component (e.g., the light and dark iframe sources)
interface Options {
  lightSrc: string
  darkSrc: string
  minWidth?: string // Optional: for the min-width CSS style
}

// Set default options for your component
const defaultOptions: Options = {
  lightSrc: "threed_example_background.html", // Your default light theme HTML
  darkSrc: "threed_example_360.html", // Your default dark theme HTML (ensure it has .html if needed!)
  minWidth: "485px", // Default minimum width for the container
}

// This is the main component constructor function
export default ((userOpts?: Options) => {
  // Merge user-provided options with default options
  const opts = { ...defaultOptions, ...userOpts }

  // This is the actual component function that returns JSX
  function IframeThemeSwitcher({ displayClass }: QuartzComponentProps) {
    // Define inline styles using JavaScript objects
    const containerStyle = {
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
      minWidth: opts.minWidth || '485px', // Use option or default
      margin: '0 auto', // Center the div
    };

    const iframeStyle = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '0px',
      top: '0px',
    };

    return (
      <div style={containerStyle} class={displayClass}>
        <iframe
          id="threed-viewer-iframe" // Give your iframe an ID for JS access
          style={iframeStyle}
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay"
          // Crucial: Pass the light/dark src paths to the JS via data attributes
          data-light-src={opts.lightSrc}
          data-dark-src={opts.darkSrc}
          // Set initial src. The JS will then update it based on current theme.
          src={opts.lightSrc}>
        </iframe>
      </div>
    )
  }

  // --- Attach your JavaScript here ---
  // The 'script' variable now contains the content of 'iframeThemeSwitcher.inline.ts'
  // Quartz will bundle and inject this script after the DOM loads.
  IframeThemeSwitcher.afterDOMLoaded = script

  // Return the component function
  return IframeThemeSwitcher
}) satisfies QuartzComponentConstructor