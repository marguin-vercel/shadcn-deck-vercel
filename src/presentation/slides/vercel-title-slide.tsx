import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const VercelTitleSlide: SlideDefinition = {
	slug: 'vercel-title-slide',
	component: SlideComponent,
	notes: 'Main title slide with Vercel triangle logo and presentation title.',
	title: 'Vercel Title Slide',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="flex flex-col items-center justify-center space-y-8">
				<svg
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1155 1000"
					className="h-16 w-16"
				>
					<title>Vercel logo</title>
					<path d="m577.3 0 577.4 1000H0z" />
				</svg>
				<div className="space-y-4 text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Your Presentation Title
					</Heading>
					<Text size="lg" align="center" className="text-muted-foreground">
						Subtitle or description here
					</Text>
				</div>
			</div>
		</Slide>
	);
}