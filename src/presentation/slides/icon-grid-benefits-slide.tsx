import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const IconGridBenefitsSlide: SlideDefinition = {
	slug: 'icon-grid-benefits-slide',
	component: SlideComponent,
	notes: 'Icon grid slide highlighting key benefits and value propositions.',
	title: 'Key Benefits',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-5xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Why Choose Us?
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Transform your business with proven benefits that drive real results
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					<div className="flex space-x-4">
						<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
							<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<line x1="12" y1="1" x2="12" y2="23"/>
								<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Reduce Costs by 60%
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Eliminate infrastructure overhead and reduce operational expenses through our efficient platform
							</Text>
						</div>
					</div>
					<div className="flex space-x-4">
						<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
							<svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
								<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Deploy 10x Faster
							</Text>
							<Text size="sm" className="text-muted-foreground">
								From code to production in minutes, not hours. Streamlined workflows accelerate your time to market
							</Text>
						</div>
					</div>
					<div className="flex space-x-4">
						<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
							<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M3 3v18h18"/>
								<path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Scale Automatically
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Handle traffic spikes effortlessly with intelligent auto-scaling that grows with your business
							</Text>
						</div>
					</div>
					<div className="flex space-x-4">
						<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
							<svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								99.99% Uptime
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Mission-critical reliability with redundant systems and proactive monitoring across all regions
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}