import { surpriseMePrompts } from "../constants/constants";

/** get a hard-code prompt of a list */
export function getRandomPrompt(prompt: string): string {
	const i = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[i];

	if (randomPrompt === prompt) return getRandomPrompt(prompt);

	return randomPrompt;
}
