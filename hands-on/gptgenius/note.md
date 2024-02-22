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

-   Set up Clerk configuration
-   Set up custom sign-in and sign-up page

## React Icons

```sh
npm install react-icons --save
```

## Prompting with OpenAI

## Prompt

```js
{
  "tour": {
    ...
   "stops": ["stop name ", "stop name","stop name"]
  }
}
```

```js
const query = `Find a exact ${city} in this exact ${country}.
If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
  }
}
"stops" property should include only three stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
```

## Prisma

```sh
npx prisma init
```

## PlanetScale
