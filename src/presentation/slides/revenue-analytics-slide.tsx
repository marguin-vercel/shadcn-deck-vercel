import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const RevenueAnalyticsSlide: SlideDefinition = {
	slug: 'revenue-analytics-slide',
	component: SlideComponent,
	notes: 'Revenue analytics slide with visual charts and financial metrics.',
	title: 'Revenue Analytics',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Revenue Analytics
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Comprehensive financial performance insights and revenue growth trends
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Revenue Chart Visualization */}
					<div className="rounded-lg border bg-card p-6">
						<Text size="lg" className="font-semibold mb-6">
							Monthly Revenue Growth
						</Text>
						<div className="space-y-4">
							<div className="flex items-end justify-between h-32 space-x-2">
								<div className="flex flex-col items-center space-y-2">
									<div className="w-8 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
									<Text size="xs" className="text-muted-foreground">Jan</Text>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<div className="w-8 bg-blue-500 rounded-t" style={{height: '75%'}}></div>
									<Text size="xs" className="text-muted-foreground">Feb</Text>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<div className="w-8 bg-blue-500 rounded-t" style={{height: '55%'}}></div>
									<Text size="xs" className="text-muted-foreground">Mar</Text>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<div className="w-8 bg-blue-500 rounded-t" style={{height: '85%'}}></div>
									<Text size="xs" className="text-muted-foreground">Apr</Text>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<div className="w-8 bg-blue-500 rounded-t" style={{height: '95%'}}></div>
									<Text size="xs" className="text-muted-foreground">May</Text>
								</div>
								<div className="flex flex-col items-center space-y-2">
									<div className="w-8 bg-green-500 rounded-t" style={{height: '100%'}}></div>
									<Text size="xs" className="text-muted-foreground">Jun</Text>
								</div>
							</div>
						</div>
						<div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
							<span>$0</span>
							<span>$3M</span>
						</div>
					</div>

					{/* Key Financial Metrics */}
					<div className="space-y-6">
						<Text size="lg" className="font-semibold">
							Key Financial Metrics
						</Text>
						<div className="space-y-4">
							<div className="flex items-center justify-between rounded-lg border bg-card p-4">
								<div className="flex items-center space-x-3">
									<div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
										<div className="h-4 w-4 rounded-full bg-green-500"></div>
									</div>
									<div>
										<Text size="sm" className="font-medium">Annual Recurring Revenue</Text>
										<Text size="xs" className="text-muted-foreground">ARR Growth</Text>
									</div>
								</div>
								<Text size="lg" className="font-bold">$28.8M</Text>
							</div>

							<div className="flex items-center justify-between rounded-lg border bg-card p-4">
								<div className="flex items-center space-x-3">
									<div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
										<div className="h-4 w-4 rounded-full bg-blue-500"></div>
									</div>
									<div>
										<Text size="sm" className="font-medium">Customer Lifetime Value</Text>
										<Text size="xs" className="text-muted-foreground">Average CLV</Text>
									</div>
								</div>
								<Text size="lg" className="font-bold">$4,250</Text>
							</div>

							<div className="flex items-center justify-between rounded-lg border bg-card p-4">
								<div className="flex items-center space-x-3">
									<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
										<div className="h-4 w-4 rounded-full bg-purple-500"></div>
									</div>
									<div>
										<Text size="sm" className="font-medium">Customer Acquisition Cost</Text>
										<Text size="xs" className="text-muted-foreground">Average CAC</Text>
									</div>
								</div>
								<Text size="lg" className="font-bold">$340</Text>
							</div>

							<div className="flex items-center justify-between rounded-lg border bg-card p-4">
								<div className="flex items-center space-x-3">
									<div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
										<div className="h-4 w-4 rounded-full bg-orange-500"></div>
									</div>
									<div>
										<Text size="sm" className="font-medium">Monthly Churn Rate</Text>
										<Text size="xs" className="text-muted-foreground">Customer Churn</Text>
									</div>
								</div>
								<Text size="lg" className="font-bold">2.1%</Text>
							</div>
						</div>
					</div>
				</div>

				{/* Summary Statistics */}
				<div className="rounded-lg bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div className="text-center">
							<Text size="xl" className="font-bold mb-2">+127%</Text>
							<Text size="sm" className="opacity-90">YoY Revenue Growth</Text>
						</div>
						<div className="text-center">
							<Text size="xl" className="font-bold mb-2">98.7%</Text>
							<Text size="sm" className="opacity-90">Customer Retention</Text>
						</div>
						<div className="text-center">
							<Text size="xl" className="font-bold mb-2">12.5x</Text>
							<Text size="sm" className="opacity-90">LTV to CAC Ratio</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}