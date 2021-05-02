import React from 'react';
import { Link } from 'gatsby';
import * as Styled from './styled';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
//@ts-ignore
import { slugify } from 'utils/slugifyString';

interface IProps {
	node: {
		id: string;
		frontmatter: {
			author: string;
			date: string;
			title: string;
			tags: string[];
			image: string;
			readTime: number;
		};
		fields: {
			slug: string;
		};
		excerpt: string;
	};
}

const Card: React.FC<IProps> = ({ node }) => {
	const formattedDate = format(
		new Date(node.frontmatter.date),
		'MMMM dd, yyyy',
		{ locale: ptBR }
	);

	return (
		<Styled.CardPost>
			<Styled.CardPostContent>
				<Link to={node.fields.slug}>
					<Styled.CardPostContentImage>
						<img src={`/static/${node.frontmatter.image}`} />
					</Styled.CardPostContentImage>
				</Link>

				<Styled.CardPostContentText>
					<Styled.CardPostContentTextDate>
						{formattedDate} {' • '} {node.frontmatter.readTime} minutos
					</Styled.CardPostContentTextDate>
					<Styled.CardPostContentTextTitle>
						<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
					</Styled.CardPostContentTextTitle>
					<Styled.CardPostContentTextDescription>
						<Link to={node.fields.slug}>{node.excerpt}</Link>
					</Styled.CardPostContentTextDescription>

					<Styled.CardPostContentFooterContent>
						<Styled.CardPostContentTextFooter>
							<Link to={node.fields.slug}>Read More</Link>
						</Styled.CardPostContentTextFooter>

						<Styled.CardPostContentTags>
							{node.frontmatter.tags.map((tag) => (
								<Link key={tag} to={`/${slugify(tag)}`}>
									<Styled.CustomBadge>{tag}</Styled.CustomBadge>
								</Link>
							))}
						</Styled.CardPostContentTags>
					</Styled.CardPostContentFooterContent>
				</Styled.CardPostContentText>
			</Styled.CardPostContent>
		</Styled.CardPost>
	);
};

export default Card;
