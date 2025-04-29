'use client';

import { useTheme } from 'next-themes';
import { type ReactNode, useCallback, useEffect } from 'react';
import { slideDefinitions } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

export function DeckProvider({ children }: { children: ReactNode }) {
	// Get actions from the store
	const setTotalSlides = usePresentationStore((state) => state.setTotalSlides);
	const goToNextSlide = usePresentationStore((state) => state.goToNextSlide);
	const goToPreviousSlide = usePresentationStore(
		(state) => state.goToPreviousSlide
	);
	const toggleFullscreen = usePresentationStore(
		(state) => state.toggleFullscreen
	);

	// Use next-themes directly
	const { setTheme, theme } = useTheme();

	// Toggle theme function
	const toggleTheme = useCallback(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}, [setTheme, theme]);

	// Effect for one-time initialization
	useEffect(() => {
		// Initialize store with the total number of slides
		setTotalSlides(slideDefinitions.length);

		// Listen for fullscreen changes
		const handleFullscreenChange = () => {
			const isFullscreen = !!document.fullscreenElement;
			usePresentationStore.setState({ isFullscreen });
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, [setTotalSlides]); // Only depend on setTotalSlides

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Ignore if modifier keys are pressed
			if (e.ctrlKey || e.altKey || e.metaKey) {
				return;
			}

			// Navigation keys
			if (e.key === 'ArrowRight' || e.key === ' ') {
				goToNextSlide();
			} else if (e.key === 'ArrowLeft') {
				goToPreviousSlide();
			}
			// Fullscreen toggle
			else if (e.key === 'f' || e.key === 'F') {
				toggleFullscreen();
			}
			// Theme toggle
			else if (e.key === 't' || e.key === 'T') {
				toggleTheme();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [goToNextSlide, goToPreviousSlide, toggleFullscreen, toggleTheme]);

	return children;
}
