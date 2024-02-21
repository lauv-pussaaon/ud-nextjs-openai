## Libraries

```sh
npm install @clerk/nextjs@4.26.1 @prisma/client@5.5.2 @tanstack/react-query@5.8.1 @tanstack/react-query-devtools@5.8.1 axios@1.6.1  openai@4.14.2   react-hot-toast@2.4.1 react-icons@4.11.0
```

```sh
npm install -D @tailwindcss/typography@0.5.10  daisyui@3.9.4 prisma@5.5.2
```

## Configure Tailwind, DaisyUI

-   remove default code from globals.css, tailwind.config.js

```js
{
plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

## Metadata

```js
export const metadata = {
    title: "GPTGenius",
    description: "Have a good night",
};
```

## Clerk - Auth Server
