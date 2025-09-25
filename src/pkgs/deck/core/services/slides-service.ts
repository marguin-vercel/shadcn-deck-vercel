import { usePresentationStore } from '../store/presentation-store';
import type { SlideDefinition } from '../types/types';

// Cache for slide lookups to prevent N+1 problem
const slideCache: Map<string, SlideDefinition | undefined> = new Map();
let lastSlidesVersion: SlideDefinition[] | null = null;

// Helper functions to access slide data from the Zustand store
export const getSlideDataBySlug = (
	slug: string
): SlideDefinition | undefined => {
	const slides = usePresentationStore.getState().slides;

	// Check if slides array has changed and clear cache if needed
	if (lastSlidesVersion !== slides) {
		slideCache.clear();
		lastSlidesVersion = slides;
	}

	// Check cache first
	if (slideCache.has(slug)) {
		return slideCache.get(slug);
	}

	const result = slides.find((slide) => slide.slug === slug);

	// Cache the result
	slideCache.set(slug, result);

	return result;
};

export const getSlideDataByIndex = (
	index: number
): SlideDefinition | undefined => {
	const slides = usePresentationStore.getState().slides;
	return slides[index];
};

// Helper to clear the cache manually if needed
export const clearSlideCache = () => {
	slideCache.clear();
	lastSlidesVersion = null;
};
