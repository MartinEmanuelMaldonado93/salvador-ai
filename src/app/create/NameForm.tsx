'use client';

import { getRandomPrompt } from '@/helpers';
import { useState } from 'react';

export default function NameForm({
	isSurpriseMe = false,
}: {
	isSurpriseMe?: boolean;
}) {
	const [prompt, setPrompt] = useState('a bird');

	function handleSurpriseMe() {
		const suggestedPrompt = getRandomPrompt('random prompt');
		setPrompt(suggestedPrompt);
	}
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label className='block text-sm font-medium text-gray-900'>
					Your name here
				</label>
				{!!isSurpriseMe && (
					<button
						type='button'
						onClick={handleSurpriseMe}
						className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
					>
						Surprise me
					</button>
				)}
			</div>
			<input
				type='text'
				id=''
				name='user_name'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
			/>
		</div>
	);
}
