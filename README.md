## Setting Up Highlight

Use this example to start your next-js app with highlight recording available for the full stack!
```sh
yarn create next-app --example https://github.com/highlight-run/example-nextjs my-next-app
```

### Install the dependencies

```sh
npm i highlight.run @highlight-run/react next-transpile-modules
```

- `highlight.run` is the core Javascript SDK for Highlight. All functionality from session recording to error monitoring lives here.
- `@highlight-run/react` is our package is React helpers. It has an `<ErrorBoundary>` which catches server-side errors.
- `next-transpile-modules` is used to allow for your dependencies, in this case `@highlight-run/react` to use CSS modules. This should not affect performance or bundle sizes.

### Code Changes

#### 1. Initialize Highlight

This is usually done in your [App file](https://nextjs.org/docs/advanced-features/custom-app). In this example, we initialize Highlight in [_app.tsx](./pages/_app.tsx).

#### 2. Wrap your app with `<ErrorBoundary>`

You can use the `ErrorBoundary` like you would a normal React [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html). We recommend putting these as low as possible in your component tree. If you'd like a catch-all `ErrorBoundary`, then you can also put it in your App file. In this example, we wrap our entire app in [_app.tsx](./pages/_app.tsx).

Wrapping your app with an `ErrorBoundary` is important. Highlight by default will be able to report on all client-side errors but will not be able to capture server-side errors. By using the `ErrorBoundary`, Highlight will get access to server-side errors.

#### 3. Setup transpilation for `node_modules`

`next-transpile-modules` allows for dependencies be compiled along with your app's compilation process. Highlight needs this because we ship default styles with our [Crash Reporting](https://docs.highlight.run/reactjs-integration#o6-errorboundary-api).

In this app, we configure `next-transpile-modules` in our [next.config.js](./next.config.js).

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
