import { Variants } from "framer-motion";

export const parentVariants: Variants = {
	hidde: { opacity: 0.3},
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			delayChildren: 0.8,
			staggerChildren: 1,
		},
	},
}

export const childrenVariants: Variants = {
	hidde: { opacity: 0, translateY: '20%' },
	show: {
		opacity: 1,
		translateY: 0,
		transition: {
			stiffness: 200,
			damping: 2,
		}
	},
}
