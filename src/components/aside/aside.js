import React from 'react';
import Link from 'gatsby-link'

import './aside.scss';
import logo from './tyler-circle-crop.png';

class Sidebar extends React.Component {
	render() {
		return (
			<aside>
				<figure>
					<img className="circle" src={logo} alt="me"/>
				</figure>

				<h1 className="name-header">Tyler Funk</h1>

				<p>House Funk, Second of His Name, Wielder of Code, Biker of Paths, Father of Babby</p>

				<nav>
					<ul>
						<li><Link activeClassName="current" to="/">Articles</Link></li>
						<li><Link activeClassName="current" to="about">About</Link></li>
						<li><Link activeClassName="current" to="contact">Contact</Link></li>
					</ul>
				</nav>
			</aside>
		);
	}
};

export default Sidebar;
