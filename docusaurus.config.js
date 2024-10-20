// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';


// Define requirements for math and katex
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eclipse Phase: Sanctuary Amongst The Stars',
  tagline: 'A campaign website',
  favicon: 'img/favicon.ico',
  // @ts-ignore
  trailingSlash: 'true',

  // Set the production url of your site here
  url: 'https://kaelynj.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sanctuary-amongst-the-stars/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaelynj', // Usually your GitHub org/user name.
  projectName: 'sanctuary-amongst-the-stars', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
            label: 'Game mechanics',
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
                to: '/docs/game-mechanics/getting-started',
              },
              {
                label: 'Player Resources',
                to: '/docs/player-resources',
              },
              {
                label: 'World Information',
                to: '/docs/world-information',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


module.exports = config;
