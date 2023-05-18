'use server';
import { useStore } from "@/store";
import { revalidatePath } from "next/cache";
import { enviroments } from "@/env.mjs";
import { formOpenAI } from "@/types";
import { openai } from "./configuration";

/** Set form data to a fetch function and update the server state */
export async function generateAndSaveImage(form: FormData) {
	const prompt = form.get('prompt');
	const user_name = form.get('name_user');

	if (!prompt || !user_name)
		throw new Error('Some of the form fields are empty.');

	try {
		const photo_url = await getUrlOfImageGenerated({ prompt: String(prompt) });
		if (!photo_url) throw new Error('photo_url not finded');

		useStore.setState({
			photo_url,
			user_name: String(user_name),
			prompt: String(prompt),
		});
		revalidatePath('/create');
	} catch (error) {
		if (error instanceof Error) console.log(error.message);
	}
}
/** rapidapi api  */
async function fetchImageGen({ prompt }: formOpenAI) {
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': enviroments.OPENAI_API_KEY,
			'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
			'Accept-Encoding': 'gzip, deflate, *',
		},
		body: JSON.stringify({
			prompt,
			n: 1,
			size: '256x256',
		}),
	};

	let photo_url = '';
	try {
		const response = await fetch(enviroments.OPENAI_URL, options);
		if (!response.ok) throw new Error('Error response');

		const result = await response.json();
		photo_url = result.data[0].url as string;
	} catch (error) {
		if (error instanceof Error) console.log(error.message);

	}

	return photo_url;
}
/** official api */
async function getUrlOfImageGenerated({ prompt }: formOpenAI) {
	try {
		const response = await openai.createImage({
			prompt: String(prompt),
			n: 1,
			size: "256x256",
		});

		if (!response) throw new Error();

		return response.data.data[0].url;

	} catch (error) {
		if (error instanceof Error) console.log(error.message, error.name);
	} finally {
		console.log(prompt)
	}

}