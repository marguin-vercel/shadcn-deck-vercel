import { Slide } from '~/components/presentation/core/slide';
import { BlockQuote } from '~/components/presentation/elements/typography/quote';

export function QuoteSlide() {
	return (
		<Slide contentPosition="center" variant="accent">
			<BlockQuote
				author="Steve Jobs"
				source="Apple Worldwide Developers Conference, 1997"
				size="lg"
				align="center"
			>
				Design is not just what it looks like and feels like. Design is how it
				works.
			</BlockQuote>
		</Slide>
	);
}
