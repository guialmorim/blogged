import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.bg.defaultLight};
`;

interface OuterBorderProps {
	open: boolean;
}
export const OuterBorder = styled.div<OuterBorderProps>`
	height: 100vh;
	width: 7px;
	position: fixed;
	top: 0;
	left: ${({ open }) => (open ? 250 : -7)}px;
	z-index: 999;
	transition: all 0.3s;

	background: linear-gradient(
		110deg,
		${({ theme }) => theme.accents.a1},
		${({ theme }) => theme.accents.a2}
	);
`;

interface SidebarProps {
	open: boolean;
}
export const Sidebar = styled.nav<SidebarProps>`
	width: 250px;
	position: fixed;
	top: 0;
	height: 100vh;
	z-index: 999;
	background: ${({ theme }) => theme.bg.default};
	color: ${({ theme }) => theme.text.default};
	transition: all 0.3s;
	left: ${({ open }) => (open ? 0 : -257)}px;
`;

export const OpenMenuButton = styled.a`
	background: ${({ theme }) => theme.bg.button};
	box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2);
	border-radius: 50px;
	color: ${({ theme }) => theme.text.reverse};
	padding: 5px 20px;
	text-decoration: none;
	border: none;
	display: inline-flex;
	justify-content: center;
	letter-spacing: 1px;
	cursor: pointer;

	&:hover {
		opacity: 0.6;
	}
`;

export const DismissButton = styled.div`
	width: 35px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background: ${({ theme }) => theme.bg.button};
	color: ${({ theme }) => theme.text.reverse};
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;

	&:hover {
		opacity: 0.5;
	}
`;

export const SidebarHeader = styled.div`
	padding: 20px;
	background: ${({ theme }) => theme.bg.default};
	color: ${({ theme }) => theme.text.default};
`;

export const SidebarItems = styled.ul`
	padding: 20px 0;

	p {
		color: ${({ theme }) => theme.text.default};
		padding: 10px;
	}

	li a {
		padding: 10px;
		font-size: 1.1em;
		display: block;
	}

	li a:hover {
		color: #7386d5;
		background: #fff;
	}
`;

export const Content = styled.div`
	width: 100%;
	padding: 20px;
	min-height: 100vh;
`;
