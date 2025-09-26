import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const KpiDashboardSlide: SlideDefinition = {
	slug: 'kpi-dashboard-slide',
	component: SlideComponent,
	notes: 'KPI dashboard slide displaying key performance indicators in a card layout.',
	title: 'Key Performance Indicators',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Key Performance Indicators
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Real-time metrics tracking our business performance and growth trajectory
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{/* Revenue */}
					<div className="rounded-lg border bg-card p-6 text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
								<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
								</svg>
							</div>
						</div>
						<Text size="xl" className="font-bold mb-1">
							$2.4M
						</Text>
						<Text size="sm" className="text-muted-foreground mb-2">
							Monthly Revenue
						</Text>
						<div className="flex items-center justify-center space-x-1 text-green-600">
							<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="m7 11 5-5 5 5M7 17l5-5 5 5"/>
							</svg>
							<Text size="xs" className="font-medium">
								+15.2%
							</Text>
						</div>
					</div>

					{/* Active Users */}
					<div className="rounded-lg border bg-card p-6 text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/20">
								<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							</div>
						</div>
						<Text size="xl" className="font-bold mb-1">
							847K
						</Text>
						<Text size="sm" className="text-muted-foreground mb-2">
							Active Users
						</Text>
						<div className="flex items-center justify-center space-x-1 text-blue-600">
							<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="m7 11 5-5 5 5M7 17l5-5 5 5"/>
							</svg>
							<Text size="xs" className="font-medium">
								+8.7%
							</Text>
						</div>
					</div>

					{/* Conversion Rate */}
					<div className="rounded-lg border bg-card p-6 text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20">
								<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8zM9 19l3-5-3-3-5 3z"/>
								</svg>
							</div>
						</div>
						<Text size="xl" className="font-bold mb-1">
							3.2%
						</Text>
						<Text size="sm" className="text-muted-foreground mb-2">
							Conversion Rate
						</Text>
						<div className="flex items-center justify-center space-x-1 text-purple-600">
							<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="m7 11 5-5 5 5M7 17l5-5 5 5"/>
							</svg>
							<Text size="xs" className="font-medium">
								+0.4%
							</Text>
						</div>
					</div>

					{/* Customer Satisfaction */}
					<div className="rounded-lg border bg-card p-6 text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="rounded-full bg-orange-100 p-3 dark:bg-orange-900/20">
								<svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								</svg>
							</div>
						</div>
						<Text size="xl" className="font-bold mb-1">
							4.8
						</Text>
						<Text size="sm" className="text-muted-foreground mb-2">
							Customer Rating
						</Text>
						<div className="flex items-center justify-center space-x-1 text-orange-600">
							<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="m7 11 5-5 5 5M7 17l5-5 5 5"/>
							</svg>
							<Text size="xs" className="font-medium">
								+0.2
							</Text>
						</div>
					</div>
				</div>

				{/* Secondary Metrics */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-center text-white">
						<Text size="sm" className="text-blue-100 mb-1">
							Response Time
						</Text>
						<Text size="lg" className="font-bold">
							&lt;120ms
						</Text>
					</div>
					<div className="rounded-lg bg-gradient-to-r from-green-500 to-green-600 p-4 text-center text-white">
						<Text size="sm" className="text-green-100 mb-1">
							Uptime
						</Text>
						<Text size="lg" className="font-bold">
							99.9%
						</Text>
					</div>
					<div className="rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-center text-white">
						<Text size="sm" className="text-purple-100 mb-1">
							Support Resolution
						</Text>
						<Text size="lg" className="font-bold">
							4.2hrs
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}