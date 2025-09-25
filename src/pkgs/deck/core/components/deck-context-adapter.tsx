'use client';

import type { ReactNode } from 'react';
import { useZustandDeck } from '../hooks/use-zustand-deck';
import { DeckContext } from '../layouts/deck-context';

export function DeckContextAdapter({ children }: { children: ReactNode }) {
	// Use our zustand adapter hook instead of manually creating the context
	const deckContextValue = useZustandDeck();

	return (
		<DeckContext.Provider value={deckContextValue}>
			{children}
		</DeckContext.Provider>
	);
}
