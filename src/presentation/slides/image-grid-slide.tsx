import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ImageGridSlide: SlideDefinition = {
	slug: 'image-grid-slide',
	component: SlideComponent,
	notes: 'Image grid slide with placeholder images in a responsive grid layout.',
	title: 'Image Gallery Grid',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Visual Gallery
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Showcase your work, products, or team moments with engaging image layouts
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{/* Large Feature Image */}
					<div className="md:col-span-2 lg:row-span-2">
						<div className="relative h-80 overflow-hidden rounded-xl bg-gradient-to-br from-blue-400 to-purple-600">
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center text-white">
									<svg className="mx-auto mb-4 h-16 w-16 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
										<path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z"/>
									</svg>
									<Text size="lg" className="font-semibold opacity-80">
										Featured Content
									</Text>
								</div>
							</div>
						</div>
					</div>

					{/* Small Images */}
					<div className="h-36 overflow-hidden rounded-xl bg-gradient-to-br from-green-400 to-blue-500">
						<div className="flex h-full items-center justify-center text-white">
							<div className="text-center">
								<svg className="mx-auto mb-2 h-8 w-8 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z"/>
								</svg>
								<Text size="sm" className="font-medium opacity-80">
									Image 1
								</Text>
							</div>
						</div>
					</div>

					<div className="h-36 overflow-hidden rounded-xl bg-gradient-to-br from-pink-400 to-red-500">
						<div className="flex h-full items-center justify-center text-white">
							<div className="text-center">
								<svg className="mx-auto mb-2 h-8 w-8 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z"/>
								</svg>
								<Text size="sm" className="font-medium opacity-80">
									Image 2
								</Text>
							</div>
						</div>
					</div>

					<div className="h-36 overflow-hidden rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500">
						<div className="flex h-full items-center justify-center text-white">
							<div className="text-center">
								<svg className="mx-auto mb-2 h-8 w-8 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z"/>
								</svg>
								<Text size="sm" className="font-medium opacity-80">
									Image 3
								</Text>
							</div>
						</div>
					</div>

					<div className="md:col-span-2 h-36 overflow-hidden rounded-xl bg-gradient-to-br from-purple-400 to-indigo-600">
						<div className="flex h-full items-center justify-center text-white">
							<div className="text-center">
								<svg className="mx-auto mb-2 h-12 w-12 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
									<path d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 5.25h16.5A1.5 1.5 0 0 1 21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z"/>
								</svg>
								<Text size="lg" className="font-semibold opacity-80">
									Wide Format Image
								</Text>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center">
					<Text size="sm" className="text-muted-foreground">
						Replace with your own images to create compelling visual narratives
					</Text>
				</div>
			</div>
		</Slide>
	);
}