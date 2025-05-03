---
sidebar_position: 3
slug: /commands
---
# ⌨️ Available Commands

This page provides an overview of all available yarn commands in the Scaffold-IOTA project. The commands are organized by their functionality.

## Smart Contract Development Commands

### `yarn client`
Launches an interactive client interface for managing IOTA environments. This tool allows you to:
- Switch between different environments (testnet, devnet)
- Set up new environments with custom configurations
- View and manage existing environments

### `yarn chain`
Starts a local IOTA node with the following configurations:
- Forces regenesis of the chain
- Includes a faucet for testing
- Sets logging level to show only important node information

### `yarn deploy`
Executes a two-step deployment process:
1. Publishes your smart contracts to the network
2. Loads the deployed modules and generates TypeScript types for frontend integration
- Creates deployment artifacts in the `deployments` directory
- Updates frontend module definitions automatically

### `yarn compile`
Compiles your Move smart contracts using the IOTA Move compiler.

### `yarn test`
Runs the test suite for your Move smart contracts.

### `yarn document`
Generates documentation for your Move smart contracts.

### `yarn format`
Formats both the Move smart contracts and the Next.js frontend code.

## Frontend Development Commands

### `yarn start`
Starts the Next.js development server for the frontend application.

### `yarn next:lint`
Runs ESLint to check for code quality issues in the Next.js frontend.

### `yarn next:format`
Formats the Next.js frontend code using Prettier.

### `yarn next:check-types`
Performs TypeScript type checking for the Next.js frontend.

### `yarn next:build`
Builds the Next.js frontend application for production.

### `yarn next:serve`
Serves the built Next.js application in production mode.

## Deployment Commands

### `yarn vercel`
Deploys the frontend application to Vercel with standard checks.

### `yarn vercel:yolo`
Deploys the frontend application to Vercel, bypassing build checks (use with caution).

## Development Workflow Commands

### `yarn postinstall`
Automatically runs after package installation to set up Husky git hooks.

### `yarn precommit`
Runs lint-staged checks before committing code changes.

## Notes

- Most commands are workspace-specific and will run in either the `@scaffold-iota/move` or `@scaffold-iota/nextjs` workspace
- The format command runs formatting for both Move contracts and Next.js code
- For local development, start with `yarn chain` to run a local node, then use `yarn start` for the frontend
- Before deploying contracts, ensure they are compiled (`yarn compile`) and tested (`yarn test`)