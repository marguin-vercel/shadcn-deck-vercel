import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Button } from '~/components/ui/button';

export function FullscreenSlide() {
	// Note: The actual fullscreen functionality is usually handled by the Deck component
	// This slide just demonstrates the concept and shows a button.
	return (
		<Slide contentPosition="center">
			<Heading size="2xl" align="center">
				Fullscreen Mode
			</Heading>
			<Text size="lg" align="center" className="mb-8">
				Click the fullscreen button or press F to enter fullscreen mode
			</Text>

			<div className="flex justify-center">
				<Box border rounded="lg" padding="lg" className="text-center">
					<div className="mb-4 flex justify-center">
						{/* Placeholder button styling */}
						<Button
							variant="default"
							aria-label="Fullscreen Toggle"
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<title>Fullscreen icon</title>
								<path d="M8 3H5a2 2 0 0 0-2 2v3" />
								<path d="M21 8V5a2 2 0 0 0-2-2h-3" />
								<path d="M3 16v3a2 2 0 0 0 2 2h3" />
								<path d="M16 21h3a2 2 0 0 0 2-2v-3" />
							</svg>
						</Button>
					</div>
					<Text>
						Fullscreen mode provides an immersive presentation experience
						without distractions
					</Text>
				</Box>
			</div>
		</Slide>
	);
}
