import Link from "next/link";

export default function Home() {
	return (
		<div className='flex flex-col justify-center min-h-[80vh] text-center'>
			<div className='m-4'>Bring your ideas to a reality</div>
			<div>
				<Link className='border rounded-md p-2 shadow-black shadow-sm' href={'/create'}>
					Create
				</Link>
			</div>
		</div>
	);
}
