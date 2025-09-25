'use client';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { useHasHydrated } from '../../../core/hooks/use-has-hydrated';
import { getSlideDataByIndex } from '../../../core/services/slides-service';
import { usePresentationStore } from '../../../core/store/presentation-store';
import { DirectSlidePreview } from '../../preview/components/direct-slide-preview';

export function NextSlide() {
	// Use Zustand store directly to get the current slide state
	const { slug: currentSlug, slides } = usePresentationStore();
	const hasHydrated = useHasHydrated();

	// Use useMemo to compute the next slide data
	const { nextSlideData, nextSlug } = useMemo(() => {
		if (!hasHydrated) {
			return { nextSlideData: null, nextSlug: null };
		}
		// Find the current slide index
		const currentSlideIndex = slides.findIndex(
			(def) => def.slug === currentSlug
		);

		if (currentSlideIndex === -1) {
			return { nextSlideData: null, nextSlug: null };
		}

		const isLastSlide = currentSlideIndex === slides.length - 1;
		const nextSlideIndex = isLastSlide ? null : currentSlideIndex + 1;
		const slideData =
			nextSlideIndex !== null ? getSlideDataByIndex(nextSlideIndex) : null;

		return {
			nextSlideData: slideData,
			nextSlug: slideData?.slug || 'End',
		};
	}, [currentSlug, slides, hasHydrated]);

	if (!hasHydrated) {
		return null;
	}

	// Early return if invalid slide
	if (!currentSlug) {
		notFound();
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center text-sm">
					<span className="mr-2 rounded-full bg-primary/20 px-2 py-0.5 text-primary text-xs">
						Next
					</span>
					<span className="font-medium">{nextSlug}</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				{/* Add key to force re-render */}
				<div
					key={`next-${currentSlug}`}
					className="aspect-video overflow-hidden rounded-md border border-border"
				>
					{nextSlideData ? (
						<DirectSlidePreview
							key={nextSlideData.slug}
							component={nextSlideData.component}
							baseWidth={1280}
							baseHeight={720}
							className="h-full w-full"
							centerContent={true}
							prioritizeWidth={true}
						/>
					) : (
						<div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-muted/20 to-muted/10 p-4 text-center text-muted-foreground">
							<span className="mb-1 font-medium text-sm">Last Slide</span>
							<span className="text-muted-foreground/70 text-xs">
								End of presentation
							</span>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
