/* eslint-disable camelcase */
module.exports = {
  plugins: [
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#663399`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`
  ],
  siteMetadata: {
    author: ``,
    description: ``,
    title: ``,
  },
};
