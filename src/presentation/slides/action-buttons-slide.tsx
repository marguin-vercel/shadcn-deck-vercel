import { Slide } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ActionButtonsSlide: SlideDefinition = {
	slug: 'action-buttons-slide',
	component: SlideComponent,
	notes: 'Action buttons slide with GOAT, SAME TEAM, LFG, and DIG DEEP call-to-action buttons.',
	title: 'Action Buttons',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-2 gap-8">
					<div className="aspect-square">
						<img
							src="/goat-button.png"
							alt="GOAT"
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="aspect-square">
						<img
							src="/same-team-button.png"
							alt="SAME TEAM"
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="aspect-square">
						<img
							src="/lfg-button.png"
							alt="LFG"
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="aspect-square">
						<img
							src="/dig-deep-button.png"
							alt="DIG DEEP"
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
			</div>
		</Slide>
	);
}