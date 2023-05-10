export type formOpenAI = {
	user_name?: string;
	prompt?: string;
	photo_url?: string;
};
export type formProps = {
	labelName: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (e: any) => void;
	isSurpriseMe?: boolean;
	handleSurpriseMe?: () => void;
};