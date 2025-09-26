import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const PinkContainersSlide: SlideDefinition = {
	slug: 'pink-containers-slide',
	component: SlideComponent,
	notes: 'Pink/magenta outlined containers slide with various sized rectangles and circle shapes.',
	title: 'Pink Container Layout',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Accent Containers
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Add visual interest with colored borders and highlights
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="space-y-6">
						<div className="rounded-lg border-2 border-pink-500 bg-transparent p-8 text-center">
							<Text size="lg" className="font-semibold mb-2 text-pink-600">
								Featured Content
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Draw attention to important information with accent colors
							</Text>
						</div>
						<div className="rounded-lg border-2 border-pink-500 bg-transparent p-6 text-center">
							<Text size="sm" className="font-semibold mb-2 text-pink-600">
								Highlighted Section
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Perfect for key points
							</Text>
						</div>
					</div>
					<div className="space-y-6">
						<div className="rounded-lg border-2 border-pink-500 bg-transparent p-6 text-center">
							<Text size="sm" className="font-semibold mb-2 text-pink-600">
								Standard Accent
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Consistent branding element
							</Text>
						</div>
						<div className="rounded-lg border-2 border-pink-500 bg-transparent p-4 text-center">
							<Text size="xs" className="font-semibold mb-1 text-pink-600">
								Small Highlight
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Subtle emphasis
							</Text>
						</div>
						<div className="rounded-lg border-2 border-pink-500 bg-transparent p-4 text-center">
							<Text size="xs" className="font-semibold mb-1 text-pink-600">
								Mini Accent
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Quick notes
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="h-48 w-48 rounded-full border-2 border-pink-500 bg-transparent flex items-center justify-center text-center p-6">
							<div>
								<Text size="sm" className="font-semibold mb-2 text-pink-600">
									Focal Point
								</Text>
								<Text size="xs" className="text-muted-foreground">
									Circular design creates strong visual hierarchy
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}