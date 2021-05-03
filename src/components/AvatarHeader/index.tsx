import React from 'react';

import * as Styled from './styled';

const AvatarHeader: React.FC = () => {
	return (
		<Styled.AvatarHeaderWrapper>
			<Styled.AvatarHeaderImage src="/static/images/avatar.png" />
			<Styled.AvatarHeaderText>
				<p>
					personal blog by{' '}
					<a href="https://github.com/guialmorim" target="_blank">
						guilherme almorim
					</a>
					. <br />
					learning code never felt so good.
				</p>
			</Styled.AvatarHeaderText>
		</Styled.AvatarHeaderWrapper>
	);
};

export default AvatarHeader;
