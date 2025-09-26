import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ColoredCircleContainersSlide: SlideDefinition = {
	slug: 'colored-circle-containers-slide',
	component: SlideComponent,
	notes: 'Four different colored containers with circles on top for distinctive content sections.',
	title: 'Colored Circle Container Layout',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Distinctive Containers
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Color-coded sections with circular accents for clear organization
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="relative">
						<div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
							<div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center">
								<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								</svg>
							</div>
						</div>
						<div className="rounded-lg bg-red-50 border border-red-200 p-6 pt-10 text-center">
							<Text size="sm" className="font-semibold mb-2 text-red-700">
								Priority Content
							</Text>
							<Text size="xs" className="text-red-600">
								High-importance information that needs immediate attention
							</Text>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
							<div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
								<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
							</div>
						</div>
						<div className="rounded-lg bg-green-50 border border-green-200 p-6 pt-10 text-center">
							<Text size="sm" className="font-semibold mb-2 text-green-700">
								Success Stories
							</Text>
							<Text size="xs" className="text-green-600">
								Positive outcomes and achievements to highlight
							</Text>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
							<div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
								<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
							</div>
						</div>
						<div className="rounded-lg bg-blue-50 border border-blue-200 p-6 pt-10 text-center">
							<Text size="sm" className="font-semibold mb-2 text-blue-700">
								Information Hub
							</Text>
							<Text size="xs" className="text-blue-600">
								Essential details and helpful resources for users
							</Text>
						</div>
					</div>

					<div className="relative">
						<div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
							<div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
								<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
								</svg>
							</div>
						</div>
						<div className="rounded-lg bg-purple-50 border border-purple-200 p-6 pt-10 text-center">
							<Text size="sm" className="font-semibold mb-2 text-purple-700">
								Innovation Corner
							</Text>
							<Text size="xs" className="text-purple-600">
								Creative ideas and future possibilities to explore
							</Text>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}