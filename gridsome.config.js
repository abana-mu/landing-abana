// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  siteName: 'ABANA',
  siteUrl: 'https://www.abana.mu',
  siteDescription:
    "Africa's Textile and Apparel Industry, at your fingertips. ABANA is an online Sourcing & E-Commerce Platform that shines a light on the Indian Ocean & African Textile & Apparel industry and connects it to the World.",

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },
  /*
chainWebpack: config => {
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule
    .use('vue-svg-loader')
    .loader('vue-svg-loader')
},


  chainWebpack: (config) => {
    config
      .plugin('BundleAnalyzerPlugin')
      .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }]);
  },
*/
  plugins: [
    'gridsome-plugin-robots-txt',

    {
      use: '@gridsome/plugin-sitemap',
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-156587227-2',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_careers/**/*.md',
        typeName: 'Careers',
        remark: {},
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_press/**/*.md',
        typeName: 'Press',
        remark: {},
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_testimonials/**/*.md',
        typeName: 'Testimonials',
        remark: {},
      },
    },

    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        plugins: [`netlify-cms-widget-color`],
      },
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: './src/assets/_variables.scss',
      },
    },
  ],
};
