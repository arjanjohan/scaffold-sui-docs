import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import fs from "node:fs";
import path from "node:path";

const config: Config = {
  title: '🏗 Scaffold IOTA Docs',
  tagline: 'Open-source toolkit for building on IOTA',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scaffold-iota-docs.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    // [
      // '@cmfcmf/docusaurus-search-local',
      // {
      //   indexBlog: false,
      //   includeParentCategoriesInPageTitle: true,
      // },

    // ],
    async function pluginLlmsTxt(context) {
      return {
        name: "llms-txt-plugin",
        loadContent: async () => {
          const { siteDir } = context;
          const contentDir = path.join(siteDir, "docs");
          const allMdx: string[] = [];

          // recursive function to get all mdx files
          const getMdxFiles = async (dir: string) => {
            const entries = await fs.promises.readdir(dir, { withFileTypes: true });

            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                await getMdxFiles(fullPath);
              } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
                const content = await fs.promises.readFile(fullPath, "utf8");
                allMdx.push(content);
              }
            }
          };

          await getMdxFiles(contentDir);
          return { allMdx };
        },
        postBuild: async ({ content, routes, outDir }) => {
          const { allMdx } = content as { allMdx: string[] };

          // Create a structured overview
          const overview = `# Scaffold IOTA

Everything you need to build dApps on IOTA. A modern, clean toolkit for creating and deploying Move smart contract and building user interfaces that interact seamlessly with these contracts.

## High level overview

### Smart Contract Read and Write Operations Patterns

- Read: useView (packages/nextjs/hooks/scaffold-iota/useView.ts)
- Write: useSubmitTransaction (packages/nextjs/hooks/scaffold-iota/useSubmitTransaction.ts)
- Objects: useGetObject (packages/nextjs/hooks/scaffold-iota/useGetObject.ts)

You have all the details of our custom hooks in the \`## Hooks\` section from this file.

### Best Practice Guidance for Components usage

Use Scaffold IOTA components whenever it makes sense, they are located in \`packages/nextjs/components/scaffold-iota\`. You have all the details about components in the \`## Components\` section from this file.

### UI/Design System

Styling Framework:
- Base: Tailwind CSS
- Components: DaisyUI
- Icons: Heroicons

### Core Features

* 🛫 **Deployment Scripts**: Simplify and automate your deployment workflow
* ✅ **Hot Contract Reload**: Your frontend automatically adapts to changes in your smart contracts
* 🪝 **Custom Hooks**: A collection of React hooks to simplify interactions with the IOTA blockchain
* 🧱 **Components**: A library of common Web3 components to rapidly build your frontend
* 🔐 **Wallet Integration**: Connect to any IOTA compatible wallet and interact with the IOTA blockchain

## Components

${allMdx.filter(content => content.includes('sidebar_position: 1') && content.includes('components/')).join('\n\n')}

## Hooks

${allMdx.filter(content => content.includes('hooks/')).join('\n\n')}

## Utils

${allMdx.filter(content => content.includes('utils/')).join('\n\n')}

## Getting Started

${allMdx.filter(content => content.includes('quickstart') || content.includes('intro/')).join('\n\n')}

## Going Live

${allMdx.filter(content => content.includes('going-live/')).join('\n\n')}

## Contributing

${allMdx.filter(content => content.includes('contributing/')).join('\n\n')}`;

          // Write the structured content
          const concatenatedPath = path.join(outDir, "llms-full.txt");
          await fs.promises.writeFile(concatenatedPath, overview);

          // we need to dig down several layers:
          // find PluginRouteConfig marked by plugin.name === "docusaurus-plugin-content-docs"
          const docsPluginRouteConfig = routes.filter(
            (route) => route.plugin.name === "docusaurus-plugin-content-docs"
          )[0];

          // docsPluginRouteConfig has a routes property has a record with the path "/" that contains all docs routes.
          const allDocsRouteConfig = docsPluginRouteConfig.routes?.filter(
            (route) => route.path === "/"
          )[0];

          // A little type checking first
          if (!allDocsRouteConfig?.props?.version) {
            return;
          }

          // this route config has a `props` property that contains the current documentation.
          const currentVersionDocsRoutes = (
            allDocsRouteConfig.props.version as Record<string, unknown>
          ).docs as Record<string, Record<string, unknown>>;

          // for every single docs route we now parse a path (which is the key) and a title
          const docsRecords = Object.entries(currentVersionDocsRoutes).map(([path, record]) => {
            return `- [${record.title}](${path}): ${record.description}`;
          });

          // Build up llms.txt file
          const llmsTxt = `# ${context.siteConfig.title}\n\n## Docs\n\n${docsRecords.join("\n")}`;

          // Write llms.txt file
          const llmsTxtPath = path.join(outDir, "llms.txt");
          try {
            fs.writeFileSync(llmsTxtPath, llmsTxt);
          } catch (err) {
            throw err;
          }
        },
      };
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {

        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: "/",
          // sidebarCollapsible: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-small.png',
    navbar: {
      title: '🏗 Scaffold IOTA Docs',
      items: [
        {
          href: 'https://github.com/arjanjohan/scaffold-iota',
          label: 'GitHub Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/arjanjohan/scaffold-iota-docs',
          label: 'GitHub Scaffold IOTA',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Built by arjanjohan',
          items: [
            {
              label: 'X',
              href: 'https://x.com/arjanjohan',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/arjanjohan/',
            },
          ]
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Scaffold IOTA',
              href: 'https://github.com/arjanjohan/scaffold-iota',
            },
            {
              label: 'Docs',
              href: 'https://github.com/arjanjohan/scaffold-iota-docs',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} arjanjohan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
