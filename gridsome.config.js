const tailwindcss = require('tailwindcss');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

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

  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/'],
          {
            // options
          }
        ),
      ],
    };
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
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-KKSWQSK',
        enabled: true,
        debug: true,
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
