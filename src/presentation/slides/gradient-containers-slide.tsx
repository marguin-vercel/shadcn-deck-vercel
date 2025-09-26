import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const GradientContainersSlide: SlideDefinition = {
	slug: 'gradient-containers-slide',
	component: SlideComponent,
	notes: 'Blue containers with gradient fills for modern, dynamic presentations.',
	title: 'Gradient Container Layout',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Dynamic Containers
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Modern gradient designs for impactful presentations
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="space-y-6">
						<div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-center text-white">
							<Text size="lg" className="font-semibold mb-2">
								Premium Content
							</Text>
							<Text size="sm" className="text-blue-100">
								Eye-catching gradients create depth and visual interest
							</Text>
						</div>
						<div className="rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-center text-white">
							<Text size="sm" className="font-semibold mb-2">
								Featured Section
							</Text>
							<Text size="xs" className="text-blue-100">
								Modern design approach
							</Text>
						</div>
					</div>
					<div className="space-y-6">
						<div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-center text-white">
							<Text size="sm" className="font-semibold mb-2">
								Gradient Accent
							</Text>
							<Text size="xs" className="text-blue-100">
								Multi-color transitions
							</Text>
						</div>
						<div className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-4 text-center text-white">
							<Text size="xs" className="font-semibold mb-1">
								Color Blend
							</Text>
							<Text size="xs" className="text-blue-100">
								Vibrant emphasis
							</Text>
						</div>
						<div className="rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 p-4 text-center text-white">
							<Text size="xs" className="font-semibold mb-1">
								Dynamic Style
							</Text>
							<Text size="xs" className="text-blue-100">
								Modern appeal
							</Text>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="h-48 w-48 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center text-center p-6 text-white">
							<div>
								<Text size="sm" className="font-semibold mb-2">
									Spotlight
								</Text>
								<Text size="xs" className="text-blue-100">
									Multi-gradient circular design for maximum impact
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}