'use client';

import { useTheme } from 'next-themes';
import { useMemo, useRef } from 'react';
import { usePresentationStore } from '../store/presentation-store';
import { useFullscreen } from './use-fullscreen';
import type { DeckContextType } from '../layouts/deck-context';

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
		goToSlide: storeGoToSlide,
		goToNextSlide,
		goToPreviousSlide,
		setFullscreen,
	} = usePresentationStore();

	// Create ref for fullscreen element (document.documentElement)
	const fullscreenRef = useRef<HTMLElement>(null);

	// Use the fullscreen hook with proper ref and callbacks
	const { isFullscreen, toggleFullscreen } = useFullscreen(fullscreenRef, {
		onEnter: () => setFullscreen(true),
		onExit: () => setFullscreen(false),
	});

	// Set the ref to document.documentElement for full page fullscreen
	useMemo(() => {
		if (typeof document !== 'undefined') {
			fullscreenRef.current = document.documentElement;
		}
	}, []);

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
