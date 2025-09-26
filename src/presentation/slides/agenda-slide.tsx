import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const AgendaSlide: SlideDefinition = {
	slug: 'agenda-slide',
	component: SlideComponent,
	notes: 'Agenda slide outlining the presentation structure and topics.',
	title: 'Agenda',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-4xl space-y-8">
				<Heading size="2xl" align="left" className="font-bold">
					Agenda
				</Heading>
				<div className="space-y-6">
					<div className="space-y-4">
						<Text size="lg" className="font-medium">
							1. Introduction & Overview
						</Text>
						<Text size="lg" className="font-medium">
							2. Problem Statement
						</Text>
						<Text size="lg" className="font-medium">
							3. Our Solution
						</Text>
						<Text size="lg" className="font-medium">
							4. Key Features & Benefits
						</Text>
						<Text size="lg" className="font-medium">
							5. Implementation & Demo
						</Text>
						<Text size="lg" className="font-medium">
							6. Results & Metrics
						</Text>
						<Text size="lg" className="font-medium">
							7. Next Steps
						</Text>
						<Text size="lg" className="font-medium">
							8. Q&A
						</Text>
					</div>
				</div>
				<Text size="sm" className="mt-8 text-muted-foreground">
					Estimated duration: 45 minutes
				</Text>
			</div>
		</Slide>
	);
}