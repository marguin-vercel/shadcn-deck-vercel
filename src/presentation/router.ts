import type { SlideDefinition } from '~/pkgs/deck';
import { EverythingSlide } from './slides/everything-slide';
import { IntroducingVercelDeck } from './slides/introducing-vercel-deck';
import { OneMoreThingSlide } from './slides/one-more-thing-slide';
import { TitleSlide } from './slides/title-slide';
import { WorksLikeAppSlide } from './slides/works-like-your-app-slide';
import { MadeForDevelopersSlide } from './slides/made-for-developers-slide';
import { VercelPresentationSlides } from './slides/vercel-presentation-slides';

export const slideDefinitions: SlideDefinition[] = [
	// Original shadcn-deck slides
	TitleSlide,
	WorksLikeAppSlide,
	MadeForDevelopersSlide,
	EverythingSlide,
	OneMoreThingSlide,
	IntroducingVercelDeck,

	// All original Vercel presentation slides
	...VercelPresentationSlides,
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
