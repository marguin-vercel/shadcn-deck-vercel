import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Grid } from '~/components/presentation/layout/grid';

export function GridSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="2xl">Grid Layout Example</Heading>
			<Text className="mb-6 text-xl">
				Organize content in responsive grid layouts
			</Text>

			<Grid columns={2} gap="lg" className="mt-10">
				<Box border rounded="lg" padding="lg">
					<Heading size="lg">Feature One</Heading>
					<Text className="text-lg">
						Easily create multi-column layouts that adapt to different screen
						sizes with our responsive grid system.
					</Text>
				</Box>

				<Box border rounded="lg" padding="lg">
					<Heading size="lg">Feature Two</Heading>
					<Text className="text-lg">
						Customize spacing, alignment, and appearance with simple props for
						maximum flexibility.
					</Text>
				</Box>
			</Grid>
		</Slide>
	);
}
