import React from 'react';
import { PageProps } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const TagsPage: React.FC<PageProps> = () => (
	<Layout>
		<SEO title="Tags" />
		<h1>Tags Page</h1>
	</Layout>
);

export default TagsPage;
