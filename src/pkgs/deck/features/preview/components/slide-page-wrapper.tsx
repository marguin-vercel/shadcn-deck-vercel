'use client';

import { useEffect } from 'react';
import { usePresentationStore } from '../../../core/store/presentation-store';
import { DirectSlidePreview } from './direct-slide-preview';

export function SlidePageWrapper({ slug }: { slug: string }) {
	const {
		slides,
		setSlug,
		isServicesInitialized,
		slug: currentSlug,
	} = usePresentationStore();
	const slide = slides.find((s) => s.slug === slug);

	// Sync URL slug with store when services are ready and slug differs
	useEffect(() => {
		if (isServicesInitialized && currentSlug !== slug) {
			console.log('🔄 SlidePageWrapper: Syncing URL slug with store:', {
				urlSlug: slug,
				storeSlug: currentSlug,
			});
			setSlug(slug);
		}
	}, [slug, currentSlug, isServicesInitialized, setSlug]);

	if (!slide) {
		return null;
	}

	return (
		<DirectSlidePreview
			component={slide.component}
			baseWidth={1280}
			baseHeight={720}
			className="h-full w-full"
			centerContent={true}
		/>
	);
}
