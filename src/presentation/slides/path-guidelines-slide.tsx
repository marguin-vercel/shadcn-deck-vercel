import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const PathGuidelinesSlide: SlideDefinition = {
	slug: 'path-guidelines-slide',
	component: SlideComponent,
	notes: 'Guidelines slide showing recommended paths or best practices.',
	title: 'Path Guidelines',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-4xl space-y-8">
				<Heading size="2xl" align="left" className="font-bold">
					Recommended Path
				</Heading>
				<div className="space-y-8">
					<div className="flex items-start space-x-4">
						<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
							1
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-medium">
								Start with the basics
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Begin with fundamental concepts and build your understanding step by step.
							</Text>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
							2
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-medium">
								Practice with real examples
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Apply what you learn with hands-on practice and real-world scenarios.
							</Text>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
							3
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-medium">
								Scale and optimize
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Once comfortable, focus on optimization and scaling your solutions.
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}