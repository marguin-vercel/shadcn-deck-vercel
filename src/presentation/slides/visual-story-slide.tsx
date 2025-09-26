import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const VisualStorySlide: SlideDefinition = {
	slug: 'visual-story-slide',
	component: SlideComponent,
	notes: 'Visual story slide combining imagery with narrative content.',
	title: 'Our Story',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						The Story Behind Our Success
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						From humble beginnings to industry leadership - our journey of innovation and growth
					</Text>
				</div>
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div className="order-2 lg:order-1">
						<div className="space-y-6">
							<div>
								<Text size="lg" className="mb-3 font-semibold text-primary">
									The Beginning
								</Text>
								<Text size="sm" className="text-muted-foreground">
									It started with a simple idea: what if we could make complex
									technology accessible to everyone? Three founders in a small
									garage, driven by the vision to democratize innovation.
								</Text>
							</div>
							<div>
								<Text size="lg" className="mb-3 font-semibold text-primary">
									The Breakthrough
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Our first major breakthrough came when we realized that the problem
									wasn't just about technology - it was about understanding user needs
									and building solutions that truly matter.
								</Text>
							</div>
							<div>
								<Text size="lg" className="mb-3 font-semibold text-primary">
									Today & Tomorrow
								</Text>
								<Text size="sm" className="text-muted-foreground">
									Today, we're proud to serve millions of users worldwide, but our
									mission remains unchanged: empowering people through technology
									and continuing to push the boundaries of what's possible.
								</Text>
							</div>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<div className="space-y-6">
							<div className="flex aspect-square items-center justify-center rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
								<div className="space-y-4 text-center">
									<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80">
										<svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
										<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
									</svg>
									</div>
									<Text size="sm" className="font-medium text-muted-foreground">
										Innovation Journey
									</Text>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900">
									<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="5"/>
										<line x1="12" y1="1" x2="12" y2="3"/>
										<line x1="12" y1="21" x2="12" y2="23"/>
										<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
										<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
										<line x1="1" y1="12" x2="3" y2="12"/>
										<line x1="21" y1="12" x2="23" y2="12"/>
										<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
										<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
									</svg>
								</div>
								<div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900">
									<svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
										<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
										<path d="M4 22h16"/>
										<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
										<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
										<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-4 text-center">
					<Text size="lg" className="font-semibold">
						"The best way to predict the future is to create it."
					</Text>
					<Text size="sm" className="text-muted-foreground">
						- Our company motto that guides everything we do
					</Text>
				</div>
			</div>
		</Slide>
	);
}