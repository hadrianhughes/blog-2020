require('dotenv').config()

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  host: `${process.env.IS_PREVIEW ? 'preview' : 'cdn'}.contentful.com`
}

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}
