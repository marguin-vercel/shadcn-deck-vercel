import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const CustomerTestimonialSlide: SlideDefinition = {
	slug: 'customer-testimonial-slide',
	component: SlideComponent,
	notes: 'Customer testimonial slide featuring client feedback and success stories.',
	title: 'Customer Testimonial',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-5xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						What Our Customers Say
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Real testimonials from satisfied clients who've transformed their business with our platform
					</Text>
				</div>
				<div className="relative">
					<div className="absolute top-0 left-4 text-6xl text-primary/20">
						"
					</div>
					<div className="px-12 py-8 text-center">
						<Text size="xl" className="font-medium italic leading-relaxed">
							This platform completely transformed how we handle our operations.
							The efficiency gains have been remarkable - we've reduced processing
							time by 75% and our team can now focus on strategic initiatives
							rather than manual tasks. The ROI was evident within the first quarter.
						</Text>
					</div>
					<div className="absolute right-4 bottom-8 rotate-180 text-6xl text-primary/20">
						"
					</div>
				</div>
				<div className="flex items-center justify-center space-x-6">
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-600">
						<Text size="lg" className="font-bold text-white">
							SM
						</Text>
					</div>
					<div>
						<Text size="lg" className="font-semibold">
							Sarah Mitchell
						</Text>
						<Text size="sm" className="text-primary">
							Chief Technology Officer
						</Text>
						<Text size="sm" className="text-muted-foreground">
							TechForward Solutions
						</Text>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div className="rounded-lg bg-muted/30 p-6 text-center">
						<Text size="xl" className="font-bold text-2xl text-primary">
							75%
						</Text>
						<Text size="sm" className="mt-1 font-medium">
							Faster Processing
						</Text>
					</div>
					<div className="rounded-lg bg-muted/30 p-6 text-center">
						<Text size="xl" className="font-bold text-2xl text-primary">
							Q1
						</Text>
						<Text size="sm" className="mt-1 font-medium">
							ROI Achieved
						</Text>
					</div>
					<div className="rounded-lg bg-muted/30 p-6 text-center">
						<Text size="xl" className="font-bold text-2xl text-primary">
							100%
						</Text>
						<Text size="sm" className="mt-1 font-medium">
							Team Adoption
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}