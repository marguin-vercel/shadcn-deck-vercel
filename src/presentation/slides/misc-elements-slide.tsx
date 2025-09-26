import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const MiscElementsSlide: SlideDefinition = {
	slug: 'misc-elements-slide',
	component: SlideComponent,
	notes: 'Miscellaneous design elements and components showcase slide.',
	title: 'Misc Elements',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Design Elements
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Versatile components for creating engaging presentations
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Progress Bars */}
					<div className="space-y-6">
						<div className="text-center">
							<Text size="lg" className="font-semibold mb-4">
								Progress Indicators
							</Text>
						</div>
						<div className="space-y-4">
							<div>
								<div className="flex justify-between mb-2">
									<Text size="sm">Development</Text>
									<Text size="sm" className="text-muted-foreground">85%</Text>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
									<div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<Text size="sm">Design</Text>
									<Text size="sm" className="text-muted-foreground">92%</Text>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
									<div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<Text size="sm">Testing</Text>
									<Text size="sm" className="text-muted-foreground">67%</Text>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
									<div className="bg-yellow-600 h-2 rounded-full" style={{width: '67%'}}></div>
								</div>
							</div>
						</div>
					</div>

					{/* Tag Cloud */}
					<div className="space-y-6">
						<div className="text-center">
							<Text size="lg" className="font-semibold mb-4">
								Tag Elements
							</Text>
						</div>
						<div className="flex flex-wrap gap-3 justify-center">
							<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
								React
							</span>
							<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
								TypeScript
							</span>
							<span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
								Next.js
							</span>
							<span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
								Tailwind
							</span>
							<span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
								Vercel
							</span>
							<span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
								shadcn/ui
							</span>
							<span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
								Innovation
							</span>
							<span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
								Performance
							</span>
						</div>
					</div>
				</div>

				{/* Call-to-Action Buttons */}
				<div className="text-center space-y-6">
					<Text size="lg" className="font-semibold">
						Action Elements
					</Text>
					<div className="flex flex-wrap gap-4 justify-center">
						<button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
							Primary Action
						</button>
						<button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
							Secondary Action
						</button>
						<button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
							Tertiary Action
						</button>
					</div>
				</div>

				{/* Notification Badges */}
				<div className="flex justify-center space-x-8">
					<div className="text-center">
						<div className="relative inline-block">
							<div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
								<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
								</svg>
							</div>
							<span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
						</div>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Notifications
						</Text>
					</div>
					<div className="text-center">
						<div className="relative inline-block">
							<div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
								<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
							</div>
							<span className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full"></span>
						</div>
						<Text size="xs" className="mt-2 text-muted-foreground">
							Status
						</Text>
					</div>
				</div>
			</div>
		</Slide>
	);
}