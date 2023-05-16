'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type props = {
	children: ReactNode;
};
export default function ClientSessionProvider({ children }: props) {
	return <SessionProvider>{children}</SessionProvider>;
}
