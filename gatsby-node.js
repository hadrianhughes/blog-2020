const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pagesQuery = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  const articlePaths =
    pagesQuery
      .data
      .allContentfulArticle
      .edges
      .map(({ node }) => node.path)

  articlePaths.forEach(articlePath => {
    createPage(
      {
        path: articlePath,
        component: path.resolve('./src/templates/article.tsx'),
        context: {
          pagePath: articlePath
        }
      }
    )
  })
}
