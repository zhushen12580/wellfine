// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WELLFINE',
  tagline: '做最好的硅胶家居用品！',
  favicon: 'img/文锋logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wellfine', // Usually your GitHub org/user name.
  projectName: 'wellfine', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WELLFINE',
        logo: {
          alt: 'wellfine logo',
          src: 'img/文锋logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '产品目录',
          },
          { to: '/blog', label: '新品上市', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '合作品牌',
            items: [
              {
                label: '迪士尼',
                to: '/docs/intro',
              },
              {
                label: '宜家',
                to: '/docs/intro',
              },
              {
                label: '特斯拉',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '电商平台',
            items: [
              {
                label: '阿里巴巴国际站',
                href: 'https://wellfine.en.alibaba.com/index.html?spm=a2700.shop_cp.88.10.532772deFUmg4a',
              },
              {
                label: '1688国内站',
                href: 'https://wellfinesilicone.1688.com/?spm=a26352.13672862.offerlist.8.11e91e62l5X7tW',
              },
              {
                label: '独立站',
                href: 'https://www.silicocobaby.com/',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: '电话',
                href: 'tel:15675889553',
              },
              {
                label: '邮箱',
                href: 'mailto:zhuhao@silicocobaby.com',
              },
              {
                label: '地址',
                href: 'https://map.baidu.com/poi/%E4%B8%9C%E8%8E%9E%E5%B8%82%E6%96%87%E9%94%8B%E7%A1%85%E8%83%B6%E5%88%B6%E5%93%81%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@12647283.133554127,2604981.0132617205,19z?uid=f10b8c84bce81464f5c59cdb&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
