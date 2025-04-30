import { type ComponentType, createElement } from 'react';
import type { SlideProps } from '~/components/presentation/core/slide';

// Import slides
import { EverythingSlide } from '~/presentation/why-shadcn-deck/everything-slide';
import { MadeForDevelopersSlide } from '~/presentation/why-shadcn-deck/made-for-developers-slide';
import { OneMoreThingSlide } from './why-shadcn-deck/one-more-thing-slide';
import { ThankYouSlide } from './why-shadcn-deck/thank-you-slide';
import { TitleSlide } from './why-shadcn-deck/title-slide';
import { WorksLikeAppSlide } from './why-shadcn-deck/works-like-your-app-slide';

export interface SlideDefinition {
	id: string;
	path: string;
	component: ComponentType<SlideProps>;
	notes: string;
	title: string;
}

export const slideDefinitions: SlideDefinition[] = [
	{
		id: '1',
		path: '/1',
		component: TitleSlide,
		notes: `Opening: What if we could rethink presentations?
    - Build suspense about what is possible with the web
    - No need to name shadcn/deck yet`,
		title: 'What if... Modern Presentations',
	},
	// {
	// 	id: '2',
	// 	path: '/2',
	// 	component: WhySlide,
	// 	notes: `Why we're building this:
	// - Traditional tools are outdated
	// - Need for speed, flexibility, developer experience`,
	// 	title: 'Why We Built This',
	// },
	{
		id: '2',
		path: '/2',
		component: WorksLikeAppSlide,
		notes: `App-like behavior:
    - Same UI components as your app
    - Embed demos, live widgets directly`,
		title: 'Works Like Your App',
	},
	{
		id: '3',
		path: '/3',
		component: MadeForDevelopersSlide,
		notes: `Made for developers:
    - React, Next.js, shadcn/ui stack
    - Reusable, customizable components
    - Interactivity and live code demos`,
		title: 'Made for Developers',
	},
	// {
	// 	id: '5',
	// 	path: '/5',
	// 	component: UseCasesSlide,
	// 	notes: `Use cases:
	// - Conference talks, product demos, technical education
	// - Internal docs and developer content`,
	// 	title: 'Perfect for Any Talk',
	// },
	{
		id: '4',
		path: '/4',
		component: EverythingSlide,
		notes: `Feature overview:
    - Code blocks, images, grid layouts, notes
    - Fullscreen mode, dark mode, responsive design`,
		title: 'Everything You Need',
	},
	{
		id: '5',
		path: '/5',
		component: ThankYouSlide,
		notes: `Big reveal:
    - All of this was built using shadcn/deck
    - Invite to GitHub repo, get started`,
		title: 'Introducing shadcn/deck',
	},
	{
		id: '6',
		path: '/6',
		component: OneMoreThingSlide,
		notes: `One more thing:
    - Demonstrate the presenter mode feature
    - Interactive button to launch presenter view`,
		title: 'One More Thing...',
	},
];
// Helper functions
export const getSlideDataById = (id: string): SlideDefinition | undefined =>
	slideDefinitions.find((slide) => slide.id === id);

export const getSlideDataByIndex = (
	index: number
): SlideDefinition | undefined => slideDefinitions[index];

export const getAllSlideData = (): SlideDefinition[] => slideDefinitions;

export const allSlideComponents = slideDefinitions.map((def) =>
	//@ts-expect-error
	createElement(def.component, { key: def.id })
);

export const allPresenterNotes = slideDefinitions.map((def) => def.notes);
