'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import ResponsiveIframePreview from '~/app/components/responsive-iframe-preview';
import { GridView } from '~/components/presentation/grid-view';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { usePresentation } from '~/hooks/use-presentation';
import type { SlideDefinition } from '~/presentation/router';
import { useViewTransitions } from '../providers/view-transitions-provider';

// Define smaller base dimensions for thumbnail previews
const THUMBNAIL_BASE_WIDTH = 1024;
const THUMBNAIL_BASE_HEIGHT = 576; // Maintain 16:9 ratio

export default function GridViewPage() {
	const { slides } = usePresentation();
	const router = useRouter();
	const { startViewTransition } = useViewTransitions();

	// Create slide thumbnails with iframe previews, similar to presenter panel
	const slideThumbnails = slides.map(
		(slide: SlideDefinition, index: number) => (
			<div
				key={index}
				className="relative h-full w-full overflow-hidden bg-[#111]"
			>
				<AspectRatio ratio={16 / 9}>
					<ResponsiveIframePreview
						src={`${slide.path}?preview=true`}
						title={`Preview: ${slide.title}`}
						disablePointerEvents={true}
						baseWidth={THUMBNAIL_BASE_WIDTH}
						baseHeight={THUMBNAIL_BASE_HEIGHT}
						className="h-full w-full"
					/>
				</AspectRatio>
				<div className="pointer-events-none absolute right-0.5 bottom-0.5 z-10 rounded-sm bg-background/80 px-1 text-[10px] text-white">
					{slide.id}
				</div>
			</div>
		)
	);

	// Handle closing grid view with smooth transitions
	const handleClose = useCallback(() => {
		startViewTransition(() => {
			router.push('/1');
		});
	}, [router, startViewTransition]);

	return (
		<GridView
			isOpen={true}
			onClose={handleClose}
			slideThumbnails={slideThumbnails}
		/>
	);
}
