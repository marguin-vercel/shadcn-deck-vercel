import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const PhotoGallerySlide: SlideDefinition = {
	slug: 'photo-gallery-slide',
	component: SlideComponent,
	notes: 'Photo gallery slide showcasing visual content and imagery.',
	title: 'Gallery',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-12">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Our Work in Action
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Visual showcase of our projects and achievements across different industries
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className="group relative overflow-hidden rounded-lg bg-muted">
						<div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
							<div className="text-center">
								<span className="mb-2 block text-4xl">🏢</span>
								<Text size="sm" className="text-muted-foreground">
									Corporate Project
								</Text>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
							<Text size="sm" className="font-medium text-white">
								Enterprise Dashboard
							</Text>
							<Text size="xs" className="text-white/80">
								Fortune 500 company
							</Text>
						</div>
					</div>
					<div className="group relative overflow-hidden rounded-lg bg-muted">
						<div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800">
							<div className="text-center">
								<span className="mb-2 block text-4xl">🛍️</span>
								<Text size="sm" className="text-muted-foreground">
									E-commerce Platform
								</Text>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
							<Text size="sm" className="font-medium text-white">
								Shopping Experience
							</Text>
							<Text size="xs" className="text-white/80">
								Retail technology
							</Text>
						</div>
					</div>
					<div className="group relative overflow-hidden rounded-lg bg-muted">
						<div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800">
							<div className="text-center">
								<span className="mb-2 block text-4xl">🎓</span>
								<Text size="sm" className="text-muted-foreground">
									Education Portal
								</Text>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
							<Text size="sm" className="font-medium text-white">
								Learning Management
							</Text>
							<Text size="xs" className="text-white/80">
								Educational technology
							</Text>
						</div>
					</div>
					<div className="group relative overflow-hidden rounded-lg bg-muted">
						<div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800">
							<div className="text-center">
								<span className="mb-2 block text-4xl">🏥</span>
								<Text size="sm" className="text-muted-foreground">
									Healthcare System
								</Text>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
							<Text size="sm" className="font-medium text-white">
								Patient Management
							</Text>
							<Text size="xs" className="text-white/80">
								Healthcare technology
							</Text>
						</div>
					</div>
					<div className="group relative overflow-hidden rounded-lg bg-muted">
						<div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800">
							<div className="text-center">
								<span className="mb-2 block text-4xl">🏦</span>
								<Text size="sm" className="text-muted-foreground">
									Financial Platform
								</Text>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
							<Text size="sm" className="font-medium text-white">
								Trading Interface
							</Text>
							<Text size="xs" className="text-white/80">
								Financial services
							</Text>
						</div>
					</div>
					<div className="group relative overflow-hidden rounded-lg bg-muted">
						<div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800">
							<div className="text-center">
								<span className="mb-2 block text-4xl">🚀</span>
								<Text size="sm" className="text-muted-foreground">
									Startup MVP
								</Text>
							</div>
						</div>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
							<Text size="sm" className="font-medium text-white">
								Product Launch
							</Text>
							<Text size="xs" className="text-white/80">
								Technology startup
							</Text>
						</div>
					</div>
				</div>
				<div className="text-center">
					<Text size="sm" className="text-muted-foreground">
						* Replace with actual project screenshots and case studies
					</Text>
				</div>
			</div>
		</Slide>
	);
}