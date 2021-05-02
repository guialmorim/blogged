import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AvatarHeader from 'components/AvatarHeader';
import * as Styled from './styled';

//@ts-ignore
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atelier-dune-dark.css';
//@ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';
import GetInTouch from 'components/GetInTouch';
hljs.registerLanguage('javascript', javascript);

const PostTemplate: React.FC = ({ data }: any) => {
	const post = data.markdownRemark;

	const formattedDate = format(
		new Date(post.frontmatter.date),
		'MMMM dd, yyyy',
		{ locale: ptBR }
	);

	useEffect(() => {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}, []);

	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<Styled.PostWrapper>
				<Styled.PostTitle>{post.frontmatter.title}</Styled.PostTitle>
				<Styled.PostSubtitle>
					<span>{formattedDate}</span>
					<span>{post.frontmatter.readTime} min</span>
				</Styled.PostSubtitle>
				<div
					className="post__content"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</Styled.PostWrapper>
			<div className="my-4">
				<GetInTouch />
			</div>
			<div className="mt-5">
				<Link to="/">
					<Styled.FooterTitle>Blogged</Styled.FooterTitle>
				</Link>
			</div>
			<div className="mt-3">
				<AvatarHeader />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				author
				date
				readTime
			}
		}
	}
`;

export default PostTemplate;
