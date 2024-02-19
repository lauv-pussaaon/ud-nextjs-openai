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
