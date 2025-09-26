import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const IconGridServicesSlide: SlideDefinition = {
	slug: 'icon-grid-services-slide',
	component: SlideComponent,
	notes: 'Icon grid slide showcasing available services and offerings.',
	title: 'Our Services',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Complete Service Portfolio
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						End-to-end solutions tailored to meet your unique business requirements
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<rect x="2" y="4" width="20" height="16" rx="2"/>
								<path d="m22 7-10 5L2 7"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							Web Development
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Custom web applications
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
								<line x1="12" y1="18" x2="12.01" y2="18"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							Mobile Apps
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							iOS & Android development
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							Cloud Solutions
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Infrastructure & deployment
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							UI/UX Design
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							User experience design
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<circle cx="11" cy="11" r="8"/>
								<path d="m21 21-4.35-4.35"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							SEO & Marketing
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Digital marketing strategy
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							DevOps
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							CI/CD & automation
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path d="M3 3v18h18"/>
								<path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							Data Analytics
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Business intelligence
						</Text>
					</div>
					<div className="rounded-lg border bg-card p-6 text-center transition-colors hover:bg-muted/50">
						<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="10"/>
								<circle cx="12" cy="12" r="6"/>
								<circle cx="12" cy="12" r="2"/>
							</svg>
						</div>
						<Text size="sm" className="font-semibold">
							Consulting
						</Text>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Strategic guidance
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}