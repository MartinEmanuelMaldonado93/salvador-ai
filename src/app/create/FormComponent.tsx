import { useStore } from '@/store';
import { revalidatePath } from 'next/cache';
import clientPromise from '@/mongo/mongodb';
import { openai } from '../openAI';
import { enviroments } from '@/env.mjs';

async function generateImage(form: FormData) {
	'use server';
	const prompt = form.get('prompt');
	const user_name = form.get('name_user');

	if (!prompt || !user_name)
		throw new Error('Some of the form fields are empty.');

	try {
		// const response = await openai.createImage({
		// 	prompt: String(prompt),
		// 	n: 1,
		// 	size: '256x256',
		// 	response_format: 'url',
		// });

		// if (response.status != 200) throw new Error('Response Failed');

		// const photo_url = response.data.data[0].url;
		const photo_url = 'https://picsum.photos/seed/256/256';

		useStore.setState({
			photo_url,
			user_name: String(user_name),
			prompt: String(prompt),
		});
		revalidatePath('/create');
	} catch (e) {
		console.log('catch', e);
	}
}

export default function FormComponent() {
	return (
		<form action={generateImage} className='mt-4 flex flex-col gap-4'>
			<input
				type='text'
				id='name_user_input'
				name='name_user'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
				placeholder={'Your name here'}
				required
			/>
			<input
				type='text'
				id='prompt_input'
				name='prompt'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
				placeholder={'Your prompt'}
				required
			/>
			<div className='mt-5 flex gap-5'>
				<button
					formAction={generateImage}
					className=' text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
				>
					Generate
				</button>
			</div>
		</form>
	);
}
