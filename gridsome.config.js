// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ABANA',
  siteUrl: 'https://www.abana.mu',
  siteDescription: "Discover Africa's textile and apparel resources in just a few clicks.",

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

  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: '_careers/**/*.md',
      typeName: 'Careers',
      remark: {},
    },
  },

  {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      publicPath: `/admin`,
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