---
sidebar_position: 2
---

# 🏃‍♂️ Quickstart

### Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)
- [IOTA CLI](https://docs.iota.org/developer/getting-started/install-iota)

### Quickstart

To get started with Scaffold IOTA, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/arjanjohan/scaffold-iota.git
cd scaffold-iota
yarn install
```

2. Then, initialize the IOTA client with this command.

```
yarn client
```

This command sets up the IOTA client if it hasnt already. It prompts you to select a network (defaults to IOTA testnet if you just press `Enter`). Finally, you will be prompted to select the key scheme you want to use. If you are unsure which scheme to use just go with the default ed25519 scheme (option 0).

To view the configuration use this command:
```
yarn view-clients
```

To switch to a certain configured enviroment, use this command:
```
yarn switch-client <envAlias>
```

3. Deploy the test modules:

```
yarn deploy
```

This command deploys the move modules to the network configured in the previous step. The modules are located in `packages/move/sources` and can be modified or replaced to suit your needs. The `yarn deploy` command uses `iota client publish` to publish the modules to the network. After this is executes the script located in `scripts/load-modules.ts` to make the new modules available in the nextjs frontend.

4. On a second terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your Move modules using the `Debug Modules` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your Move module `counter.move` in `packages/move/sources`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your Move tests in: `packages/move/test`. To run test use `yarn test`