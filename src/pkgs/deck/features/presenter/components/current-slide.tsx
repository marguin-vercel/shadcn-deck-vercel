'use client';
import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useHasHydrated } from '../../../core/hooks';
import { getSlideDataBySlug } from '../../../core/services/slides-service';
import { usePresentationStore } from '../../../core/store/presentation-store';
import type { SlideDefinition } from '../../../core/types/types';
import { DirectSlidePreview } from '../../preview/components/direct-slide-preview';

// Separate the slide preview for better organization
function SlidePreview({ slide }: { slide: SlideDefinition }) {
	return (
		<DirectSlidePreview
			component={slide.component}
			baseWidth={1280}
			baseHeight={720}
			className="h-auto w-full"
			centerContent={false}
			prioritizeWidth={true}
			fullWidthAutoHeight={true}
		/>
	);
}

export function CurrentSlide() {
	const params = useParams();
	const { slug, setSlug, isServicesInitialized } = usePresentationStore();
	const hasHydrated = useHasHydrated();
	const urlSlug = params?.slug as string;

	// Sync URL slug with store when services are ready and slug differs
	useEffect(() => {
		if (hasHydrated && isServicesInitialized && urlSlug && slug !== urlSlug) {
			console.log('🔄 CurrentSlide: Syncing URL slug with store:', {
				urlSlug,
				storeSlug: slug,
			});
			setSlug(urlSlug);
		}
	}, [urlSlug, slug, isServicesInitialized, hasHydrated, setSlug]);

	// Get the current slide ID either from the Zustand store or URL params
	const currentSlug = hasHydrated ? slug || urlSlug : null;

	// Use useMemo for slide data to avoid redundant calls
	const slide = useMemo(() => {
		if (!currentSlug) return null;
		return getSlideDataBySlug(currentSlug) || null;
	}, [currentSlug]);

	if (!slide || !hasHydrated) {
		return (
			<div className="flex h-full w-full items-center justify-center">
				<div className="text-muted-foreground">Loading slide...</div>
			</div>
		);
	}

	return (
		<div className="w-full">
			<SlidePreview slide={slide} />
		</div>
	);
}
