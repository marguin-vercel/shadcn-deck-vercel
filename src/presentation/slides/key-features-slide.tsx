import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Grid } from '~/components/presentation/layout/grid';

export function KeyFeaturesSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="2xl">Key Features</Heading>
			<Text className="mb-6 text-xl">
				Our presentation system is designed for modern web applications
			</Text>

			<Grid columns={2} gap="md" className="mt-10">
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="lg">Dark Mode</Heading>
					<Text className="text-lg">
						Optimized for readability with Vercel-inspired dark theme
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="lg">Responsive</Heading>
					<Text className="text-lg">
						Looks great on all devices from mobile to desktop
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="lg">Customizable</Heading>
					<Text className="text-lg">
						Easily adapt to your brand with theming options
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="lg">Accessible</Heading>
					<Text className="text-lg">
						Built with accessibility in mind for all users
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="lg">Interactive</Heading>
					<Text className="text-lg">
						Add buttons and interactive elements to slides
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="lg">Fullscreen</Heading>
					<Text className="text-lg">
						Present your slides in immersive fullscreen mode
					</Text>
				</Box>
			</Grid>
		</Slide>
	);
}
