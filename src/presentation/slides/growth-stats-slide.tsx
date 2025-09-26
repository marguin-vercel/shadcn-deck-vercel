import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const GrowthStatsSlide: SlideDefinition = {
	slug: 'growth-stats-slide',
	component: SlideComponent,
	notes: 'Growth statistics slide highlighting business expansion and success metrics.',
	title: 'Growth Metrics',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-5xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Exponential Growth
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Our rapid expansion demonstrates market validation and customer satisfaction
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					<div className="space-y-8">
						<div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-6 dark:from-blue-950 dark:to-blue-900">
							<div>
								<Text size="sm" className="font-medium text-blue-600 dark:text-blue-400">
									Revenue Growth
								</Text>
								<Text size="xl" className="font-bold text-3xl text-blue-900 dark:text-blue-100">
									400%
								</Text>
								<Text size="xs" className="text-blue-600 dark:text-blue-400">
									Year over year
								</Text>
							</div>
							<span className="text-4xl text-blue-600">📈</span>
						</div>
						<div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-green-50 to-green-100 p-6 dark:from-green-950 dark:to-green-900">
							<div>
								<Text size="sm" className="font-medium text-green-600 dark:text-green-400">
									Customer Base
								</Text>
								<Text size="xl" className="font-bold text-3xl text-green-900 dark:text-green-100">
									2.5M+
								</Text>
								<Text size="xs" className="text-green-600 dark:text-green-400">
									Active users
								</Text>
							</div>
							<span className="text-4xl text-green-600">👥</span>
						</div>
					</div>
					<div className="space-y-8">
						<div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 p-6 dark:from-purple-950 dark:to-purple-900">
							<div>
								<Text size="sm" className="font-medium text-purple-600 dark:text-purple-400">
									Market Presence
								</Text>
								<Text size="xl" className="font-bold text-3xl text-purple-900 dark:text-purple-100">
									45+
								</Text>
								<Text size="xs" className="text-purple-600 dark:text-purple-400">
									Countries served
								</Text>
							</div>
							<span className="text-4xl text-purple-600">🌍</span>
						</div>
						<div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 p-6 dark:from-orange-950 dark:to-orange-900">
							<div>
								<Text size="sm" className="font-medium text-orange-600 dark:text-orange-400">
									Team Size
								</Text>
								<Text size="xl" className="font-bold text-3xl text-orange-900 dark:text-orange-100">
									500+
								</Text>
								<Text size="xs" className="text-orange-600 dark:text-orange-400">
									Global employees
								</Text>
							</div>
							<span className="text-4xl text-orange-600">🚀</span>
						</div>
					</div>
				</div>
				<div className="mt-8 text-center">
					<Text size="sm" className="text-muted-foreground">
						* All metrics as of Q4 2024, based on verified company data
					</Text>
				</div>
			</div>
		</Slide>
	);
}