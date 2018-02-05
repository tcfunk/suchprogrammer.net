import React from 'react';
import Helmet from 'react-helmet';

import '../../sass/style.scss';

const TemplateWrapper = ({children}) => (
	<div className="site">
		<Helmet title="suchprogrammer.net" />
		{children()}
	</div>
);

export default TemplateWrapper;