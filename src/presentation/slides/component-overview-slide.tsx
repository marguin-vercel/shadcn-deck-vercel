import { Slide } from '~/components/presentation/core/slide';
import { List, ListItem } from '~/components/presentation/elements/list';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';

export function ComponentOverviewSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="2xl" align="left">
				Component Overview
			</Heading>
			<Text>
				Our presentation system includes everything you need to create beautiful
				slides
			</Text>
			<List type="checked" spacing="relaxed" animateItems className="mt-8">
				<ListItem>Flexible slide layouts and positioning</ListItem>
				<ListItem>Typography components with customizable styles</ListItem>
				<ListItem>Media components for images and code blocks</ListItem>
				<ListItem>Layout components for organizing content</ListItem>
				<ListItem>Responsive design for all screen sizes</ListItem>
				<ListItem>Fullscreen presentation mode</ListItem>
			</List>
		</Slide>
	);
}
