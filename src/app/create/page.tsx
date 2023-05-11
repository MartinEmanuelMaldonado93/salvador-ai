import { getRandomPrompt } from '@/helpers';
import { useStore } from '@/store';
import { formOpenAI } from '@/types';
import ImageGenerated from './ImageGenerated';
import ClientStoreInitializer from '@/app/create/ClientStoreInitializer';
import FormComponent from './FormComponent';

export default async function Open({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const { user_name } = useStore.getState();
	return (
		<div className='m-4'>
			{!!user_name && <div className='text-center'>Welcome {user_name}</div>}
			<FormComponent />
			<ImageGenerated {...useStore.getState()} />
		</div>
	);
}
