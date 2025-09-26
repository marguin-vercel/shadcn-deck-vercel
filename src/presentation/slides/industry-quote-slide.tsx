import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const IndustryQuoteSlide: SlideDefinition = {
	slug: 'industry-quote-slide',
	component: SlideComponent,
	notes: 'Industry quote slide featuring expert opinions and thought leadership.',
	title: 'Industry Recognition',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-4xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Industry Recognition
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						What industry leaders and analysts are saying about our innovation
					</Text>
				</div>
				<div className="space-y-12">
					<div className="relative text-center">
						<div className="-left-4 -top-4 absolute text-8xl text-primary/10">
							"
						</div>
						<Text size="xl" className="px-8 font-medium italic leading-relaxed">
							This company is setting the new standard for enterprise software.
							Their innovative approach to automation and user experience
							represents the future of digital transformation.
						</Text>
						<div className="-right-4 -bottom-4 absolute rotate-180 text-8xl text-primary/10">
							"
						</div>
					</div>
					<div className="space-y-2 text-center">
						<Text size="lg" className="font-semibold">
							Mark Johnson
						</Text>
						<Text size="sm" className="text-primary">
							Senior Analyst, Forrester Research
						</Text>
						<Text size="sm" className="text-muted-foreground">
							Technology Innovation Report 2024
						</Text>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20">
								<svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
									<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
									<path d="M4 22h16"/>
									<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
									<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
									<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
								</svg>
							</div>
						</div>
						<Text size="sm" className="font-semibold">
							Innovation Award 2024
						</Text>
						<Text size="xs" className="text-muted-foreground">
							TechCrunch Disrupt
						</Text>
					</div>
					<div className="text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
								<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
								</svg>
							</div>
						</div>
						<Text size="sm" className="font-semibold">
							Leader in G2 Grid
						</Text>
						<Text size="xs" className="text-muted-foreground">
							Enterprise Software
						</Text>
					</div>
					<div className="text-center">
						<div className="mb-4 flex items-center justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
								<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10"/>
									<circle cx="12" cy="12" r="6"/>
									<circle cx="12" cy="12" r="2"/>
								</svg>
							</div>
						</div>
						<Text size="sm" className="font-semibold">
							Top 10 Startups
						</Text>
						<Text size="xs" className="text-muted-foreground">
							Forbes Technology
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}