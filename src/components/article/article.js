import React from 'react';

import './article.scss';

class Article extends React.Component {
	render() {
		return  (
			<article>
				<div className="article-title">
					<h2>Lorem Ipsum</h2>
				</div>
				<span className="date-posted">Noveber 25, 2017</span>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia at leo ac pulvinar. Nam dictum venenatis velit, quis facilisis purus sollicitudin a. Quisque vel porttitor nisi, ut vestibulum ligula. Praesent ipsum enim, aliquet ut nibh eget, maximus tincidunt magna. Phasellus neque tortor, blandit ac nibh consectetur, consequat aliquet nunc. Nunc elementum porttitor est, ac dignissim enim consequat vehicula. Vestibulum sed augue et lorem varius interdum. Ut bibendum malesuada lectus pretium porttitor.</p>
				<p>Ut in nisl tincidunt, aliquet lorem sit amet, porttitor eros. Vestibulum odio ex, tempus non cursus in, blandit ac ante. In mollis tellus vitae mauris efficitur, ac tristique elit feugiat. Nulla dolor nisl, viverra eget venenatis et, ultrices non leo. Donec ultrices sollicitudin est, sed tristique lorem. Pellentesque at arcu metus. Suspendisse ut finibus orci. Nunc eu tincidunt lectus, sed ullamcorper mi. Etiam felis est, ultricies eu tellus vitae, eleifend scelerisque orci. Quisque sagittis malesuada felis, vel viverra orci dapibus eu. Maecenas malesuada magna eget pellentesque auctor. Nam lobortis arcu a dignissim sodales. In a rutrum erat.</p> 
			</article>
		);
	}
};

export default Article;
