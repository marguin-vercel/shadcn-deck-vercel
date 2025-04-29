'use client';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import ResponsiveIframePreview from '~/app/components/responsive-iframe-preview';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { getSlideDataByIndex, slideDefinitions } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

export default function NextSlidePage() {
	// Use Zustand store directly to get the current slide state
	const { slideId: currentSlideId } = usePresentationStore();

	// Use useMemo to compute the next slide data
	const { nextSlideData, nextSlideId } = useMemo(() => {
		// Find the current slide index
		const currentSlideIndex = slideDefinitions.findIndex(
			(def) => def.id === currentSlideId
		);

		if (currentSlideIndex === -1) {
			return { nextSlideData: null, nextSlideId: null };
		}

		const isLastSlide = currentSlideIndex === slideDefinitions.length - 1;
		const nextSlideIndex = isLastSlide ? null : currentSlideIndex + 1;
		const slideData =
			nextSlideIndex !== null ? getSlideDataByIndex(nextSlideIndex) : null;

		return {
			nextSlideData: slideData,
			nextSlideId: slideData?.id || 'End',
		};
	}, [currentSlideId]);

	// Early return if invalid slide
	if (!currentSlideId) {
		notFound();
	}

	return (
		<>
			<h3 className="mb-3 flex items-center font-medium text-foreground text-sm">
				<span className="mr-2 rounded-full bg-primary/15 px-2 py-0.5 text-primary text-xs">
					Next
				</span>
				{nextSlideId}
			</h3>
			{/* Add key to force re-render */}
			<div
				key={`next-${currentSlideId}`}
				className="overflow-hidden rounded-md border border-border/40"
			>
				<AspectRatio ratio={16 / 9}>
					{nextSlideData ? (
						<ResponsiveIframePreview
							key={nextSlideData.id}
							src={`${nextSlideData.path}?preview=true`}
							title={`Preview: ${nextSlideData.title}`}
							baseWidth={1920}
							baseHeight={1080}
							className="h-full w-full"
						/>
					) : (
						<div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-card to-card/50 p-4 text-center text-muted-foreground">
							<span className="mb-1 font-medium text-sm">Last Slide</span>
							<span className="text-muted-foreground/70 text-xs">
								End of presentation
							</span>
						</div>
					)}
				</AspectRatio>
			</div>
		</>
	);
}
