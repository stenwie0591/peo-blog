import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const {
    allMarkdownRemark: { totalCount, edges },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>I Miei Pensieri</h1>
        <h4>{totalCount}</h4>
        {edges.map(({ node: { id, frontmatter: { title, date }, excerpt } }) => (
          <div key={id}>
            <span>
              {title} - {date}
            </span>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`
