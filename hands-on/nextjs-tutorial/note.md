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

## More Routing

-   Private Folders
    \_folder
-   Route Groups
    (dashboard)/auth/
    (dashboard)/dashboard/
    (dashboard)/trend/
-   Dynamic Routes
    [...folder] : Catch-all route segment
    [[...folder]] : Optional catch-all route segment (used by Clerk)

-   create test folder app/\_css
-   create app/(dashboard)/auth
    -   the url is just "/auth"
-   create app/(dashboard)/auth/[sign-in]

## Prisma

-   install prisma vs-code extension

[Prisma sqlite](https://www.prisma.io/docs)

Prisma ORM is a database toolkit that simplifies database access in web applications. It allows developers to interact with databases using a type-safe and auto-generated API, making database operations easier and more secure.

-   Prisma server: A standalone infrastructure component sitting on top of our database.
-   Prisma client: An auto-generated library that connects to the Prisma server and let's us read, write and stream data in our database. It is used for data access in our application.

```sh
npm install prisma --save-dev
npm install @prisma/client
```

```sh
npx prisma init
```

## Prisma Crud

```js
prisma.task.create({ data: { field: "value" } });
prisma.task.update({ where: { id: id }, data: { field: "value" } });
prisma.task.upsert({
    where: { id: id },
    update: { field: "value" },
    create: { field: "value" },
});
prisma.task.delete({ where: { id: id } });
```

### Query Example

```js
prisma.task.findMany();
prisma.task.findUnique({ where: { email: "email@email.io" } });
```

## Server Actions

-   asynchronous server functions that can be called directly from your components.

-   typical setup for server state mutations (create, update, delete)

    -   endpoint on the server (api route on Next.js)
    -   make request from the front-end
        -   setup form, handle submission, etc.

-   Next.js server actions allow you to mutate server state directly from within a React component by defining server-side logic alongside client-side interactions.

Rules:

-   must be async
-   add "use server" in function body
    -   use only in React Server Component

## Extra - More User Input Validation Options

-   required attribute a great start
-   zod library

The Zod library is a TypeScript-first schema declaration and validation library that allows developers to create complex type checks with simple syntax.

[Zod](https://zod.dev)

```sh
npm install zod
```

## UI Providers

-   using react-hot-toast
-   create providers.js file in app

## Route Handlers

-   install Thunder Client

Route Handlers allow you to create custom request handlers for a given route using the web request and response APIs.

Setting up

-   in app create folder "api"
-   in there create folder "tasks" with route.js file
-   app/api/tasks/route.js

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 method not allowed response.

In addition to supporting native request and response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.

## Middleware

[Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)

Middleware in Next.js is a piece of code that allows you to perform actions before a request is completed and modify the response accordingly.

-   create middleware.js in the root
-   by default will be invoked for every route in your project

## Moving Data to Cloud

```sh
npx prisma db push
```

## Local Build

-   configure package.json

```json
    "build": "npx prisma generate && next build"
```

## Force Dynamic

```js
export const dynamic = "force-dynamic";
```
