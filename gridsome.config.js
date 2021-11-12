const tailwindcss = require('tailwindcss');

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
      plugins: [],
    },
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },

  plugins: [
    'gridsome-plugin-robots-txt',
    {
      use: 'tailwindcss',
    },
    {
      use: '@gridsome/plugin-sitemap',
    },

    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-156587227-2',
    //   },
    // },
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
        path: '_insights/**/*.md',
        typeName: 'Insights',
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
