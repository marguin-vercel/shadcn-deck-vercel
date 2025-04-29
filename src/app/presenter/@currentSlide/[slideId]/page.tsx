'use client';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import ResponsiveIframePreview from '~/app/components/responsive-iframe-preview';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { type SlideDefinition, getSlideDataById } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

// Separate the iframe content for better organization
function SlidePreview({ slide }: { slide: SlideDefinition }) {
	return (
		<AspectRatio ratio={16 / 9} className="h-full">
			<ResponsiveIframePreview
				src={`${slide.path}?preview=true`}
				title={slide.title}
				baseWidth={1920}
				baseHeight={1080}
				className="h-full w-full"
			/>
		</AspectRatio>
	);
}

export default function CurrentSlide() {
	const params = useParams();
	const { slideId } = usePresentationStore();

	// Get the current slide ID either from the Zustand store or URL params
	const currentSlideId = slideId || (params?.slideId as string);

	// Use useMemo for slide data to avoid redundant calls
	const slide = useMemo(() => {
		return getSlideDataById(currentSlideId) || null;
	}, [currentSlideId]);

	if (!slide) {
		return null; // TransitionWrapper will handle loading state
	}

	return (
		<div className="flex h-full w-full flex-col">
			{/* <div className="mb-2 px-2 font-semibold text-xl">{slide.title}</div> */}
			<div className="flex-1">
				<SlidePreview slide={slide} />
			</div>
		</div>
	);
}
