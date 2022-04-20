/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Quick Start · SolanaFM Docs',
  tagline: 'Query Solana with GraphQL.',
  url: 'https://docs.solana.fm',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/transparent_logo.png',
  organizationName: 'solana-fm', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'SolanaFM Logo',
        src: 'img/transparent_logo.png',
      },
      items: [
        {
          href: 'https://solana.fm',
          label:'Home',
          position:'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/solana-fm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Develop',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'SolanaFM',
              href: 'https://blog.solana.fm/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/solanafm',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/dGAjqRfESF'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/solana-fm'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Solana FM.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/solana-fm/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
