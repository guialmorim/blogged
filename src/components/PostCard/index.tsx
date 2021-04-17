import React from 'react';
import { Link } from 'gatsby';
import * as Styled from './styled';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface IProps {
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

const Card: React.FC<IProps> = ({ node }) => {
	const formattedDate = format(
		new Date(node.frontmatter.date),
		'MMMM dd, yyyy',
		{ locale: ptBR }
	);

	return (
		<Styled.CardPost>
			<Styled.CardPostContent>
				<Styled.CardPostContentImage>
					<img src={`/static/${node.frontmatter.image}`} />
				</Styled.CardPostContentImage>

				<Styled.CardPostContentText>
					<Styled.CardPostContentTextDate>
						{formattedDate} {' • '} {node.frontmatter.readTime} minutos
					</Styled.CardPostContentTextDate>
					<Styled.CardPostContentTextTitle>
						{node.frontmatter.title}
					</Styled.CardPostContentTextTitle>
					<Styled.CardPostContentTextDescription>
						{node.excerpt}
					</Styled.CardPostContentTextDescription>
					<Styled.CardPostContentTextFooter>
						<Link to={node.frontmatter.path}>READ MORE</Link>
					</Styled.CardPostContentTextFooter>
				</Styled.CardPostContentText>
			</Styled.CardPostContent>
		</Styled.CardPost>
	);
};

export default Card;
