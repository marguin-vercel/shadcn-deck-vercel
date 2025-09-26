import { Slide } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const Slide01VercelOpening: SlideDefinition = {
	slug: 'slide-01-vercel-opening',
	component: SlideComponent,
	notes: 'Opening slide with Vercel triangle logo on black background.',
	title: 'Vercel Opening',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="none" className="bg-black">
			<div className="flex items-center justify-center w-full h-full">
				<div className="w-24 h-24">
					<svg
						fill="currentColor"
						className="w-full h-full text-white"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 230 200"
					>
						<title>Vercel logo</title>
						<path d="m115 0 115 200H0z" />
					</svg>
				</div>
			</div>
		</Slide>
	);
}