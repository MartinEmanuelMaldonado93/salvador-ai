import { openai } from './libOpenai';

export default async function Open({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	// const response = await openai.createImage({
	// 	prompt: 'a cat red flying',
	// 	n: 1,
	// 	size: '256x256',
	// 	response_format: 'url',
	// 	user: 'martin'
	// });

	// console.log(response.data.data[0].url);
	return (
		<div>
			<div>Open page</div>
		</div>
	);
}
