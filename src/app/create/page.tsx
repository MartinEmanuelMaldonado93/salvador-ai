import { useStore } from '@/store';
import ImageGenerated from './components/ImageGenerated';
import FormComponent from './components/FormComponent';

export default async function Open({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const { user_name } = useStore.getState();//session

	return (
		<div className='max-w-6xl mx-auto h-[90vh] flex flex-col justify-center'>
			{!!user_name && <div className='text-center'>Welcome {user_name}</div>}
			<FormComponent />
			<ImageGenerated {...useStore.getState()} />
		</div>
	);
}
