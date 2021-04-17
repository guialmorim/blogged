import React from 'react';
import { PageProps } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const AboutPage: React.FC<PageProps> = () => (
	<Layout>
		<SEO title="About" />
		<h1>About Page</h1>
	</Layout>
);

export default AboutPage;
