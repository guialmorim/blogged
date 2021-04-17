import React, { useState } from 'react';
import Switch from 'react-switch';
import { FiSun, FiMoon } from 'react-icons/fi';

interface IProps {
	checked: boolean;
	handleChange(value: boolean): void;
}

const Switcher: React.FC<IProps> = ({ checked, handleChange }) => {
	const color = checked ? '#8983f7' : '#fd3838';

	return (
		<Switch
			checkedIcon={
				<img
					src="/icons/crescent-moon.png"
					style={{ marginLeft: '8px', marginTop: '2px' }}
				/>
			}
			uncheckedIcon={
				<img
					src="/icons/sun.png"
					style={{ marginLeft: '6px', marginTop: '2px' }}
				/>
			}
			onChange={handleChange}
			offHandleColor="#ffba8a"
			checked={checked}
			onColor="#a3dafb"
			offColor="#fff"
			activeBoxShadow={`0 0 4px 4px ${color}`}
		/>
	);
};

export default Switcher;
