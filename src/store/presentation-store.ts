import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
	broadcastSlideChange,
	initTabSync,
	listenToSlideChanges,
} from '~/lib/tab-sync';
import { getSlideDataById, slideDefinitions } from '~/presentation/router';

interface PresentationState {
	// Current slide state
	slideId: string;
	activeSlide: number;
	totalSlides: number;
	isFirstSlide: boolean;
	isLastSlide: boolean;
	isPresenterMode: boolean;

	// UI state
	isFullscreen: boolean;

	// Actions
	setSlideId: (slideId: string) => void;
	setTotalSlides: (count: number) => void;
	goToNextSlide: () => void;
	goToPreviousSlide: () => void;
	goToSlide: (index: number) => void;
	toggleFullscreen: () => void;
	setPresenterMode: (isPresenter: boolean) => void;
	initSyncListeners: () => void;
}

export const usePresentationStore = create<PresentationState>()(
	persist(
		(set, get) => ({
			// Initial state
			slideId: slideDefinitions[0]?.id || '',
			activeSlide: 0,
			totalSlides: slideDefinitions.length,
			isFirstSlide: true,
			isLastSlide: slideDefinitions.length <= 1,
			isFullscreen: false,
			isPresenterMode: false,

			// Set presenter mode flag
			setPresenterMode: (isPresenter) => {
				set({ isPresenterMode: isPresenter });
			},

			// Initialize listeners for cross-tab communication
			initSyncListeners: () => {
				if (typeof window === 'undefined') {
					return;
				}

				// Initialize tab sync
				initTabSync();

				// Only add listener if not already initialized
				if (!get().isPresenterMode) {
					// Set up listener for slide changes from presenter
					listenToSlideChanges((slideId) => {
						const store = get();
						// Only update if this isn't the presenter (avoid loops)
						if (!store.isPresenterMode && slideId !== store.slideId) {
							store.setSlideId(slideId);

							// Update URL without full page refresh
							window.history.pushState({}, '', `/${slideId}`);
							// Dispatch custom event for components listening to URL changes
							window.dispatchEvent(
								new CustomEvent('urlchange', {
									detail: { path: `/${slideId}`, slideId },
								})
							);
						}
					});
				}
			},

			// Actions
			setSlideId: (slideId) => {
				const slideData = getSlideDataById(slideId);
				if (slideData) {
					// Find index of current slide
					const slideIndex = slideDefinitions.findIndex(
						(slide) => slide.id === slideId
					);
					if (slideIndex >= 0) {
						set({
							slideId,
							activeSlide: slideIndex,
							isFirstSlide: slideIndex === 0,
							isLastSlide: slideIndex === get().totalSlides - 1,
						});
					}
				}
			},

			setTotalSlides: (count) => {
				set({ totalSlides: count });
			},

			goToNextSlide: () => {
				const { activeSlide, totalSlides, isPresenterMode } = get();

				if (activeSlide < totalSlides - 1) {
					const newSlideIndex = activeSlide + 1;
					const newSlideId = slideDefinitions[newSlideIndex]?.id || '';

					if (newSlideId) {
						set({
							slideId: newSlideId,
							activeSlide: newSlideIndex,
							isFirstSlide: newSlideIndex === 0,
							isLastSlide: newSlideIndex === totalSlides - 1,
						});

						// Update URL without full page refresh
						window.history.pushState({}, '', `/${newSlideId}`);
						// Dispatch custom event for components listening to URL changes
						window.dispatchEvent(
							new CustomEvent('urlchange', {
								detail: { path: `/${newSlideId}`, slideId: newSlideId },
							})
						);

						// If in presenter mode, broadcast the change to other tabs
						if (isPresenterMode) {
							broadcastSlideChange(newSlideId);
						}
					}
				}
			},

			goToPreviousSlide: () => {
				const { activeSlide, totalSlides, isPresenterMode } = get();

				if (activeSlide > 0) {
					const newSlideIndex = activeSlide - 1;
					const newSlideId = slideDefinitions[newSlideIndex]?.id || '';

					if (newSlideId) {
						set({
							slideId: newSlideId,
							activeSlide: newSlideIndex,
							isFirstSlide: newSlideIndex === 0,
							isLastSlide: newSlideIndex === totalSlides - 1,
						});

						// Update URL without full page refresh
						window.history.pushState({}, '', `/${newSlideId}`);
						// Dispatch custom event for components listening to URL changes
						window.dispatchEvent(
							new CustomEvent('urlchange', {
								detail: { path: `/${newSlideId}`, slideId: newSlideId },
							})
						);

						// If in presenter mode, broadcast the change to other tabs
						if (isPresenterMode) {
							broadcastSlideChange(newSlideId);
						}
					}
				}
			},

			goToSlide: (index) => {
				const { totalSlides, isPresenterMode } = get();

				if (index >= 0 && index < totalSlides) {
					const newSlideId = slideDefinitions[index]?.id || '';

					if (newSlideId) {
						set({
							slideId: newSlideId,
							activeSlide: index,
							isFirstSlide: index === 0,
							isLastSlide: index === totalSlides - 1,
						});

						// Update URL without full page refresh
						window.history.pushState({}, '', `/${newSlideId}`);
						// Dispatch custom event for components listening to URL changes
						window.dispatchEvent(
							new CustomEvent('urlchange', {
								detail: { path: `/${newSlideId}`, slideId: newSlideId },
							})
						);

						// If in presenter mode, broadcast the change to other tabs
						if (isPresenterMode) {
							broadcastSlideChange(newSlideId);
						}
					}
				}
			},

			toggleFullscreen: () => {
				const { isFullscreen } = get();

				if (isFullscreen) {
					if (document.exitFullscreen) {
						document.exitFullscreen();
					}
				} else if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				}
				set({ isFullscreen: !isFullscreen });
			},
		}),
		{
			name: 'presentation-storage',
		}
	)
);
