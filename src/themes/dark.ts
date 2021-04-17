import { DefaultTheme } from 'styled-components';
import common from './common';

const darkTheme: DefaultTheme = {
	title: 'dark',
	...common,
	bg: {
		default: '#120E26',
		defaultLight: '#21184D',
		reverse: '#F4F4F4',
		button: 'linear-gradient(40deg, #8983f7, #a3dafb 70%);',
	},
	text: {
		default: '#F4F4F4',
		reverse: '#120E26',
		accent: '#a3a8c3',
	},
	accents: {
		a1: '#8983f7',
		a2: '#a3dafb',
		a3: '#a3a8c3',
		a4: '#999999',
		a5: '#888888',
		a6: '#666666',
		a7: '#444444',
		a8: '#111111',
	},
	shadows: {
		default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
		small: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
		medium: '0 20px 30px -15px rgba(2,12,27, 0.7)',
		large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
	},
};

export { darkTheme };
