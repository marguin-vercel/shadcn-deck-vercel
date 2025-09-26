import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const BlueContainersSlide: SlideDefinition = {
	slug: 'blue-containers-slide',
	component: SlideComponent,
	notes: 'Blue outlined containers slide with various sized rectangles and circle shapes.',
	title: 'Blue Container Layout',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Professional Containers
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Clean, professional styling for business content
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="space-y-6">
						<div className="rounded-lg border-2 border-blue-500 bg-transparent p-8 text-center">
							<Text size="lg" className="font-semibold mb-2 text-blue-600">
								Primary Content
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Professional presentation with clear visual hierarchy
							</Text>
						</div>
						<div className="rounded-lg border-2 border-blue-500 bg-transparent p-6 text-center">
							<Text size="sm" className="font-semibold mb-2 text-blue-600">
								Secondary Content
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Supporting information
							</Text>
						</div>
					</div>
					<div className="space-y-6">
						<div className="rounded-lg border-2 border-blue-500 bg-transparent p-6 text-center">
							<Text size="sm" className="font-semibold mb-2 text-blue-600">
								Standard Section
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Consistent brand element
							</Text>
						</div>
						<div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 text-center">
							<Text size="xs" className="font-semibold mb-1 text-blue-600">
								Detail Box
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Specific details
							</Text>
						</div>
						<div className="rounded-lg border-2 border-blue-500 bg-transparent p-4 text-center">
							<Text size="xs" className="font-semibold mb-1 text-blue-600">
								Info Point
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Brief summary
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="h-48 w-48 rounded-full border-2 border-blue-500 bg-transparent flex items-center justify-center text-center p-6">
							<div>
								<Text size="sm" className="font-semibold mb-2 text-blue-600">
									Key Metric
								</Text>
								<Text size="xs" className="text-muted-foreground">
									Highlight important statistics and KPIs
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}