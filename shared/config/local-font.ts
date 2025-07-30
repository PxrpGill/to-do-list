import localFont from 'next/font/local';

export const MontserratFonts = localFont({
	src: [
		{
			path: '../../public/fonts/Montserrat-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Montserrat-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Montserrat-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-montserrat',
	preload: true,
});
