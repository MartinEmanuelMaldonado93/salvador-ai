import { generateAndSaveImage } from '@/openAI/actions';
import InputClient from './InputClient';

export default function FormComponent() {
	return (
		<form
			action={generateAndSaveImage}
			className='flex flex-col gap-4 w-full max-w-xl mx-auto'
		>
			<input
				type='text'
				id='name_user_input'
				name='name_user'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
				placeholder={'Your name here'}
				required
			/>
			<InputClient />
			<div className='mt-5 flex gap-5 justify-center'>
				<button
					formAction={generateAndSaveImage}
					className=' text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
				>
					Generate
				</button>
			</div>
		</form>
	);
}
