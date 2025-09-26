import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const FeatureStorySlide: SlideDefinition = {
	slug: 'feature-story-slide',
	component: SlideComponent,
	notes: 'Feature story slide highlighting a key product or service story.',
	title: 'Feature Story',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-4xl space-y-8">
				<Heading size="2xl" align="left" className="font-bold">
					Feature Story
				</Heading>
				<div className="space-y-6">
					<Text size="lg" className="font-medium">
						The Challenge
					</Text>
					<Text size="sm" className="max-w-3xl text-muted-foreground">
						Describe the problem or challenge that your feature or product addresses.
						Make it relatable and help your audience understand why this matters.
					</Text>

					<Text size="lg" className="mt-8 font-medium">
						Our Solution
					</Text>
					<Text size="sm" className="max-w-3xl text-muted-foreground">
						Explain how your feature solves the problem. Focus on the benefits and
						outcomes rather than just the technical details. What value does it provide?
					</Text>

					<Text size="lg" className="mt-8 font-medium">
						The Impact
					</Text>
					<Text size="sm" className="max-w-3xl text-muted-foreground">
						Share the results, metrics, or positive outcomes that demonstrate the
						success of your solution. Use specific examples when possible.
					</Text>
				</div>
			</div>
		</Slide>
	);
}