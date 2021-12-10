/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Solana.FM Documentation',
  tagline: 'Query Solana with GraphQL.',
  url: 'https://docs.solana.fm',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo2.svg',
  organizationName: 'nozomi-ai', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'SolanaFM Logo',
        src: 'img/logo2.png',
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
          href: 'https://github.com/nozomi-ai',
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
              label: 'Nozomi',
              href: 'https://blog.solana.fm/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/solanafm',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Mxpyr8Qy'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nozomi-ai'
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
            'https://github.com/nozomi-ai/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
