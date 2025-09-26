import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const LogoPartnershipSlide: SlideDefinition = {
	slug: 'logo-partnership-slide',
	component: SlideComponent,
	notes: 'Logo partnership slide showcasing trusted partners and collaborators.',
	title: 'Our Partners',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-6xl space-y-12 text-center">
				<Heading size="2xl" align="center" className="font-bold">
					Trusted by Industry Leaders
				</Heading>
				<Text size="lg" align="center" className="mx-auto max-w-2xl text-muted-foreground">
					Join thousands of companies that rely on our platform to power their most critical applications
				</Text>
				<div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6">
					<div className="flex items-center justify-center">
						<div className="flex h-16 w-24 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Logo 1
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-16 w-24 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Logo 2
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-16 w-24 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Logo 3
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-16 w-24 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Logo 4
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-16 w-24 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Logo 5
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex h-16 w-24 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
							<Text size="sm" className="font-medium">
								Logo 6
							</Text>
						</div>
					</div>
				</div>
				<Text size="sm" className="text-muted-foreground">
					* Replace placeholder logos with actual partner company logos
				</Text>
			</div>
		</Slide>
	);
}