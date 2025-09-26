import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const TemplateIntroductionSlide: SlideDefinition = {
	slug: 'template-introduction-slide',
	component: SlideComponent,
	notes: 'Introduction slide explaining how to use this Vercel presentation template.',
	title: 'Template Introduction',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-4xl space-y-8">
				<Heading size="2xl" align="center" className="mb-8">
					How to use this template
				</Heading>
				<div className="space-y-6">
					<div className="space-y-3">
						<Text size="lg" className="font-medium">
							This presentation template is designed for:
						</Text>
						<ul className="ml-6 space-y-2">
							<li className="flex items-start">
								<span className="mr-3 text-primary">•</span>
								<Text>Product launches and feature announcements</Text>
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-primary">•</span>
								<Text>Technical presentations and demos</Text>
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-primary">•</span>
								<Text>Company updates and team meetings</Text>
							</li>
							<li className="flex items-start">
								<span className="mr-3 text-primary">•</span>
								<Text>Conference talks and external presentations</Text>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Slide>
	);
}