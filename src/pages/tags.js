import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from 'gatsby'
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import Seo from "../components/SEO"

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <Seo title="Tags" />

      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text, {lower:true})

            return (
              <Link key={index} to={`/tags/${tagSlug}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe{value > 1 && 's'}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
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
`

export default Tags