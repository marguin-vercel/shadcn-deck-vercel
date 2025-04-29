import { Slide } from '~/components/presentation/core/slide';

import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Button } from '~/components/ui/button';

export function ThankYouSlide() {
	return (
		<Slide contentPosition="center" variant="gradient">
			<Heading size="2xl" align="center" animate>
				Thank You!
			</Heading>
			<Text size="lg" align="center" animate>
				Start creating beautiful presentations with our component system
			</Text>
			<div className="mt-8 flex justify-center space-x-4">
				<Button variant="default">Get Started</Button>
				<Button variant="secondary">Documentation</Button>
			</div>
		</Slide>
	);
}
