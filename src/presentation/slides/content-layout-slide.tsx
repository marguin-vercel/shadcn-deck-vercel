import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ContentLayoutSlide: SlideDefinition = {
	slug: 'content-layout-slide',
	component: SlideComponent,
	notes: 'Content layout slide with structured information and visual hierarchy.',
	title: 'Content Overview',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Product Overview
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Comprehensive platform designed to streamline your workflow and boost productivity
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					<div className="space-y-8">
						<div>
							<Text size="lg" className="mb-4 font-semibold text-primary">
								Core Features
							</Text>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
									<div>
										<Text size="sm" className="font-medium">
											Advanced Analytics Dashboard
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Real-time insights and performance metrics
										</Text>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
									<div>
										<Text size="sm" className="font-medium">
											Automated Workflow Management
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Streamline processes with intelligent automation
										</Text>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
									<div>
										<Text size="sm" className="font-medium">
											Enterprise-Grade Security
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Bank-level encryption and compliance standards
										</Text>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
									<div>
										<Text size="sm" className="font-medium">
											Seamless Integrations
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Connect with 100+ popular tools and services
										</Text>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space-y-8">
						<div>
							<Text size="lg" className="mb-4 font-semibold text-primary">
								Key Benefits
							</Text>
							<div className="space-y-4 rounded-lg bg-muted/30 p-6">
								<div className="flex items-center space-x-3">
									<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path d="M3 3v18h18"/>
										<path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
									</svg>
									<div>
										<Text size="sm" className="font-medium">
											Increase Productivity by 40%
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Proven results across 1000+ companies
										</Text>
									</div>
								</div>
								<div className="flex items-center space-x-3">
									<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<line x1="12" y1="1" x2="12" y2="23"/>
										<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
									</svg>
									<div>
										<Text size="sm" className="font-medium">
											Reduce Operating Costs
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Average savings of $50k per year
										</Text>
									</div>
								</div>
								<div className="flex items-center space-x-3">
									<svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
										<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
									</svg>
									<div>
										<Text size="sm" className="font-medium">
											Faster Time to Market
										</Text>
										<Text size="xs" className="text-muted-foreground">
											Launch products 3x faster
										</Text>
									</div>
								</div>
							</div>
						</div>
						<div>
							<Text size="lg" className="mb-4 font-semibold text-primary">
								Implementation
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Our expert team will guide you through a seamless onboarding process,
								ensuring quick deployment and immediate value realization.
								Get up and running in just 24 hours with dedicated support.
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}