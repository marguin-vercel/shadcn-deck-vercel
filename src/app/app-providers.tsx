'use client';

import type { ReactNode } from 'react';
import { PresentationProvider } from '~/pkgs/deck';
import { slideDefinitions } from '~/presentation/router';

export function AppProviders({ children }: { children: ReactNode }) {
	return (
		<PresentationProvider slides={slideDefinitions}>
			{children}
		</PresentationProvider>
	);
}
