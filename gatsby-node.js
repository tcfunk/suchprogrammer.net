const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators;

	switch(node.internal.type) {
		case 'MarkdownRemark':
			const slug = createFilePath({ node, getNode, basePath: `pages`});
			createNodeField({
				node,
				name: `slug`,
				value: slug,
			});
			break;
	}	
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve, reject) => {
		graphql(`
		{
			allMarkdownRemark(
				filter: { frontmatter: { published: { eq: true } } }
				sort: { fields: [frontmatter___date], order: DESC }
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
		`).then(result => {
			result.data.allMarkdownRemark.edges.forEach(({ node }) => {
				createPage({
					path: node.fields.slug,
					component: path.resolve(`./src/components/article/index.js`),
					context: {
						slug: node.fields.slug,
					}
				});
			});
			resolve();
		});
	});
};
