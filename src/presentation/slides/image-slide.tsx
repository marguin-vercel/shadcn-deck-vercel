import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Box } from '~/components/presentation/layout/box';
import { Image } from '~/components/presentation/media/image';
import dataDrivenInsights from '~/public/data-driven-insights.png';

export function ImageSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="2xl">Image Component</Heading>
			<Text className="mb-6 text-xl">
				Display images with various styling options
			</Text>

			<div className="mt-10 flex justify-center">
				<Box border rounded="lg" padding="md" className="overflow-hidden">
					<Image
						src={dataDrivenInsights.src}
						alt="Presentation Example"
						width={800}
						height={500}
						fit="contain"
						className="mx-auto"
						animate={true}
					/>
				</Box>
			</div>
		</Slide>
	);
}
