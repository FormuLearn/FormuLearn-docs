// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FormuLearn Docs',
  tagline: "FormuLearn's Open Source Projects!",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.formulearn.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FormuLearn', // Usually your GitHub org/user name.
  projectName: 'FormuLearn docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'monthly',
          // default priority—will get overridden below
          priority: 0.5,
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            return items
              // 1. remove pagination URLs
              .filter((item) => !item.url.includes('/page/'))
              // 2. normalize & override priority
              .map((item) => {
                // extract path and remove trailing slash
                let pathname = new URL(item.url).pathname;
                if (pathname !== '/' && pathname.endsWith('/')) {
                  pathname = pathname.slice(0, -1);
                }

                const isRoot = pathname === '/';
                const isProjectsIndex = pathname === '/docs/projects';
                // exactly one segment under /docs/projects
                const isSubProjectIndex = /^\/docs\/projects\/[^/]+$/.test(pathname);

                item.priority = (isRoot || isProjectsIndex || isSubProjectIndex) ? 1.0 : 0.5;
                return item;
              });
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        style: 'dark',
        title: 'FormuLearn Docs',
        logo: {
          alt: 'FormuLearn Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            href: 'https://github.com/FormuLearn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Projects',
                to: '/docs/projects',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/FormuLearn',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/FormuLearn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FormuLearn B.V. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;