import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 4rem;
	margin-bottom: 2rem;
	text-transform: lowercase;

	a {
		font-size: ${({ theme }) => theme.fontSize.xs};
		color: ${({ theme }) => theme.accents.a1};
		text-decoration: none;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const FooterLinks = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	span {
		display: inline-block;

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

export const FooterMain = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
	span {
		font-size: ${({ theme }) => theme.fontSize.xxs};
		color: ${({ theme }) => theme.text.accent};
	}
`;

export const FooterInspiration = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
	span {
		font-size: ${({ theme }) => theme.fontSize.xxs};
		color: ${({ theme }) => theme.text.accent};
	}
`;
