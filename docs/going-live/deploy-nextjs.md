---
sidebar_position: 2
---

# Deploy Your NextJS Frontend

:::tip Suggestion
The best way to publish your NextJS frontend is by connecting your GitHub repository to Vercel on the Vercel website. This way, it will automatically redeploy every time you push changes to the main branch.
:::

If you prefer to manually deploy from the command line interface (CLI), run this command and follow the on-screen instructions:

```
yarn vercel
```

This will generate a .vercel directory in your project where the configuration of your deployment is stored.

After each deployment, you will be shown a new preview/test URL. On the Vercel website, you can promote the new deployment to production. Alternatively, to redeploy directly to the production URL from the command line, you can run:

```
yarn vercel --prod
```

Vercel runs type and lint checks before building your app, and deployment will fail if there are any type or lint errors.

To ignore these checks while deploying from the CLI, use:

```
yarn vercel:yolo
```

If you've connected your GitHub repository on the Vercel website, you can ignore type and lint checks by setting `NEXT_PUBLIC_IGNORE_BUILD_ERROR` to `true` in an [environment variable](https://vercel.com/docs/concepts/projects/environment-variables).
