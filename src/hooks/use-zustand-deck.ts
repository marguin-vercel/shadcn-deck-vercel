import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import type { DeckContextType } from '~/components/presentation/core/deck-context';
import { usePresentationStore } from '~/store/presentation-store';

/**
 * Custom hook that adapts our Zustand store to the DeckContext interface
 * This makes it easier to transition from the context-based approach to Zustand
 */
export function useZustandDeck(): DeckContextType {
	const {
		activeSlide,
		totalSlides,
		isFirstSlide,
		isLastSlide,
		isFullscreen,
		goToSlide: storeGoToSlide,
		goToNextSlide,
		goToPreviousSlide,
		toggleFullscreen,
	} = usePresentationStore();

	// Use next-themes for theme
	const { theme: nextTheme } = useTheme();

	// Create an adapter for the goToSlide function to match the DeckContext interface
	const goToSlide = useMemo(() => {
		return (index: number) => {
			storeGoToSlide(index);
		};
	}, [storeGoToSlide]);

	return {
		activeSlide,
		totalSlides,
		isFirstSlide,
		isLastSlide,
		// Use theme from next-themes, fallback to 'light'
		theme: (nextTheme as 'dark' | 'light' | 'vercel') || 'light',
		isFullscreen,
		goToSlide,
		goToNextSlide,
		goToPreviousSlide,
		toggleFullscreen,
	};
}
