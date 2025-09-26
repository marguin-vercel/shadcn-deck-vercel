import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const PresenterIntroSlide: SlideDefinition = {
	slug: 'presenter-intro-slide',
	component: SlideComponent,
	notes: 'Presenter introduction slide with name, title, and brief bio.',
	title: 'Presenter Introduction',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-3xl space-y-6 text-center">
				<div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-muted">
					<svg
						className="h-16 w-16 text-muted-foreground"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="space-y-4">
					<Heading size="2xl" align="center" className="font-bold">
						Your Name
					</Heading>
					<Text size="lg" align="center" className="text-muted-foreground">
						Your Title or Role
					</Text>
					<Text size="sm" align="center" className="mx-auto max-w-2xl">
						Brief introduction about yourself, your background, and what makes you qualified
						to present on this topic. Keep it concise and engaging.
					</Text>
				</div>
			</div>
		</Slide>
	);
}