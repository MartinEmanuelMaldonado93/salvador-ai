import { getRandomPrompt } from '@/helpers';
import { useStore } from '@/store';
import { formOpenAI } from '@/types';
import ImageGenerated from './imageGenerated';
import ClientStoreInitializer from '@/app/create/ClientStoreInitializer';
import FormComponent from './FormComponent';

export default async function Open({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	return (
		<div className='m-4'>
			<div className='text-center'>Welcome {useStore.getState().user_name}</div>
			<FormComponent />
			<ImageGenerated {...useStore.getState()} />
		</div>
	);
}
