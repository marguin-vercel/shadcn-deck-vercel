import { Box, Grid, Heading, Slide, Text } from '~/components/presentation';

export function WorksLikeAppSlide() {
	return (
		<Slide contentPosition="center" variant="gradient">
			<Heading size="2xl">What if your slides reflected your brand?</Heading>
			<Text size="xl" className="mb-6">
				Use the same components and design from your website or app in your
				slides.
			</Text>
			<Grid columns={2} gap="md">
				<Box border rounded="lg" padding="md" className="w-full">
					<Heading size="lg">UI Consistency</Heading>
					<Text className="text-lg">
						Your buttons, layouts, and themes—just work.
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" className="w-full">
					<Heading size="lg">Live Interactivity</Heading>
					<Text className="text-lg">
						Embed live components, demos, and widgets directly.
					</Text>
				</Box>
			</Grid>
		</Slide>
	);
}
