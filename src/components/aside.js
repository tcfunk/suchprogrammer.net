import React from 'react';
import Link from 'gatsby-link'

import './aside.scss';

class Sidebar extends React.Component {
	render() {
		return (
			<aside>
				<figure>
					<img className="circle" src="http://tasteofmanchester.com/media/news/toast_main.jpg" alt="me"/>
				</figure>

				<h1 className="name-header">Tyler Funk</h1>

				<p>House Funk, Second of His Name, Wielder of Code, Biker of Paths, Father of Babby</p>

				<nav>
					<ul>
						<li><Link to="blog">Articles</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="contact">Contact</Link></li>
					</ul>
				</nav>
			</aside>
		);
	}
};

export default Sidebar;
