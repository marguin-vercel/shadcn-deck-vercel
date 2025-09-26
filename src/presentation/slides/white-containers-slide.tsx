import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const WhiteContainersSlide: SlideDefinition = {
	slug: 'white-containers-slide',
	component: SlideComponent,
	notes: 'White outlined containers slide with various sized rectangles and circle shapes.',
	title: 'White Container Layout',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Content Containers
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Flexible layout options for organizing your content
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="space-y-6">
						<div className="rounded-lg border-2 border-white bg-transparent p-8 text-center">
							<Text size="lg" className="font-semibold mb-2">
								Large Container
							</Text>
							<Text size="sm" className="text-muted-foreground">
								Perfect for main content sections and detailed information
							</Text>
						</div>
						<div className="rounded-lg border-2 border-white bg-transparent p-6 text-center">
							<Text size="sm" className="font-semibold mb-2">
								Medium Container
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Ideal for supporting content
							</Text>
						</div>
					</div>
					<div className="space-y-6">
						<div className="rounded-lg border-2 border-white bg-transparent p-6 text-center">
							<Text size="sm" className="font-semibold mb-2">
								Standard Container
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Versatile option for most content
							</Text>
						</div>
						<div className="rounded-lg border-2 border-white bg-transparent p-4 text-center">
							<Text size="xs" className="font-semibold mb-1">
								Small Container
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Quick highlights
							</Text>
						</div>
						<div className="rounded-lg border-2 border-white bg-transparent p-4 text-center">
							<Text size="xs" className="font-semibold mb-1">
								Compact Container
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Brief notes
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="h-48 w-48 rounded-full border-2 border-white bg-transparent flex items-center justify-center text-center p-6">
							<div>
								<Text size="sm" className="font-semibold mb-2">
									Circle Container
								</Text>
								<Text size="xs" className="text-muted-foreground">
									Eye-catching focal point for key messages
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}