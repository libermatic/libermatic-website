const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'libermatic.',
    subtitle: 'Open sourcing humans',
    siteUrl: 'https://libermatic.com',
    contactFormEndpoint: process.env.ERPNEXT_SENDMSG || '',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'libermatic. - Open sourcing humans',
        short_name: 'libermatic',
        start_url: '/',
        background_color: '#ffdd57',
        theme_color: '#2196f3',
        display: 'minimal-ui',
        icon: `${__dirname}/src/media/libermatic-v2.svg`,
        icons: [
          {
            src: '/favicons/libermatic-v2-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/libermatic-v2-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/src/media`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
};
