import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const TrustStatementSlide: SlideDefinition = {
	slug: 'trust-statement-slide',
	component: SlideComponent,
	notes: 'Trust statement slide showcasing credibility and reliability metrics.',
	title: 'Trust Statement',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-5xl space-y-12 text-center">
				<Heading size="2xl" align="center" className="font-bold">
					Trusted by developers worldwide
				</Heading>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="space-y-2">
						<Text size="xl" className="font-bold text-primary">
							10M+
						</Text>
						<Text size="sm" className="text-muted-foreground">
							Developers using our platform
						</Text>
					</div>
					<div className="space-y-2">
						<Text size="xl" className="font-bold text-primary">
							99.9%
						</Text>
						<Text size="sm" className="text-muted-foreground">
							Uptime guarantee
						</Text>
					</div>
					<div className="space-y-2">
						<Text size="xl" className="font-bold text-primary">
							150+
						</Text>
						<Text size="sm" className="text-muted-foreground">
							Countries served
						</Text>
					</div>
				</div>
				<Text size="sm" align="center" className="mx-auto max-w-2xl text-muted-foreground">
					Join millions of developers who trust our platform to build, deploy,
					and scale their applications with confidence.
				</Text>
			</div>
		</Slide>
	);
}