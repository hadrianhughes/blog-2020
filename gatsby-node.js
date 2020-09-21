const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pagesQuery = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            title
            path
            createdAt(formatString: "DD MMM YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)

  const articles =
    pagesQuery
      .data
      .allContentfulArticle
      .edges
      .map(({ node }) => node)

  articles.forEach(article => {
    createPage(
      {
        path: article.path,
        component: path.resolve('./src/templates/article.tsx'),
        context: {
          pagePath: article.path
        }
      }
    )
  })
}
