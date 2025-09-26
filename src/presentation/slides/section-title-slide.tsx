import { Heading, Slide } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const SectionTitleSlide: SlideDefinition = {
	slug: 'section-title-slide',
	component: SlideComponent,
	notes: 'Section divider slide with large centered text.',
	title: 'Section Title',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="text-center">
				<Heading size="2xl" align="center" className="font-bold tracking-tight">
					Section Title
				</Heading>
			</div>
		</Slide>
	);
}