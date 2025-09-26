import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const StatsMetricsSlide: SlideDefinition = {
	slug: 'stats-metrics-slide',
	component: SlideComponent,
	notes: 'Statistics and metrics slide showcasing key performance indicators.',
	title: 'Key Metrics',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Impressive Results
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Data-driven success stories that demonstrate our platform's impact
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="text-center">
						<div className="mb-4">
							<Text size="xl" className="font-bold text-4xl text-primary">
								99.9%
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Uptime
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Reliable service you can count on
						</Text>
					</div>
					<div className="text-center">
						<div className="mb-4">
							<Text size="xl" className="font-bold text-4xl text-primary">
								10M+
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Users
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Trusted by millions worldwide
						</Text>
					</div>
					<div className="text-center">
						<div className="mb-4">
							<Text size="xl" className="font-bold text-4xl text-primary">
								500ms
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Response Time
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Lightning-fast performance
						</Text>
					</div>
					<div className="text-center">
						<div className="mb-4">
							<Text size="xl" className="font-bold text-4xl text-primary">
								150+
							</Text>
						</div>
						<Text size="lg" className="font-semibold">
							Countries
						</Text>
						<Text size="sm" className="mt-2 text-muted-foreground">
							Global reach and availability
						</Text>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="rounded-lg bg-muted/50 p-6 text-center">
						<Text size="xl" className="font-bold text-2xl text-primary">
							95%
						</Text>
						<Text size="sm" className="mt-2 font-medium">
							Customer Satisfaction
						</Text>
						<Text size="xs" className="mt-1 text-muted-foreground">
							Based on 50k+ reviews
						</Text>
					</div>
					<div className="rounded-lg bg-muted/50 p-6 text-center">
						<Text size="xl" className="font-bold text-2xl text-primary">
							50%
						</Text>
						<Text size="sm" className="mt-2 font-medium">
							Cost Reduction
						</Text>
						<Text size="xs" className="mt-1 text-muted-foreground">
							Average customer savings
						</Text>
					</div>
					<div className="rounded-lg bg-muted/50 p-6 text-center">
						<Text size="xl" className="font-bold text-2xl text-primary">
							24/7
						</Text>
						<Text size="sm" className="mt-2 font-medium">
							Support Available
						</Text>
						<Text size="xs" className="mt-1 text-muted-foreground">
							Expert help when you need it
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}