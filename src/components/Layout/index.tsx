import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { darkTheme, lightTheme } from 'themes';
import usePersistedState from 'hooks/usePersistedState';
import StyledGlobalStyle from 'styles/StyledGlobalStyle';
import Switcher from 'components/Switcher';
import 'styles/index.scss';
import * as Styled from './styled';

const Layout: React.FC = ({ children }) => {
	const [open, setOpen] = useState(false);

	const [theme, setTheme] = usePersistedState<DefaultTheme>(
		'blogged:theme',
		lightTheme
	);

	const [checked, setChecked] = useState(theme.title === 'dark');

	function handleChange(value: boolean) {
		setChecked(value);
		setTheme(value ? darkTheme : lightTheme);
	}

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<ThemeProvider theme={theme}>
			<StyledGlobalStyle />
			<Styled.Wrapper>
				<Styled.OuterBorder open={open}>
					<Styled.Sidebar open={open}>
						<Styled.DismissButton
							className="rounded"
							onClick={() => setOpen(!open)}
						>
							<FaArrowLeft />
						</Styled.DismissButton>

						<Styled.SidebarHeader>
							<h3>
								<Link to="/">{data.site.siteMetadata.title}</Link>
							</h3>
						</Styled.SidebarHeader>

						<Styled.SidebarItems className="list-unstyled">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/tags">Tags</Link>
							</li>
							<li>
								<Link to="/team">Team</Link>
							</li>
						</Styled.SidebarItems>
					</Styled.Sidebar>
				</Styled.OuterBorder>

				<Styled.Content>
					<div className="container d-flex justify-content-between my-3 border border-success">
						<Styled.OpenMenuButton onClick={() => setOpen(!open)}>
							Menu
						</Styled.OpenMenuButton>
						<Switcher checked={checked} handleChange={handleChange} />
					</div>
					<main className="container border border-primary">{children}</main>
				</Styled.Content>
			</Styled.Wrapper>
		</ThemeProvider>
	);
};

export default Layout;
