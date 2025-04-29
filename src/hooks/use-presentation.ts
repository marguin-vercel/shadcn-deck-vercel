import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useViewTransitions } from '~/app/providers/view-transitions-provider';
import { getSlideDataById, slideDefinitions } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

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
		slideId,
		activeSlide: currentSlideIndex,
		totalSlides,
		isFirstSlide,
		isLastSlide,
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
	const currentSlide = useMemo(
		() => getSlideDataById(slideId) || null,
		[slideId]
	);
	const nextSlide = useMemo(() => {
		return isLastSlide ? null : slideDefinitions[currentSlideIndex + 1];
	}, [isLastSlide, currentSlideIndex]);
	const previousSlide = useMemo(() => {
		return isFirstSlide ? null : slideDefinitions[currentSlideIndex - 1];
	}, [isFirstSlide, currentSlideIndex]);

	// Specialized navigation for presenter mode
	const navigateInPresenterMode = useCallback(
		(newSlideId: string) => {
			if (getSlideDataById(newSlideId)) {
				startViewTransition(() => {
					router.push(`/presenter/${newSlideId}`);
				});
			}
		},
		[router, startViewTransition]
	);

	// ID-based navigation (compatible with old context)
	const goToSlide = useCallback(
		(slideId: string) => {
			const slide = getSlideDataById(slideId);
			if (slide) {
				const slideIndex = slideDefinitions.findIndex((s) => s.id === slideId);
				if (slideIndex >= 0) {
					if (isPresenterMode) {
						navigateInPresenterMode(slideId);
					} else {
						// Use our store navigation, but adapt to slideId-based API
						usePresentationStore.getState().goToSlide(slideIndex);
					}
				}
			}
		},
		[isPresenterMode, navigateInPresenterMode]
	);

	// Override navigation for presenter mode
	const goToNextSlide = useCallback(() => {
		if (!isLastSlide && nextSlide) {
			if (isPresenterMode) {
				navigateInPresenterMode(nextSlide.id);
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
				navigateInPresenterMode(previousSlide.id);
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
	const getSlideNotes = useCallback((id: string) => {
		const slide = getSlideDataById(id);
		return slide?.notes || '';
	}, []);

	return {
		// Basic slide info
		currentSlideId: slideId,
		currentSlideIndex,
		totalSlides,
		isFirstSlide,
		isLastSlide,

		// Slide data
		slides: slideDefinitions,
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
		getSlideDataById,
		getSlideNotes,
	};
}
