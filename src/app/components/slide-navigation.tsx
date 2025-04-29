'use client';

import { Button } from '~/components/ui/button';
import { usePresentation } from '~/hooks/use-presentation';

export default function SlideNavigation() {
	const { goToNextSlide, goToPreviousSlide, currentSlideIndex, totalSlides } =
		usePresentation();

	const isFirstSlide = currentSlideIndex === 0;
	const isLastSlide = currentSlideIndex === totalSlides - 1;

	return (
		<div className="flex items-center gap-4">
			<Button
				onClick={goToPreviousSlide}
				disabled={isFirstSlide}
				variant="ghost"
				size="icon"
				aria-label="Previous slide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<title>Previous slide</title>
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</Button>

			<Button
				onClick={goToNextSlide}
				disabled={isLastSlide}
				variant="ghost"
				size="icon"
				aria-label="Next slide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<title>Next slide</title>
					<path d="M9 18l6-6-6-6" />
				</svg>
			</Button>
		</div>
	);
}
