import { Heading, Slide, Text } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const ProductShowcaseGallerySlide: SlideDefinition = {
	slug: 'product-showcase-gallery-slide',
	component: SlideComponent,
	notes: 'Product showcase gallery with highlighted features and visual elements.',
	title: 'Product Showcase Gallery',
};

function SlideComponent() {
	return (
		<Slide contentPosition="top" padding="large">
			<div className="mx-auto max-w-6xl space-y-8">
				<div className="text-center">
					<Heading size="2xl" align="center" className="font-bold">
						Product Showcase
					</Heading>
					<Text size="lg" align="center" className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						Highlighting our latest features and product innovations
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Main Product Visual */}
					<div className="space-y-4">
						<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
							<div className="flex h-full items-center justify-center">
								<div className="text-center">
									<div className="mx-auto mb-6 h-24 w-24 rounded-2xl bg-primary/10 flex items-center justify-center">
										<svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
											<path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
										</svg>
									</div>
									<Text size="lg" className="font-semibold text-muted-foreground">
										Main Product Interface
									</Text>
								</div>
							</div>
						</div>
						<div className="text-center">
							<Text size="sm" className="font-medium">
								Intuitive Dashboard Design
							</Text>
							<Text size="xs" className="text-muted-foreground">
								Clean, modern interface optimized for productivity
							</Text>
						</div>
					</div>

					{/* Feature Highlights */}
					<div className="space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
								<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
									<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M13 10V3L4 14h7v7l9-11h-7z"/>
									</svg>
								</div>
								<Text size="sm" className="font-semibold mb-1 text-blue-700 dark:text-blue-300">
									Lightning Fast
								</Text>
								<Text size="xs" className="text-blue-600 dark:text-blue-400">
									Optimized performance for instant responses
								</Text>
							</div>

							<div className="rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
								<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50">
									<svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
									</svg>
								</div>
								<Text size="sm" className="font-semibold mb-1 text-green-700 dark:text-green-300">
									Secure by Design
								</Text>
								<Text size="xs" className="text-green-600 dark:text-green-400">
									Enterprise-grade security built-in
								</Text>
							</div>

							<div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
								<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50">
									<svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
									</svg>
								</div>
								<Text size="sm" className="font-semibold mb-1 text-purple-700 dark:text-purple-300">
									User Friendly
								</Text>
								<Text size="xs" className="text-purple-600 dark:text-purple-400">
									Designed with user experience in mind
								</Text>
							</div>

							<div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
								<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/50">
									<svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
									</svg>
								</div>
								<Text size="sm" className="font-semibold mb-1 text-orange-700 dark:text-orange-300">
									Scalable
								</Text>
								<Text size="xs" className="text-orange-600 dark:text-orange-400">
									Grows with your business needs
								</Text>
							</div>
						</div>

						<div className="rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 p-6">
							<div className="flex items-start space-x-4">
								<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
									<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
									</svg>
								</div>
								<div>
									<Text size="sm" className="font-semibold mb-2">
										Award-Winning Design
									</Text>
									<Text size="xs" className="text-muted-foreground leading-relaxed">
										Recognized by industry leaders for innovation and user experience excellence.
										Our product has received multiple design awards and positive user feedback.
									</Text>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Slide>
	);
}