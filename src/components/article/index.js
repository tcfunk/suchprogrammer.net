import React from 'react';

import Article from './article';


export default ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Article
			slug={post.fields.slug}
			date={post.frontmatter.date}
			title={post.frontmatter.title}
			body={post.html} />
	);
}

export const query = graphql`
query BlogPostQuery($slug: String!) {
	markdownRemark(fields: {slug: { eq: $slug }}) {
		html
		fields {
			slug
		}
		frontmatter {
			title
			date
		}
	}
}
`;
