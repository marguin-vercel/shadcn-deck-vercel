import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const IconGridFeaturesSlide: SlideDefinition = {
	slug: 'icon-grid-features-slide',
	component: SlideComponent,
	notes: 'Icon grid slide showcasing key features with visual icons.',
	title: 'Key Features',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Everything You Need
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Comprehensive tools and features designed to accelerate your development workflow
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="space-y-4 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Lightning Fast
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Optimized performance with edge computing for instant global delivery
							</Text>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
								<circle cx="12" cy="16" r="1"/>
								<path d="M7 11V7a5 5 0 0 1 10 0v4"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Enterprise Security
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Bank-grade security with SOC 2 compliance and advanced threat protection
							</Text>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="9"/>
								<path d="M12 3v6m0 6v6"/>
								<path d="M3 12h6m6 0h6"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Global Scale
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Deploy to 100+ edge locations worldwide with automatic scaling
							</Text>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
								<path d="M9 9h6v6H9z"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Developer Tools
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Integrated development environment with real-time collaboration
							</Text>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Analytics & Insights
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Real-time performance metrics and user behavior analytics
							</Text>
						</div>
					</div>
					<div className="space-y-4 text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
							<svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
								<path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
							</svg>
						</div>
						<div className="space-y-2">
							<Text size="lg" className="font-semibold">
								Team Collaboration
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Seamless teamwork with shared workspaces and version control
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}