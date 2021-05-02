import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	border-radius: ${({ theme }) => theme.borderRadius};
	overflow: hidden;

	${({ theme }) =>
		theme.title === 'light'
			? css`
					box-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.5);
			  `
			: null};

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Text = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.bg.defaultLight};
	color: ${({ theme }) => theme.text.default};
	padding: 40px;

	${({ theme }) =>
		theme.title === 'light'
			? null
			: css`
					filter: brightness(1.1);
			  `};

	h1 {
		font-size: 1.25rem;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		line-height: 22px;
	}

	p {
		font-size: 1rem;
		line-height: 28px;
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		margin-top: 1rem;
	}

	svg {
		width: 46px;
		height: 46px;
		color: ${({ theme }) => theme.accents.a1};
	}
`;

export const Form = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.bg.default};
	color: ${({ theme }) => theme.text.default};
	padding: 40px;

	input {
		padding: 1rem;
		border-radius: 4px;
		border: 1px solid rgb(227, 227, 227);
		color: rgb(0, 0, 0);
		font-weight: 400;
		width: 100%;
		margin-bottom: 1rem;
	}

	button {
		background: ${({ theme }) => theme.bg.button};
		box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2);
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: 0.9375rem;
		border-radius: 50px;
		color: ${({ theme }) => theme.text.reverse};
		padding: 10px 30px;
		text-decoration: none;
		border: none;
		display: inline-flex;
		justify-content: center;
		letter-spacing: 1px;
		transition: all 0.3s ease-in-out;

		&:hover {
			opacity: 0.6;
		}
	}

	p {
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		font-size: 0.8125rem;
		margin-top: 1rem;
		margin-bottom: 0;
	}
`;
