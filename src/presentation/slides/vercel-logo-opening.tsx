import { Slide } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const VercelLogoOpeningSlide: SlideDefinition = {
	slug: 'vercel-logo-opening',
	component: SlideComponent,
	notes: 'Opening slide with just the Vercel triangle logo centered on a black background.',
	title: 'Vercel Logo Opening',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" className="bg-black">
			<div className="flex items-center justify-center">
				<svg
					fill="white"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1155 1000"
					className="h-24 w-24"
				>
					<title>Vercel logo</title>
					<path d="m577.3 0 577.4 1000H0z" />
				</svg>
			</div>
		</Slide>
	);
}