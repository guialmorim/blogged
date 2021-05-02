import React from 'react';
import { GoMailRead } from 'react-icons/go';

import * as Styled from './styled';

const GetInTouch: React.FC = () => {
	return (
		<Styled.Wrapper>
			<Styled.Text>
				<h1>Subscribe to the Newsletter</h1>
				<p>Subscribe to get my latest content by email.</p>
				<GoMailRead />
			</Styled.Text>
			<Styled.Form>
				<form>
					<input type="text" placeholder="Your first name" />
					<input type="text" placeholder="Your email address" />
				</form>
				<button type="submit">Send</button>
				<p>Contact me any time.</p>
			</Styled.Form>
		</Styled.Wrapper>
	);
};

export default GetInTouch;
