'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { DeckContextAdapter } from '../components/deck-context-adapter';
import type { SlideDefinition } from '../types/types';
import { DeckProvider } from './deck-provider';
import { ViewTransitionsProvider } from './view-transitions-provider';

export function PresentationProvider({
	children,
	slides,
}: {
	children: ReactNode;
	slides: SlideDefinition[];
}) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			<ViewTransitionsProvider>
				<DeckProvider slides={slides}>
					<DeckContextAdapter>{children}</DeckContextAdapter>
				</DeckProvider>
			</ViewTransitionsProvider>
		</ThemeProvider>
	);
}
