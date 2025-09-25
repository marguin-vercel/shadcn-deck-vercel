import { Monitor } from 'lucide-react';
import { Heading, Slide, Text } from '~/components/presentation';
import { Button } from '~/components/ui/button';
import type { SlideDefinition } from '~/pkgs/deck';

export const OneMoreThingSlide: SlideDefinition = {
	slug: 'one-more-thing-slide',
	component: SlideComponent,
	notes: 'One more thing...',
	title: 'One more thing...',
};

function SlideComponent() {
	// Function to open presenter view in a new tab
	const openPresenterView = () => {
		if (typeof window !== 'undefined') {
			// Open presenter view with the current slide ID
			window.open(
				`/presenter/${window.location.pathname.split('/').pop() || '1'}`,
				'_blank',
				'noopener,noreferrer'
			);
		}
	};

	return (
		<Slide contentPosition="center" padding='large'>
			<Heading size="2xl" align="center" mb='md'>
				<div className="flex items-center justify-center gap-2 font-medium">
					One More Thing...
				</div>
			</Heading>
			<Text
				size="lg"
				align="center"
				className="mx-auto max-w-3xl text-2xl"
			>
				Try out the presenter mode for a professional presentation experience
				with notes, slide preview, and more.
			</Text>
			<div className="mt-10 flex justify-center space-x-4">
				<Button variant="outline" size="xl" onClick={openPresenterView}>
					<Monitor className="mr-2" /> Launch Presenter Mode
				</Button>
			</div>
		</Slide>
	);
}
