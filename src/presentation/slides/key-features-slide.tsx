import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Grid } from '~/components/presentation/layout/grid';

export function KeyFeaturesSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="xl">Key Features</Heading>
			<Text>
				Our presentation system is designed for modern web applications
			</Text>

			<Grid columns={2} gap="md" className="mt-8">
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="sm">Dark Mode</Heading>
					<Text size="sm">
						Optimized for readability with Vercel-inspired dark theme
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="sm">Responsive</Heading>
					<Text size="sm">
						Looks great on all devices from mobile to desktop
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="sm">Customizable</Heading>
					<Text size="sm">Easily adapt to your brand with theming options</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="sm">Accessible</Heading>
					<Text size="sm">Built with accessibility in mind for all users</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="sm">Interactive</Heading>
					<Text size="sm">Add buttons and interactive elements to slides</Text>
				</Box>
				<Box border rounded="lg" padding="md" width="100%" height="100%">
					<Heading size="sm">Fullscreen</Heading>
					<Text size="sm">
						Present your slides in immersive fullscreen mode
					</Text>
				</Box>
			</Grid>
		</Slide>
	);
}
