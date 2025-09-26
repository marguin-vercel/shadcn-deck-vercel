import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const Slide02PresentationDeckTemplate: SlideDefinition = {
	slug: 'slide-02-presentation-deck-template',
	component: SlideComponent,
	notes: 'Main title slide introducing the presentation deck template.',
	title: 'Presentation Deck Template',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large" className="bg-black">
			<div className="text-center space-y-4">
				<Heading size="2xl" align="center" className="text-white font-bold">
					Presentation Deck Template
				</Heading>
				<Text size="lg" align="center" className="text-gray-400">
					Month 23
				</Text>
			</div>
		</Slide>
	);
}