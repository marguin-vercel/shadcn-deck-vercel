import { type ComponentType, createElement } from 'react';
import type { SlideProps } from '~/components/presentation/core/slide';

import { CodeSlide } from '~/presentation/slides/code-slide';
import { ComponentOverviewSlide } from '~/presentation/slides/component-overview-slide';
import { FullscreenSlide } from '~/presentation/slides/fullscreen-slide';
import { GridSlide } from '~/presentation/slides/grid-slide';
import { ImageSlide } from '~/presentation/slides/image-slide';
import { KeyFeaturesSlide } from '~/presentation/slides/key-features-slide';
import { QuoteSlide } from '~/presentation/slides/quote-slide';
import { ThankYouSlide } from '~/presentation/slides/thank-you-slide';
// Import your individual slide components here
import { TitleSlide } from '~/presentation/slides/title-slide';

export interface SlideDefinition {
	id: string; // Using string IDs based on your page structure '/[slideId]'
	path: string; // Route for this slide
	component: ComponentType<SlideProps>; // Reference to the actual slide component
	notes: string; // Presenter notes
	title: string; // SEO / Page title
}

export const slideDefinitions: SlideDefinition[] = [
	{
		id: '1',
		path: '/1',
		component: TitleSlide,
		notes: `Welcome to the presentation!
		- Take a moment to introduce yourself
		- Mention the key topics we'll cover
		- Expected duration: 20 minutes`,
		title: 'Presentation Component System - Title',
	},
	{
		id: '2',
		path: '/2',
		component: ComponentOverviewSlide,
		notes: `Component Overview:
		- Introduce the main components
		- Explain their purpose and usage
		- Show how they can be combined
		- Mention the flexibility of the system`,
		title: 'Component Overview',
	},
	{
		id: '3',
		path: '/3',
		component: GridSlide,
		notes: `Grid Layout Example:
		- Show how the grid automatically adjusts to different screen sizes
		- Point out that the grid can have any number of columns
		- Mention that the spacing is customizable`,
		title: 'Grid Layout Example',
	},
	{
		id: '4',
		path: '/4',
		component: CodeSlide,
		notes: `Code Example:
		- This example shows a basic functional component
		- Point out the TypeScript typing
		- Note that we avoid class components for simplicity`,
		title: 'Code Example',
	},
	{
		id: '5',
		path: '/5',
		component: QuoteSlide,
		notes: `About this quote:
		- Steve Jobs said this during the 1997 WWDC
		- This philosophy guides our design principles
		- Connect this to our component system's focus on functionality`,
		title: 'Quote Slide',
	},
	{
		id: '6',
		path: '/6',
		component: ImageSlide,
		notes: `Image component:
		- Shows how to embed images
		- Discuss responsive handling (fit prop)
		- Mention loading optimization potential`,
		title: 'Image Component',
	},
	{
		id: '7',
		path: '/7',
		component: KeyFeaturesSlide,
		notes: `Key features summary:
		- Briefly touch on each feature (dark mode, responsive, etc.)
		- Highlight the benefits for developers/users`,
		title: 'Key Features',
	},
	{
		id: '8',
		path: '/8',
		component: FullscreenSlide,
		notes: `Fullscreen mode:
		- Explain how to activate (button/key)
		- Emphasize immersive experience`,
		title: 'Fullscreen Mode',
	},
	{
		id: '9',
		path: '/9',
		component: ThankYouSlide,
		notes: `Concluding remarks:
		- Thank the audience
		- Briefly reiterate call to action (Get Started/Docs)
		- Open for questions`,
		title: 'Thank You',
	},
];

// Helper functions
export const getSlideDataById = (id: string): SlideDefinition | undefined =>
	slideDefinitions.find((slide) => slide.id === id);

export const getSlideDataByIndex = (
	index: number
): SlideDefinition | undefined => slideDefinitions[index];

export const getAllSlideData = (): SlideDefinition[] => slideDefinitions;

// Extract just the components and notes for easier passing
export const allSlideComponents = slideDefinitions.map((def) =>
	//@ts-expect-error
	createElement(def.component, { key: def.id })
);
export const allPresenterNotes = slideDefinitions.map((def) => def.notes);
