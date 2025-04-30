import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Grid } from '~/components/presentation/layout/grid';

export function PresenterModeSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="2xl">Presenter Mode</Heading>
			<Text className="mb-6 text-xl">
				A powerful view for presenters to stay organized during presentations
			</Text>

			<Grid columns={2} gap="md" className="mt-10">
				<Box border rounded="lg" padding="md" className="flex h-full flex-col">
					<Heading size="lg">Current Slide View</Heading>
					<Text className="text-lg">
						See exactly what your audience sees on the main display
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" className="flex h-full flex-col">
					<Heading size="lg">Presenter Notes</Heading>
					<Text className="text-lg">
						Access your talking points without your audience seeing them
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" className="flex h-full flex-col">
					<Heading size="lg">Next Slide Preview</Heading>
					<Text className="text-lg">
						Preview the upcoming slide so you're always prepared
					</Text>
				</Box>
				<Box border rounded="lg" padding="md" className="flex h-full flex-col">
					<Heading size="lg">Timer & Controls</Heading>
					<Text className="text-lg">
						Keep track of presentation time and navigate slides easily
					</Text>
				</Box>
			</Grid>

			<Box border rounded="lg" padding="md" className="mt-8 text-center">
				<Text className="text-lg">
					Press 'P' to toggle presenter mode during your presentation
				</Text>
			</Box>
		</Slide>
	);
}
