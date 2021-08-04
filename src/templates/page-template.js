import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const PagesTemplate = ({data}) => {
    console.log(data)
    const page = data.contentfulPages
    return (
        <Layout>
            <h1>{page.title}</h1>
        </Layout>
    )
}

export const query = graphql`
query MyQuery($slug: String) {
    contentfulPages(slug: {eq: $slug}){
          title
    }
  }
`

export default PagesTemplate
