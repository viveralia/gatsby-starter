/* eslint-disable camelcase */
module.exports = {
  plugins: [
    {
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        component: require.resolve(`./src/layouts/theme.layout.tsx`),
      },
      resolve: `gatsby-plugin-layout`,
    },
    // Also needs to be changed inside typography.config.theme.ts
    {
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
      resolve: `gatsby-plugin-webfonts`,
    },
    // {
    //   options: {
    //     background_color: ``,
    //     display: `minimal-ui`,
    //     icon: `src/assets/pwa-icon.svg`,
    //     include_favicon: false,
    //     name: ``,
    //     short_name: ``,
    //     start_url: `/`,
    //     theme_color: ``,
    //     theme_color_in_head: false,
    //   },
    //   resolve: `gatsby-plugin-manifest`,
    // },
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
