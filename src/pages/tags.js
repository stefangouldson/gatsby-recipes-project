import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from 'gatsby'
import setupTags from "../utils/setupTags"

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link key={index} to={`/${text}`} className="tag">
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