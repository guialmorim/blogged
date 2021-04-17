// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		bg: {
			default: string;
			defaultLight: string;
			reverse: string;
			button: string;
		};
		text: {
			default: string;
			reverse: string;
			accent: string;
		};
		accents: {
			a1: string;
			a2: string;
			a3: string;
			a4: string;
			a5: string;
			a6: string;
			a7: string;
			a8: string;
		};
		shadows: {
			default: string;
			small: string;
			medium: string;
			large: string;
		};
		borderRadius: string;
		borderRadiusButton: string;
		fontFamily: {
			fontSans: string;
			fontMono: string;
		};
		radius: {
			sm: string;
			md: string;
			lg: string;
		};
		brand: {
			primary: string;
			success: string;
			danger: string;
			warning: string;
		};
		genericColors: {
			white: string;
			black: string;
			gray: string;
		};
		fontSize: {
			xxxs: string;
			xxs: string;
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
		fontWeight: {
			light: number;
			regular: number;
			semibold: number;
			bold: number;
		};
	}
}
