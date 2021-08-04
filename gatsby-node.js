const path = require('path')
const slugify = require('slugify')

exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions

    const result = await graphql(`
    query getRecipes {
        allContentfulRecipe(
          sort: {fields: title, order: ASC}
          filter: {node_locale: {eq: "en-US"}}
        ) {
          nodes {
            content {
              tags
            }
          }
        }
      }
    `)

    result.data.allContentfulRecipe.nodes.forEach(recipe => {
        recipe.content.tags.forEach((tag) => {
          const tagSlug = slugify(tag, {lower:true})
            createPage({
                path: `/tags/${tagSlug}`,
                component: path.resolve('src/templates/tag-template.js'),
                context: {
                    tag: tag
                }
            })
        })
    })

    const pagesResult = await graphql(`
    query MyQuery {
      allContentfulPages(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          title
          slug
        }
      }
    }
    `)

    pagesResult.data.allContentfulPages.nodes.forEach(page => {
      createPage({
        path: `/${page.slug}`,
        component: path.resolve('src/templates/page-template.js'),
        context: {
            slug: page.slug
        }
    })
    })
}