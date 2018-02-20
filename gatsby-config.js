module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/posts/`
			}
		},
		`gatsby-transformer-remark`
	]
}