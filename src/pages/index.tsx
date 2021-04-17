import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PostCard from 'components/PostCard';
import AvatarHeader from 'components/AvatarHeader';

interface IndexQueryPost {
	allMarkdownRemark: {
		edges: [
			{
				node: {
					id: string;
					frontmatter: {
						author: string;
						date: string;
						path: string;
						title: string;
						image: string;
						readTime: number;
					};
					excerpt: string;
				};
			}
		];
	};
}

const IndexPage: React.FC<PageProps> = () => {
	const data: IndexQueryPost = useStaticQuery(IndexQuery);

	return (
		<Layout>
			<SEO title="Posts" />
			<AvatarHeader />
			{data.allMarkdownRemark.edges.map((edge) => (
				<PostCard key={edge.node.id} node={edge.node} />
			))}
		</Layout>
	);
};

const IndexQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			edges {
				node {
					id
					frontmatter {
						author
						date
						path
						title
						image
						readTime
					}
					excerpt
				}
			}
		}
	}
`;

export default IndexPage;
