'use client';
import { formOpenAI } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@/store';

export default function ImageGenerated(props: formOpenAI) {
	// const { photo_url, user_name, prompt } = useStore();
	const { photo_url, user_name, prompt } = props;

	return (
		<>
			{!!user_name && <div className='text-center'> {user_name}</div>}
			{!!photo_url && (
				<div className='mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
					<img
						placeholder='blur'
						className='w-full h-full object-contain'
						width={300}
						height={300}
						src={photo_url}
						alt={'image generated'}
					/>
				</div>
			)}
		</>
	);
}
