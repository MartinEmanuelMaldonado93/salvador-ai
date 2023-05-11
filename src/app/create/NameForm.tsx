'use client';
import { useTransition } from 'react';
import { getRandomPrompt } from '@/helpers';
import { useState } from 'react';

export default function NameForm({
	isSurpriseMe = false,
}: {
	isSurpriseMe?: boolean;
}) {
	const [nameUser, setNameUser] = useState<string>('');
	let [isPending, startTransition] = useTransition();
	// const [nameUser, setNameUser] = useState<string>('');

	return (
		<>
			<div className='flex items-center gap-2 mb-2'>
				<label className='block text-sm font-medium text-gray-900'>
					Your name here
				</label>
			</div>
			<input
				type='text'
				id='name_user_input'
				name='name_user'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
				placeholder={'Your name here'}
				// required
			/>
			<button
				type='button'
				className='border '
				onClick={() => startTransition(() => console.log('from server'))}
			>
				submit name jeje
			</button>
		</>
	);
}

{
	/* {!!isSurpriseMe && (
					<button
						type='button'
						onClick={()=>{
							const suggestedPrompt = getRandomPrompt('random prompt');
							setNameUser(suggestedPrompt);
						}}
						className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
					>
						Surprise me
					</button>
				)} */
}
