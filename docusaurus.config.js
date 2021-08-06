/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Solana.Fm Documentation',
  tagline: 'The most robust and performant GraphQL-based analytics engine.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo2.svg',
  organizationName: 'nozomi', // Usually your GitHub org/user name.
  projectName: 'nozomi-ai', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo2.png',
      },
      items: [
        {
          href: 'http://solana.fm',
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
          position: 'left',
          label: 'ChangeLog',
          to: '/blog'
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
            },
            {
              label:'ChangeLog',
              to: '/blog/hello-world'
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Nozomi',
              href: 'https://blog.nozomi.ai/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/nozomi-one/',
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
      copyright: `Copyright © ${new Date().getFullYear()} Nozomi.ai`,
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
