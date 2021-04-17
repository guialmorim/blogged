import React from 'react';

import * as Styled from './styled';

const AvatarHeader: React.FC = () => {
	return (
		<Styled.AvatarHeaderWrapper>
			<Styled.AvatarHeaderImage src="/static/avatar.png" />
			<Styled.AvatarHeaderText>
				<p>
					Personal blog by{' '}
					<a href="https://github.com/guialmorim" target="_blank">
						Guilherme Almorim
					</a>
					. <br />I explain with words and code.
				</p>
			</Styled.AvatarHeaderText>
		</Styled.AvatarHeaderWrapper>
	);
};

export default AvatarHeader;
