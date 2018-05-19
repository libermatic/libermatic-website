const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'libermatic.',
    subtitle: 'Open sourcing humans',
    siteUrl: 'https://libermatic.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
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
