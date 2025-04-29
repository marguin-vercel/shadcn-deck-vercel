'use client'; // Needs client for goToSlide interaction
import { notFound } from 'next/navigation';
import { Suspense, useCallback, useMemo } from 'react';
import { UpcomingSlidesLoadingSkeleton } from '~/app/components/loading-skeletons';
import ResponsiveIframePreview from '~/app/components/responsive-iframe-preview';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { getSlideDataByIndex, slideDefinitions } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

// Define smaller base dimensions for thumbnail previews
const THUMBNAIL_BASE_WIDTH = 1024;
const THUMBNAIL_BASE_HEIGHT = 576; // Maintain 16:9 ratio

// Improved SlideThumbnail with immediate loading
function SlideThumbnail({
	slideInfo,
	onSelect,
}: {
	slideInfo: NonNullable<ReturnType<typeof getSlideDataByIndex>>;
	onSelect: (slideId: string) => void;
}) {
	return (
		<Button
			onClick={() => onSelect(slideInfo.id)}
			variant="ghost"
			className={cn(
				'relative h-auto cursor-pointer overflow-hidden rounded-md border border-border/40 bg-card/50 p-0 shadow-sm transition-all hover:shadow-md',
				'hover:border-primary/40 hover:bg-card/70'
			)}
			title={`Go to slide ${slideInfo.id}: ${slideInfo.title}`}
		>
			<AspectRatio ratio={16 / 9}>
				<ResponsiveIframePreview
					src={`${slideInfo.path}?preview=true`}
					title={`Preview: ${slideInfo.title}`}
					disablePointerEvents={true}
					baseWidth={THUMBNAIL_BASE_WIDTH}
					baseHeight={THUMBNAIL_BASE_HEIGHT}
					className="h-full w-full"
				/>
			</AspectRatio>
			<div className="absolute right-1 bottom-1 z-10 rounded-full bg-primary/90 px-1.5 py-0.5 text-[10px] text-primary-foreground shadow-sm">
				{slideInfo.id}
			</div>
		</Button>
	);
}

export default function UpcomingSlidesPage() {
	// Use Zustand store directly
	const { slideId: currentSlideId, goToSlide } = usePresentationStore();

	// Use useMemo for computations to avoid recalculations on each render
	const { upcomingSlidesData, slideCount } = useMemo(() => {
		// Find current slide index
		const currentSlideIndex = slideDefinitions.findIndex(
			(def) => def.id === currentSlideId
		);

		if (currentSlideIndex === -1) {
			return { upcomingSlidesData: [], slideCount: 0 };
		}

		const totalSlides = slideDefinitions.length;

		// Calculate upcoming slides, starting from index + 2 (skipping current and next)
		const upcomingSlideIndices = Array.from({ length: 6 })
			.map((_, i) => {
				const slideIndex = currentSlideIndex + i + 2; // Skip current and next slide
				return slideIndex < totalSlides ? slideIndex : null;
			})
			.filter((index) => index !== null) as number[];

		const slidesData = upcomingSlideIndices
			.map((index) => getSlideDataByIndex(index))
			.filter(Boolean) as NonNullable<ReturnType<typeof getSlideDataByIndex>>[];

		return { upcomingSlidesData: slidesData, slideCount: slidesData.length };
	}, [currentSlideId]);

	// Early return if no valid slide
	if (!currentSlideId) {
		notFound();
	}

	// Use callback to avoid recreation on each render
	const handleThumbnailClick = useCallback(
		(slideId: string) => {
			// Find the index of the clicked slide
			const slideIndex = slideDefinitions.findIndex(
				(def) => def.id === slideId
			);
			if (slideIndex !== -1) {
				goToSlide(slideIndex);
			}
		},
		[goToSlide]
	);

	return (
		<>
			<h4 className="mb-3 flex items-center text-foreground">
				<span className="mr-2 rounded-full bg-primary/15 px-2 py-0.5 text-primary text-xs">
					Upcoming
				</span>
				<span className="font-medium text-sm">{slideCount} slides</span>
			</h4>

			{/* Add a key to force re-render when slide changes */}
			<Suspense fallback={<UpcomingSlidesLoadingSkeleton />}>
				<div
					key={`upcoming-${currentSlideId}`}
					className="grid grid-cols-2 gap-3"
				>
					{upcomingSlidesData.map((slideInfo) => (
						<SlideThumbnail
							key={`thumbnail-${slideInfo.id}`}
							slideInfo={slideInfo}
							onSelect={handleThumbnailClick}
						/>
					))}
				</div>
			</Suspense>
		</>
	);
}
