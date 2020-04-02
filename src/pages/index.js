import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

export default ({ data }) => {
  const {
    allMarkdownRemark: { totalCount, edges },
  } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>I Miei Pensieri</h1>
        <h4>{totalCount}</h4>
        {edges.map(({ node: { id, frontmatter: { title, date }, excerpt, fields: { slug } } }) => (
          <div key={id}>
            <BlogLink to={slug}>
              <BlogTitle>
                {title} - {date}
              </BlogTitle>
            </BlogLink>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
