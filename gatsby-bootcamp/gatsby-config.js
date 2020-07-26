/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata : {
    title : 'Alejo\'s site',
    author: 'M.Sc. Edwin Alejandro Zarate Orjuela'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
