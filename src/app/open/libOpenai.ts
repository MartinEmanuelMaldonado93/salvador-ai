import { Configuration, OpenAIApi } from "openai";

if (!process.env.OPENAI_API_KEY) {
	throw new Error('OpenAI Key does not exist');
}
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
})

export const openai = new OpenAIApi(configuration);
