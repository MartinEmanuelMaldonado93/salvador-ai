import { Variants } from "framer-motion";

export const parentVariants: Variants = {
	hidde: {},
	show: {
		transition: {
			when: "beforeChildren",
			delayChildren: 0.4,
			staggerChildren: 0.3,
		},
	},
}

export const childrenVariants: Variants = {
	hidde: { opacity: 0, translateY: '20%' },
	show: {
		opacity: 1,
		translateY: 0,
		transition: {
			stiffness: 90,
			damping: 2,
		}
	},
}
