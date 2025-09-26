import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ProductShowcaseSlide: SlideDefinition = {
	slug: 'product-showcase-slide',
	component: SlideComponent,
	notes: 'Product showcase slide highlighting key product features with visuals.',
	title: 'Product Showcase',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Product Showcase
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						See our platform in action with real-world examples and use cases
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div className="space-y-6">
						<div className="flex aspect-video items-center justify-center rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
							<div className="space-y-4 text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
									<span className="text-2xl">📊</span>
								</div>
								<Text size="sm" className="text-muted-foreground">
									Dashboard Interface
								</Text>
							</div>
						</div>
						<div className="space-y-3">
							<Text size="lg" className="font-semibold">
								Analytics Dashboard
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Real-time data visualization with customizable charts,
								KPI tracking, and automated reporting capabilities.
								Monitor your business performance at a glance.
							</Text>
						</div>
					</div>
					<div className="space-y-6">
						<div className="flex aspect-video items-center justify-center rounded-lg border bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900">
							<div className="space-y-4 text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
									<span className="text-2xl">🔧</span>
								</div>
								<Text size="sm" className="text-muted-foreground">
									Workflow Builder
								</Text>
							</div>
						</div>
						<div className="space-y-3">
							<Text size="lg" className="font-semibold">
								Workflow Automation
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Drag-and-drop workflow builder with advanced automation rules.
								Streamline your processes and eliminate manual tasks
								with intelligent triggers and actions.
							</Text>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="rounded-lg bg-muted/30 p-4 text-center">
						<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<span className="text-lg">⚡</span>
						</div>
						<Text size="sm" className="font-medium">
							Lightning Fast
						</Text>
						<Text size="xs" className="mt-1 text-muted-foreground">
							Sub-second response times
						</Text>
					</div>
					<div className="rounded-lg bg-muted/30 p-4 text-center">
						<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<span className="text-lg">🔒</span>
						</div>
						<Text size="sm" className="font-medium">
							Secure by Design
						</Text>
						<Text size="xs" className="mt-1 text-muted-foreground">
							Enterprise-grade security
						</Text>
					</div>
					<div className="rounded-lg bg-muted/30 p-4 text-center">
						<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<span className="text-lg">📱</span>
						</div>
						<Text size="sm" className="font-medium">
							Mobile Ready
						</Text>
						<Text size="xs" className="mt-1 text-muted-foreground">
							Responsive on all devices
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}