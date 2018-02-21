import React from 'react';
import moment from 'moment';

import './article.scss';

class Article extends React.Component {

	getFormattedDate(dateString) {
		return moment(dateString).format('MMM D, Y');
	}

	render() {
		return  (
			<article>
				<div className="article-title">
					<h2>{ this.props.title }</h2>
				</div>
				<span className="date-posted">{ this.getFormattedDate(this.props.date) }</span>
				<div dangerouslySetInnerHTML={{ __html: this.props.body }} />
			</article>
		);
	}

};

export default Article;
