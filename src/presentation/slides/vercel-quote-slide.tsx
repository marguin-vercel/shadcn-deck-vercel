import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const VercelQuoteSlide: SlideDefinition = {
	slug: 'vercel-quote-slide',
	component: SlideComponent,
	notes: 'Quote slide featuring an inspirational or relevant quote.',
	title: 'Quote',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-4xl space-y-8 text-center">
				<div className="space-y-6">
					<Text size="xl" align="center" className="font-light italic leading-relaxed">
						"The best way to predict the future is to invent it."
					</Text>
					<div className="flex justify-center">
						<div className="h-0.5 w-16 bg-primary" />
					</div>
					<Text size="lg" align="center" className="text-muted-foreground">
						Alan Kay
					</Text>
				</div>
			</div>
		</Slide>
	);
}