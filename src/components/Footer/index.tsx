import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import * as Styled from './styled';

const Footer: React.FC = () => {
	return (
		<Styled.FooterContainer>
			<Styled.FooterLinks>
				<span>
					<a target="_blank" href="https://www.instagram.com/guii.almorim/">
						Instagram
					</a>
				</span>
				<span>
					<a target="_blank" href="https://github.com/guialmorim">
						GitHub
					</a>
				</span>
				<span>
					<a target="_blank" href="https://www.linkedin.com/in/gui-almorim/">
						LinkedIn
					</a>
				</span>
			</Styled.FooterLinks>
			<Styled.FooterMain>
				<span>
					Made With <AiFillHeart /> by{' '}
					<a target="_blank" href="https://github.com/guialmorim">
						Gui Almorim
					</a>
				</span>
			</Styled.FooterMain>
			<Styled.FooterInspiration>
				<span>
					Inspired by{' '}
					<a target="_blank" href="https://overreacted.io">
						Overreacted
					</a>
				</span>
			</Styled.FooterInspiration>
		</Styled.FooterContainer>
	);
};

export default Footer;
