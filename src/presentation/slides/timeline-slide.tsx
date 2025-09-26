import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const TimelineSlide: SlideDefinition = {
	slug: 'timeline-slide',
	component: SlideComponent,
	notes: 'Timeline slide showing company milestones and roadmap progression.',
	title: 'Our Journey',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-5xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Our Journey
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						From startup to industry leader - key milestones that shaped our success
					</Text>
				</div>
				<div className="relative">
					<div className="absolute top-0 left-8 h-full w-0.5 bg-muted" />
					<div className="space-y-12">
						<div className="relative flex items-start space-x-6">
							<div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Text size="sm" className="font-bold">
									2020
								</Text>
							</div>
							<div className="space-y-2 pt-2">
								<Text size="lg" className="font-semibold">
									Company Founded
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Started with a vision to revolutionize the industry with our innovative platform
								</Text>
							</div>
						</div>
						<div className="relative flex items-start space-x-6">
							<div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Text size="sm" className="font-bold">
									2021
								</Text>
							</div>
							<div className="space-y-2 pt-2">
								<Text size="lg" className="font-semibold">
									Series A Funding
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Raised $10M to accelerate product development and expand our engineering team
								</Text>
							</div>
						</div>
						<div className="relative flex items-start space-x-6">
							<div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Text size="sm" className="font-bold">
									2022
								</Text>
							</div>
							<div className="space-y-2 pt-2">
								<Text size="lg" className="font-semibold">
									Product Launch
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Official product launch with 1,000+ early adopters and positive market reception
								</Text>
							</div>
						</div>
						<div className="relative flex items-start space-x-6">
							<div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Text size="sm" className="font-bold">
									2023
								</Text>
							</div>
							<div className="space-y-2 pt-2">
								<Text size="lg" className="font-semibold">
									Global Expansion
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Expanded to 25+ countries and reached 100,000+ active users worldwide
								</Text>
							</div>
						</div>
						<div className="relative flex items-start space-x-6">
							<div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/70 text-primary-foreground">
								<Text size="sm" className="font-bold">
									2024
								</Text>
							</div>
							<div className="space-y-2 pt-2">
								<Text size="lg" className="font-semibold">
									Series B & IPO Prep
								</Text>
								<Text size="sm" className="text-muted-foreground">
									$50M Series B funding completed, preparing for public offering in Q2 2025
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}