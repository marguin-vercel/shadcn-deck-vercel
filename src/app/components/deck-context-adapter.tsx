'use client';

import type { ReactNode } from 'react';
import { DeckContext } from '~/components/presentation/core/deck-context';
import { useZustandDeck } from '~/hooks/use-zustand-deck';

export function DeckContextAdapter({
	children,
}: {
	children: ReactNode;
}) {
	// Use our zustand adapter hook instead of manually creating the context
	const deckContextValue = useZustandDeck();

	return (
		<DeckContext.Provider value={deckContextValue}>
			{children}
		</DeckContext.Provider>
	);
}
