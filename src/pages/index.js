import React from 'react';
import Link from 'gatsby-link';

import Article from '../components/article/article';


class Home extends React.Component {
	render() {
		return (
			<div>
				{ this.props.data.allMarkdownRemark.edges.map(({ node }) => {
					return (
						<Article
							slug={node.fields.slug}
							date={node.frontmatter.date}
							title={node.frontmatter.title}
							body={node.html} />
					);
				})}
			</div>
		)
	}
}

export default Home;

export const query = graphql`
query AllBlogPostQuery {
  allMarkdownRemark(
    filter: { frontmatter: { published: { eq: true } } }
    sort: {fields: [frontmatter___date], order: DESC }
  ) {
		totalCount
    edges {
      node {
        frontmatter {
          title
          date
        }
        fields {
          slug
				}
				html
      }
    }
  }
}
`;
