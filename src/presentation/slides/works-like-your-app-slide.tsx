import { Heading, Slide, Text, Box, Grid } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';

export const WorksLikeAppSlide: SlideDefinition = {
	slug: 'works-like-your-app-slide',
	component: SlideComponent,
	notes: 'What if your slides reflected your brand?',
	title: 'What if your slides reflected your brand?',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding='large'>
			<Heading size="2xl" mb='md'>What if your slides reflected your brand?</Heading>
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
