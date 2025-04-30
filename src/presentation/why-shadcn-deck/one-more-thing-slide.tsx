import { Monitor } from 'lucide-react';
import Link from 'next/link';
import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Button } from '~/components/ui/button';

export function OneMoreThingSlide() {
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
		<Slide contentPosition="center" variant="gradient">
			<Heading size="3xl" align="center" animate>
				<div className="flex items-center justify-center gap-2 font-medium">
					One More Thing...
				</div>
			</Heading>
			<Text
				size="lg"
				align="center"
				animate
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
