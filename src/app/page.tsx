'use client';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col gap-4 justify-center items-center min-h-[25rem] max-w-6xl mx-auto text-center'>
			<div className='text-lg font-semibold text-gray-900'>
				Bring your ideas to a reality
			</div>
			<Link
				className='border w-min inline rounded-md p-2 shadow-black shadow-sm duration-200 active:scale-95 active:translate-y-1'
				href={'/create'}
			>
				Create
			</Link>
		</div>
	);
}
