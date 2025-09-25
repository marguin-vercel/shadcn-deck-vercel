'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { useViewTransitions } from '../providers/view-transitions-provider';
import { usePresentationStore } from '../store/presentation-store';
import { getSlideDataBySlug } from '../services/slides-service';

/**
 * Hook that extends the presentation store with presenter-specific functionality
 * This provides compatibility with components that previously used usePresentationContext
 */
export function usePresentation() {
	const pathname = usePathname();
	const router = useRouter();
	const { startViewTransition } = useViewTransitions();
	const { theme, setTheme } = useTheme();

	// Base store state
	const {
		slug,
		activeSlide: currentSlideIndex,
		totalSlides,
		isFirstSlide,
		isLastSlide,
		slides,
		goToNextSlide: baseGoToNextSlide,
		goToPreviousSlide: baseGoToPreviousSlide,
	} = usePresentationStore();

	// Toggle theme using next-themes
	const toggleTheme = useCallback(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}, [theme, setTheme]);

	// Detect presenter mode
	const isPresenterMode = useMemo(
		() => pathname.includes('/presenter'),
		[pathname]
	);

	// Get slide data
	const currentSlide = useMemo(() => getSlideDataBySlug(slug) || null, [slug]);
	const nextSlide = useMemo(() => {
		return isLastSlide ? null : slides[currentSlideIndex + 1];
	}, [isLastSlide, currentSlideIndex, slides]);
	const previousSlide = useMemo(() => {
		return isFirstSlide ? null : slides[currentSlideIndex - 1];
	}, [isFirstSlide, currentSlideIndex, slides]);

	// Specialized navigation for presenter mode
	const navigateInPresenterMode = useCallback(
		(newSlug: string) => {
			if (getSlideDataBySlug(newSlug)) {
				startViewTransition(() => {
					router.push(`/presenter/${newSlug}`);
				});
			}
		},
		[router, startViewTransition]
	);

	// ID-based navigation (compatible with old context)
	const goToSlide = useCallback(
		(slug: string) => {
			const slide = getSlideDataBySlug(slug);
			if (slide) {
				const slideIndex = slides.findIndex((s) => s.slug === slug);

				if (slideIndex >= 0) {
					if (isPresenterMode) {
						navigateInPresenterMode(slug);
					} else {
						// Use our store navigation, but adapt to slug-based API
						usePresentationStore.getState().goToSlide(slideIndex);
					}
				}
			}
		},
		[isPresenterMode, navigateInPresenterMode, slides]
	);

	// Override navigation for presenter mode
	const goToNextSlide = useCallback(() => {
		if (!isLastSlide && nextSlide) {
			if (isPresenterMode) {
				navigateInPresenterMode(nextSlide.slug);
			} else {
				baseGoToNextSlide();
			}
		}
	}, [
		isLastSlide,
		nextSlide,
		isPresenterMode,
		navigateInPresenterMode,
		baseGoToNextSlide,
	]);

	const goToPreviousSlide = useCallback(() => {
		if (!isFirstSlide && previousSlide) {
			if (isPresenterMode) {
				navigateInPresenterMode(previousSlide.slug);
			} else {
				baseGoToPreviousSlide();
			}
		}
	}, [
		isFirstSlide,
		previousSlide,
		isPresenterMode,
		navigateInPresenterMode,
		baseGoToPreviousSlide,
	]);

	// Notes accessor
	const getSlideNotes = useCallback((slug: string) => {
		const slide = getSlideDataBySlug(slug);
		return slide?.notes || '';
	}, []);

	return {
		// Basic slide info
		currentSlug: slug,
		currentSlideIndex,
		totalSlides,
		isFirstSlide,
		isLastSlide,

		// Slide data
		slides: slides,
		currentSlide,
		nextSlide,
		previousSlide,

		// Navigation
		goToSlide,
		goToNextSlide,
		goToPreviousSlide,

		// Theme
		theme,
		setTheme,
		toggleTheme,

		// Presenter mode
		isPresenterMode,
		navigateInPresenterMode,

		// Helpers
		getSlideDataBySlug,
		getSlideNotes,
	};
}
