# OpenAI API - Next.js Starter Project

This is a Typescript starter project for using the Open AI API to build a Node app.

In this example app, you enter the name of a product and it outputs a product review, formatted in a very specific way in markdown. You can use this as a starting point to build purpose-built generative API functionality.

Technologies used:

- [OpenAI API](https://openai.com/api/)
- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Highlight.js](https://highlightjs.org/)

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

1. Clone this repository

1. Navigate into the project directory

```bash
cd openai-api-next-starter
```  

1. Install the requirements

```bash
npm install
```

1. Make a copy of the example environment variables file

```bash
cp .env.example .env
```

1. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

1. Run the app

```bash
npm run dev
```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000). Happy hacking.

## Deployment

I've run this successfully on Vercel and I'd recommend them for any Next.js (they invented Next and their DX is the best!)

Included in the repo is a vercel.json file. You need this to set a higher serverless function timeout since the Open AI API takes about 20-30 seconds to compute. Please note that Hobby accounts will always timeout at 10s so you need to upgrade to a pro account for this to work. Totally worth it.