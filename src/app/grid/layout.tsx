import type { ReactNode } from 'react';

import { DeckContextAdapter } from '../components/deck-context-adapter';
import { DeckProvider } from '../providers/deck-provider';

export default function GridViewLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<DeckProvider>
			<DeckContextAdapter>{children}</DeckContextAdapter>
		</DeckProvider>
	);
}
