import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Grid } from '~/components/presentation/layout/grid';

export function GridSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="xl">Grid Layout Example</Heading>
			<Text>Organize content in responsive grid layouts</Text>

			<Grid columns={2} gap="lg" className="mt-8">
				<Box border rounded="lg" padding="lg">
					<Heading size="md">Feature One</Heading>
					<Text>
						Easily create multi-column layouts that adapt to different screen
						sizes with our responsive grid system.
					</Text>
				</Box>

				<Box border rounded="lg" padding="lg">
					<Heading size="md">Feature Two</Heading>
					<Text>
						Customize spacing, alignment, and appearance with simple props for
						maximum flexibility.
					</Text>
				</Box>
			</Grid>
		</Slide>
	);
}
