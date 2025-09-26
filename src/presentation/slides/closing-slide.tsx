import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ClosingSlide: SlideDefinition = {
	slug: 'closing-slide',
	component: SlideComponent,
	notes: 'Closing slide to wrap up the presentation with key takeaways.',
	title: 'Closing',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-4xl space-y-8 text-center">
				<Heading size="2xl" align="center" className="font-bold">
					Key Takeaways
				</Heading>
				<div className="space-y-6">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="space-y-3">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="font-bold text-lg text-primary">1</span>
							</div>
							<Text size="sm" className="font-medium">
								First key takeaway
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Brief description of the main point
							</Text>
						</div>
						<div className="space-y-3">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="font-bold text-lg text-primary">2</span>
							</div>
							<Text size="sm" className="font-medium">
								Second key takeaway
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Brief description of the main point
							</Text>
						</div>
						<div className="space-y-3">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<span className="font-bold text-lg text-primary">3</span>
							</div>
							<Text size="sm" className="font-medium">
								Third key takeaway
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Brief description of the main point
							</Text>
						</div>
					</div>
				</div>
				<Text size="lg" align="center" className="mt-8">
					Ready to get started?
				</Text>
			</div>
		</Slide>
	);
}