'use client';
import { useStore } from '@/store';
import { formOpenAI } from '@/types';
import { useRef } from 'react';

export default function ClientStoreInitializer(
	props: formOpenAI & { children: JSX.Element }
) {
	const initialized = useRef(false);
	
	if (!initialized.current) {
		const { photo_url, user_name, prompt } = props;
		console.count('initializer');
		useStore.setState({ photo_url, prompt, user_name });
		initialized.current = true;
	}
	return <>{props.children}</>;
}
