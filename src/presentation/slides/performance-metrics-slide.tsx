import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const PerformanceMetricsSlide: SlideDefinition = {
	slug: 'performance-metrics-slide',
	component: SlideComponent,
	notes: 'Performance metrics slide showing technical benchmarks and system performance.',
	title: 'Performance Metrics',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Benchmark Performance
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Industry-leading performance metrics that set us apart from the competition
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div className="space-y-6">
						<div className="rounded-lg border bg-card p-6">
							<div className="mb-4 flex items-center justify-between">
								<Text size="lg" className="font-semibold">
									Page Load Speed
								</Text>
								<svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
									<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
								</svg>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<Text size="sm" className="text-muted-foreground">
										Average
									</Text>
									<Text size="sm" className="font-medium">
										1.2s
									</Text>
								</div>
								<div className="h-2 w-full rounded-full bg-muted">
									<div className="h-2 w-[85%] rounded-full bg-primary" />
								</div>
								<Text size="xs" className="text-muted-foreground">
									85% faster than industry average
								</Text>
							</div>
						</div>
						<div className="rounded-lg border bg-card p-6">
							<div className="mb-4 flex items-center justify-between">
								<Text size="lg" className="font-semibold">
									API Response Time
								</Text>
								<svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
									<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
								</svg>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<Text size="sm" className="text-muted-foreground">
										Average
									</Text>
									<Text size="sm" className="font-medium">
										45ms
									</Text>
								</div>
								<div className="h-2 w-full rounded-full bg-muted">
									<div className="h-2 w-[92%] rounded-full bg-primary" />
								</div>
								<Text size="xs" className="text-muted-foreground">
									92% improvement over last year
								</Text>
							</div>
						</div>
					</div>
					<div className="space-y-6">
						<div className="rounded-lg border bg-card p-6">
							<div className="mb-4 flex items-center justify-between">
								<Text size="lg" className="font-semibold">
									System Availability
								</Text>
								<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
								</svg>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<Text size="sm" className="text-muted-foreground">
										Uptime
									</Text>
									<Text size="sm" className="font-medium">
										99.99%
									</Text>
								</div>
								<div className="h-2 w-full rounded-full bg-muted">
									<div className="h-2 w-[99%] rounded-full bg-primary" />
								</div>
								<Text size="xs" className="text-muted-foreground">
									Only 4 minutes downtime per month
								</Text>
							</div>
						</div>
						<div className="rounded-lg border bg-card p-6">
							<div className="mb-4 flex items-center justify-between">
								<Text size="lg" className="font-semibold">
									Throughput Capacity
								</Text>
								<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path d="M3 3v18h18"/>
									<path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
								</svg>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<Text size="sm" className="text-muted-foreground">
										Requests/sec
									</Text>
									<Text size="sm" className="font-medium">
										50,000+
									</Text>
								</div>
								<div className="h-2 w-full rounded-full bg-muted">
									<div className="h-2 w-[95%] rounded-full bg-primary" />
								</div>
								<Text size="xs" className="text-muted-foreground">
									Scales automatically with demand
								</Text>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<div className="rounded-lg bg-muted/30 p-4 text-center">
						<Text size="lg" className="font-bold text-primary">
							&lt;10ms
						</Text>
						<Text size="sm" className="font-medium">
							Latency
						</Text>
					</div>
					<div className="rounded-lg bg-muted/30 p-4 text-center">
						<Text size="lg" className="font-bold text-primary">
							100TB+
						</Text>
						<Text size="sm" className="font-medium">
							Data Processed Daily
						</Text>
					</div>
					<div className="rounded-lg bg-muted/30 p-4 text-center">
						<Text size="lg" className="font-bold text-primary">
							24/7
						</Text>
						<Text size="sm" className="font-medium">
							Monitoring
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}