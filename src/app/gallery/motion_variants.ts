import { Variants } from "framer-motion";

export const parentVariants: Variants = {
	hidde: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.5,
		},
	},
}

export const childrenVariants: Variants = {
	hidde: { opacity: 0, translateY: '30%' },
	show: {
		opacity: 1,
		translateY: 0,
	},
}
