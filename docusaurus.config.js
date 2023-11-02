// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Define requirements for math and katex
const math = require('remark-math');
const katex = require('rehype-katex');



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eclipse Phase: Sanctuary Amongst The Stars',
  tagline: 'A campaign website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaelynj', // Usually your GitHub org/user name.
  projectName: 'sanctuary-amongst-the-stars', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          editUrl:
            'https://github.com/kaelynj/sanctuary-amongst-the-stars',
          
          // Add in support for katex equations
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kaelynj/sanctuary-amongst-the-stars',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  //Include KaTeX CSS config under stylesheets
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EP: SATS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gameSidebar',
            position: 'left',
            label: 'Game Mechanics',
          },
          {
            type: 'docSidebar',
            sidebarId: 'loreSidebar',
            position: 'left',
            label: 'World Information',
          },
          {
            type: 'docSidebar',
            sidebarId: 'playerSidebar',
            position: 'left',
            label: 'Player Resources',
          },
          {to: '/blog', label: 'Campaign Journal', position: 'left'},
          {
            href: 'https://github.com/kaelynj/sanctuary-amongst-the-stars/',
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
                label: 'Game Mechanics',
                to: '/docs/Game Mechanics/getting-started',
              },
              {
                label: 'Player Resources',
                to: '/docs/Player Resources',
              },
              {
                label: 'World Information',
                to: '/docs/World Information',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Campaign Journal',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kaelynj/sanctuary-amongst-the-stars',
              },
            ],
          },
        ],
        copyright: `Creative Commons Attribution-NonCommercial-ShareAlike 4.0 License \u1F16D\u1F16F\u1F10F\u1F10E \n Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};


module.exports = config;
