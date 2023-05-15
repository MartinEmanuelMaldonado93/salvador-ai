import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Open Generator',
	description: 'latest of next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={(inter.className, 'min-h-screen')}>
				<nav className='flex justify-around flex-wrap py-2 bg-base-100 text-sm max-w-6xl mx-auto'>
					<Link className='flex items-center gap-2 border rounded-md p-2' href='/'>
						OpenAI
						<Image
							alt='openlogo'
							src={'/open_logo.svg'}
							width={25}
							height={25}
						/>
					</Link>
					<Link className='border rounded-md p-2' href='/create'>
						Create AI Image
					</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
