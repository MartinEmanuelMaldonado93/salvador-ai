'use client';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col gap-4 justify-center min-h-[80vh] max-w-6xl mx-auto text-center'>
			<div className='text-lg font-semibold text-gray-900'>Bring your ideas to a reality</div>
			<div>
				<Link
					className='border rounded-md p-2 shadow-black shadow-sm active:scale-95'
					href={'/create'}
				>
					Create
				</Link>
			</div>
		</div>
	);
}
