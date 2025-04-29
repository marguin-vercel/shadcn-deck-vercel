'use client';

import { ThemeProvider } from 'next-themes';
import { type ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Return children only when mounted to avoid hydration mismatch
	if (!mounted) {
		return <div style={{ visibility: 'hidden' }}>{children}</div>;
	}

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
