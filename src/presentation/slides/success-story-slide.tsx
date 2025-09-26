import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const SuccessStorySlide: SlideDefinition = {
	slug: 'success-story-slide',
	component: SlideComponent,
	notes: 'Success story slide showcasing client achievements and case study results.',
	title: 'Success Story',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-5xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Customer Success Story
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						How GlobalTech transformed their operations and achieved unprecedented growth
					</Text>
				</div>
				<div className="space-y-8 rounded-lg border bg-card p-8">
					<div className="flex items-center space-x-4">
						<div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700">
							<Text size="lg" className="font-bold text-white">
								GT
							</Text>
						</div>
						<div>
							<Text size="lg" className="font-semibold">
								GlobalTech Industries
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Fortune 500 Manufacturing Company
							</Text>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div className="space-y-6">
							<div>
								<Text size="lg" className="mb-3 font-semibold text-primary">
									The Challenge
								</Text>
								<Text size="sm" className="text-muted-foreground">
									GlobalTech was struggling with fragmented systems across
									12 manufacturing facilities. Manual processes led to
									delays, errors, and limited visibility into operations.
								</Text>
							</div>
							<div>
								<Text size="lg" className="mb-3 font-semibold text-primary">
									Our Solution
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Implemented our integrated platform to unify operations,
									automate workflows, and provide real-time analytics
									across all facilities.
								</Text>
							</div>
						</div>
						<div className="space-y-6">
							<div>
								<Text size="lg" className="mb-3 font-semibold text-primary">
									The Results
								</Text>
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<Text size="sm" className="text-muted-foreground">
											Production Efficiency
										</Text>
										<Text size="sm" className="font-semibold text-green-600">
											+45%
										</Text>
									</div>
									<div className="flex items-center justify-between">
										<Text size="sm" className="text-muted-foreground">
											Error Reduction
										</Text>
										<Text size="sm" className="font-semibold text-green-600">
											-68%
										</Text>
									</div>
									<div className="flex items-center justify-between">
										<Text size="sm" className="text-muted-foreground">
											Cost Savings
										</Text>
										<Text size="sm" className="font-semibold text-green-600">
											$2.3M
										</Text>
									</div>
									<div className="flex items-center justify-between">
										<Text size="sm" className="text-muted-foreground">
											ROI Timeline
										</Text>
										<Text size="sm" className="font-semibold text-green-600">
											8 months
										</Text>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="border-t pt-6">
						<div className="relative text-center">
							<Text size="lg" className="font-medium italic">
								"The transformation has been remarkable. We've not only improved
								our operational efficiency but also gained the agility to respond
								quickly to market demands."
							</Text>
							<div className="mt-4">
								<Text size="sm" className="font-semibold">
									Jennifer Chen, COO
								</Text>
								<Text size="xs" className="text-muted-foreground">
									GlobalTech Industries
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}