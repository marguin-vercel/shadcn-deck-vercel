import type {
	INavigationService,
	NavigationContext,
	SlideDefinition,
} from '~/pkgs/deck/core/types/types';

export class NavigationService implements INavigationService {
	private slides: SlideDefinition[];

	constructor(slides: SlideDefinition[]) {
		this.slides = slides;
	}

	updateSlides(slides: SlideDefinition[]): void {
		this.slides = slides;
	}

	getTotalSlides(): number {
		return this.slides.length;
	}

	getSlideIndex(slug: string): number {
		const index = this.slides.findIndex((slide) => slide.slug === slug);
		return index;
	}

	isValidSlide(slug: string): boolean {
		return this.getSlideIndex(slug) !== -1;
	}

	goToSlide(index: number): string | null {
		if (index >= 0 && index < this.slides.length) {
			return this.slides[index]?.slug || null;
		}
		return null;
	}

	goToNext(currentSlug: string): string | null {
		const currentIndex = this.getSlideIndex(currentSlug);
		if (currentIndex === -1) return null;

		return this.goToSlide(currentIndex + 1);
	}

	goToPrevious(currentSlug: string): string | null {
		const currentIndex = this.getSlideIndex(currentSlug);
		if (currentIndex === -1) return null;

		return this.goToSlide(currentIndex - 1);
	}

	createNavigationContext(
		direction: 'next' | 'previous' | 'direct',
		fromSlug: string,
		toSlug: string
	): NavigationContext {
		return {
			direction,
			fromSlug,
			toSlug,
			timestamp: Date.now(),
		};
	}

	getSlideMetadata(slug: string) {
		const slide = this.slides.find((s) => s.slug === slug);
		return slide
			? {
					title: slide.title,
					notes: slide.notes,
					metadata: slide.metadata,
				}
			: null;
	}
}
