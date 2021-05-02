import { Badge } from 'reactstrap';
import styled from 'styled-components';

export const CardPost = styled.div`
	background-color: ${({ theme }) => theme.bg.default};
	border-radius: 10px;
	margin-top: 1rem;
	margin-bottom: 2.5rem;
	width: 100%;
	position: relative;
	box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
	padding: 25px;
	border-radius: 25px;
	transition: all 0.3s;
	display: flex;
	align-items: center;
	height: 400px;

	@media screen and (max-width: 768px) {
		height: 520px;
	}

	@media screen and (max-width: 300px) {
		height: 500px;
	}
`;

export const CardPostContent = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const CardPostContentImage = styled.div`
	width: 300px;
	height: 300px;
	transform: translateX(-60px);

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 300px;
		transform: translateX(0) translateY(-30px);
	}

	@media screen and (max-width: 420px) {
		height: 175px;
	}

	box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 20px;
		transition: all 0.3s;
	}
`;

export const CardPostContentText = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 20px;
`;

export const CardPostContentTextDate = styled.small`
	font-size: ${({ theme }) => theme.fontSize.xxs};
	font-weight: 500;
	text-transform: capitalize;
	color: ${({ theme }) => theme.text.accent};
`;

export const CardPostContentTextTitle = styled.div`
	font-weight: 700;
	color: ${({ theme }) => theme.text.default};
	margin-bottom: 20px;

	font-size: ${({ theme }) => theme.fontSize.md};

	@media screen and (max-width: 500px) {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
`;

export const CardPostContentTextDescription = styled.p`
	color: ${({ theme }) => theme.text.accent};
	margin-bottom: 15px;
	line-height: 1.5em;
	font-size: ${({ theme }) => theme.fontSize.xs};

	@media screen and (max-width: 500px) {
		font-size: ${({ theme }) => theme.fontSize.xxs};
	}
`;

export const CardPostContentTags = styled.div`
	display: flex;
	align-items: center;
`;

export const CustomBadge = styled(Badge)`
	background: ${({ theme }) => theme.bg.button};
	color: ${({ theme }) => theme.text.reverse};
	margin-right: 1rem;
	@media screen and (max-width: 500px) {
		margin-top: 1.5rem;
	}
`;

export const CardPostContentFooterContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const CardPostContentTextFooter = styled.div`
	a {
		background: ${({ theme }) => theme.bg.button};
		box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2);
		font-weight: 400;
		border-radius: 50px;
		color: ${({ theme }) => theme.text.reverse};
		padding: 10px 30px;
		text-decoration: none;
		border: none;
		display: inline-flex;
		justify-content: center;
		letter-spacing: 1px;

		&:hover {
			opacity: 0.6;
		}
	}
`;
