import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"

const TagTemplate = ({data, pageContext}) => {
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
           <SEO title={pageContext.tag} />

            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                    <RecipesList recipes={recipes} />
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
query getRecipesByTag($tag:String) {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {node_locale: {eq: "en-US"}, content: {tags: {eq: $tag}}}
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
