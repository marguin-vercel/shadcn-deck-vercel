'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { UnifiedControls } from '~/components/presentation/unified-controls';
import { useViewTransitions } from '../providers/view-transitions-provider';

// This component exists only to avoid hydration mismatches by ensuring the controls
// only render on the client side, never during server rendering
export default function SlideControls() {
	const router = useRouter();
	const { startViewTransition } = useViewTransitions();

	// Use view transitions for smoother navigation
	const handleGridButtonClick = useCallback(() => {
		startViewTransition(() => {
			router.push('/grid');
		});
	}, [router, startViewTransition]);

	return (
		<UnifiedControls
			showFullscreen
			showNavigation
			showProgress
			showGrid={true}
			showOverview={true}
			showStartButton={true}
			onGridButtonClick={handleGridButtonClick}
		/>
	);
}
