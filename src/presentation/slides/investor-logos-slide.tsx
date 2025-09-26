import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const InvestorLogosSlide: SlideDefinition = {
	slug: 'investor-logos-slide',
	component: SlideComponent,
	notes: 'Investor logos slide showcasing financial backing and investor confidence.',
	title: 'Backed by Leading Investors',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-5xl space-y-12 text-center">
				<Heading size="2xl" align="center" className="font-bold">
					Backed by Leading Investors
				</Heading>
				<Text size="lg" align="center" className="mx-auto max-w-2xl text-muted-foreground">
					Our vision is supported by world-class investors who believe in the future we're building
				</Text>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="flex items-center justify-center">
						<div className="flex h-20 w-32 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Investor A
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-20 w-32 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Investor B
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-20 w-32 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Investor C
							</Text>
						</div>
					</div>
				</div>
				<div className="mt-8 space-y-4">
					<Text size="lg" className="font-semibold">
						Series A - $50M raised
					</Text>
					<Text size="sm" className="text-muted-foreground">
						Funding will accelerate product development and global expansion
					</Text>
				</div>
			</div>
		</Slide>
	);
}