# Tapendium PWA

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app). We use Storyblok as a HeadlessCMS

## Storyblok Documentation
The documentation for using Storyblok is available [here](/docs.md). There's information about how to configure and manage the Hotel content.

## Getting Started

First, install all the dependencies

```bash
yarn
```

## Configuration

### Set up environment variables

Go to the **Settings** menu for your space on Storyblok, and click **API-Keys**.

Then copy the **preview** token on the page.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `STORYBLOK_API_KEY` should be the API key you just copied.
- `STORYBLOK_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [the Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

### Run Next.js in development mode

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environments

- **Production** [branch: `master`] - https://tapendium.netlify.app/
- **Dev** [branch: `dev`] - https://dev--tapendium.netlify.app/
- **Staging** [branch: `staging`] - https://staging--tapendium.netlify.app/

## Storyblok API

If you can play with the Storyblok Graphql playground. You should access here https://gapi-browser.storyblok.com/?token=<STORYBLOK_API_KEY>.
