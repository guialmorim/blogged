import styled from 'styled-components';

export const PostWrapper = styled.div`
	.post__content {
		margin-top: 3.5rem;

		pre code {
			background: ${({ theme }) => theme.bg.default};
			color: ${({ theme }) => theme.text.default};
			font-family: 'Fira Code', monospace;
			font-weight: 500;
			padding: 1.5rem;
			border-radius: ${({ theme }) => theme.borderRadius};
			margin: 1rem 0;
		}

		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-top: 2rem;
			margin-bottom: 1.3rem;
			font-weight: ${({ theme }) => theme.fontWeight.semibold};
			color: ${({ theme }) => theme.text.default};
		}

		p {
			color: ${({ theme }) => theme.text.default};
			text-align: justify;
		}
	}
`;

export const PostTitle = styled.h1`
	color: ${({ theme }) => theme.text.default};
	margin-top: 3rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;
`;

export const FooterTitle = styled.a`
	color: ${({ theme }) => theme.accents.a1};
	font-family: 'Montserrat', sans-serif;
	font-weight: 900;
	font-size: 1.4375rem;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.accents.a1};
	}
`;

export const PostSubtitle = styled.div`
	color: ${({ theme }) => theme.text.default};

	span {
		text-transform: capitalize;
		font-family: 'Merriweather', serif;

		& + span {
			margin-left: 1rem;
			padding-left: 1rem;
			position: relative;

			&::before {
				content: '';
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background: ${({ theme }) => theme.bg.button};
				position: absolute;
				left: 0;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
`;
