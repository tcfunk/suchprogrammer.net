import React from 'react';
import Helmet from 'react-helmet';

import Aside from '../components/aside/aside';

import '../../sass/style.scss';

const TemplateWrapper = ({children}) => (
	<div className="site">
		<Helmet title="suchprogrammer.net" />

		<div className="aside">
			<Aside></Aside>
		</div>

		<div className="social">
			Social icons
		</div>

		<div className="copyright">
			Copyright clause
		</div>

		<div className="main">
			{children()}
		</div>
	</div>
);

export default TemplateWrapper;