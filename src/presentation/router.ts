import type { SlideDefinition } from '~/pkgs/deck';
import { EverythingSlide } from './slides/everything-slide';
import { ThankYouSlide } from './slides/thank-you-slide';
import { OneMoreThingSlide } from './slides/one-more-thing-slide';
import { TitleSlide } from './slides/title-slide';
import { WorksLikeAppSlide } from './slides/works-like-your-app-slide';
import { MadeForDevelopersSlide } from './slides/made-for-developers-slide';

export const slideDefinitions: SlideDefinition[] = [
	TitleSlide,
	WorksLikeAppSlide,
	MadeForDevelopersSlide,
	EverythingSlide,
	ThankYouSlide,
	OneMoreThingSlide,
];

// Helper functions
export const getSlideDataBySlug = (
	slug: string
): SlideDefinition | undefined => {
	return slideDefinitions.find((slide) => slide.slug === slug);
};

export const getSlideDataByIndex = (
	index: number
): SlideDefinition | undefined => slideDefinitions[index];
