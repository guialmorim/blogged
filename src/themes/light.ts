import { DefaultTheme } from 'styled-components';
import common from './common';

const lightTheme: DefaultTheme = {
	title: 'light',
	...common,
	bg: {
		default: '#FFFFFF',
		defaultLight: '#F2F2F2',
		reverse: '#0A1A2F',
		button: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
	},
	text: {
		default: '#0A1A2F',
		reverse: '#FFFFFF',
		accent: '#777777',
	},
	accents: {
		a1: '#fe8a39',
		a2: '#fd3838',
		a3: '#777777',
		a4: '#888888',
		a5: '#999999',
		a6: '#bcbabb',
		a7: '#f0eef1',
		a8: '#fafafa',
	},
	shadows: {
		default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
		small: '0 5px 10px rgba(0, 0, 0, 0.12)',
		medium: '0 8px 30px rgba(0,0,0, 0.12)',
		large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
	},
};

export { lightTheme };
