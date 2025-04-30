import Link from 'next/link';
import { Slide } from '~/components/presentation/core/slide';

import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Button } from '~/components/ui/button';

export function TitleSlide() {
	return (
		<Slide contentPosition="center" variant="gradient">
			<Heading size="3xl" align="center" animate>
				<div className="flex items-center justify-center gap-2 font-medium">
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
						className="h-12 w-12"
					>
						<title>Modern Presentations</title>
						<rect width="256" height="256" fill="none" />
						<line
							x1="208"
							y1="128"
							x2="128"
							y2="208"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
						<line
							x1="192"
							y1="40"
							x2="40"
							y2="192"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
					</svg>{' '} */}
					What if...
				</div>
			</Heading>
			<Text size="xl" align="center" animate className="mx-auto max-w-3xl">
				We could reimagine presentations for the modern web?
			</Text>
			<div className="mt-10 flex justify-center">
				<Button variant="default" size="lg">
					Let's Explore
				</Button>
			</div>
		</Slide>
	);
}
