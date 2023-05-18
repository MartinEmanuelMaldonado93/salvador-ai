'use client';
import { useState } from 'react';
import { getRandomPrompt } from '@/helpers';

export default function InputClient() {
	const [prompt, setPrompt] = useState('');

	return (
		<div className='flex gap-1'>
			<input
				type='text'
				id='prompt_input'
				name='prompt'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 transition-all duration-200 active:translate-x-1'
				placeholder={'Your prompt'}
				value={prompt}
				required
				onChange={async ({ target }) => {
					if (!target.value) return;
					setPrompt(target.value);
				}}
			/>
			<button
				type='button'
				className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black duration-200 active:translate-x-1'
				onClick={() => setPrompt(getRandomPrompt('random prompt'))}
			>
				Surprise me
			</button>
		</div>
	);
}
