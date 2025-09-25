import { Heading, Slide, Text } from '~/components/presentation';
import { Button } from '~/components/ui/button';
import type { SlideDefinition } from '~/pkgs/deck';

export const TitleSlide: SlideDefinition = {
	slug: '1',
	component: SlideComponent,
	notes: `What if...
		We could reimagine presentations for the modern web?`,
	title: 'What if...',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding='large'>
			<Heading size="2xl" align="center" mb='md'>
					What if...
			</Heading>
			<Text size="xl" align="center" className="mx-auto max-w-3xl">
				We could reimagine presentations for the modern web?
			</Text>
			<div className="mt-10 flex justify-center">
				<Button variant="outline" size="lg">
					Let's Explore
				</Button>
			</div>
		</Slide>
	);
}
