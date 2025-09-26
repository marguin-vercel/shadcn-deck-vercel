import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const WelcomeSlide: SlideDefinition = {
	slug: 'welcome-slide',
	component: SlideComponent,
	notes: 'Welcome slide to greet the audience and set the tone for the presentation.',
	title: 'Welcome',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-4xl space-y-8 text-center">
				<Heading size="2xl" align="center" className="font-bold">
					Welcome
				</Heading>
				<Text size="xl" align="center" className="mx-auto max-w-3xl">
					Thank you for joining us today. We're excited to share what we've been working on
					and how it can help you build better experiences.
				</Text>
				<div className="mt-12">
					<Text size="sm" align="center" className="text-muted-foreground">
						Let's get started
					</Text>
				</div>
			</div>
		</Slide>
	);
}