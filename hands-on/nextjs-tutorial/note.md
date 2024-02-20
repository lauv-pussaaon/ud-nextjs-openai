## Server Components VS Client Components

-   By default, Next.JS uses Server components!
-   To use Client components, you can add the React "use client" directive.

### Server Components

Benefits:

-   data fetching: advantage this allow us to move data fetching to to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests.
-   security
-   caching
-   bundle size

### Client Components

Benefits:

-   Interactivity: Client components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
-   Browser APIs: have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases.

## Fetch Data in Server Components

-   Add async and using await fetch() as usuaul
-   The same for db
-   Next.js extends the native Web fetch() API to allow each request on the server to set its own persistent caching semantics.

## Loading Component

-   The special file loading.js helps us create a meaningful loading UI with React Suspense. With this convention, we can show an instant loading state from the server while the content of a route segment loads.
-   The new content is automatically swapped in once rendering is complete.

## Next Image Component

-   extends the HTML <img> element with features for automatic image optimization:

    -   Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
    -   Visual Stability: Prevent layout shift automatically when images are loading.
    -   Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
    -   Asset Flexibility: On-demand image resizing, even for images stored on remote servers.

## Remote Images

-   To use a remote image, the src property should be a URL string.
-   Since Next.js does not have access to remote files during the build process, we'll need to provide the width, height, and optional blurDataURL props manually.
-   The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file.
-   To safely allow optimizing images, define a list of supported URL patterns in next.config.js. Be as specific as possible to prevent malicious usage.
-   Restart dev server.
