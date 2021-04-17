import styled from 'styled-components';

export const AvatarHeaderWrapper = styled.div`
	display: flex;
	max-width: 420px;
	border: 2px solid red;
	align-items: center;
`;

export const AvatarHeaderImage = styled.img`
	width: 60px;
	height: 60px;
`;

export const AvatarHeaderText = styled.div`
	margin-left: 10px;
	font-family: 'Merriweather', serif;

	a {
		color: ${({ theme }) => theme.accents.a1};
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}

	p {
		font-weight: ${({ theme }) => theme.fontWeight.regular};
		color: ${({ theme }) => theme.text.default};
		margin: 0;
		padding: 0;

		font-size: ${({ theme }) => theme.fontSize.xs};

		@media screen and (max-width: 500px) {
			font-size: 3.2vw;
		}
	}
`;
