import type { Variants } from 'framer-motion';

export const variants: { text: { variant: Variants } } = {
	text: {
		variant: {
			offscreen: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.3,
				},
			},
			onscreen: {
				opacity: 0,
				y: 40,
				transition: {
					type: 'spring',
					bounce: 0,
					duration: 1,
				},
			},
		},
	},
};
