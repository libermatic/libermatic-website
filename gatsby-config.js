const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'libermatic',
    subtitle: 'Open sourcing humans',
  },
  plugins: [
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
