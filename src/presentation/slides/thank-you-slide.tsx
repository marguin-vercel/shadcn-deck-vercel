import Link from 'next/link';
import { Heading, Slide, Text } from '~/components/presentation';
import { Button } from '~/components/ui/button';
import type { SlideDefinition } from '~/pkgs/deck';

export const ThankYouSlide: SlideDefinition = {
	slug: 'thank-you-slide',
	component: SlideComponent,
	notes: 'Thank you for attending my presentation. I hope you found it informative and engaging.',
	title: 'Thank you for attending my presentation',
};

function SlideComponent() {
	return (
		<Slide contentPosition="center" padding='large'>
			<Heading size="2xl" align="center" mb='md'>
				<div className="flex items-center justify-center gap-2 font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 256"
						className="h-12 w-12"
					>
						<title>shadcn/deck logo</title>
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
					</svg>{' '}
					shadcn/deck
				</div>
			</Heading>
			<Text
				size="lg"
				align="center"
				animate
				className="mx-auto max-w-3xl text-2xl"
			>
				This entire presentation was built using shadcn/deck - a modern
				presentation system using shadcn/ui components
			</Text>
			<div className="mt-10 flex justify-center space-x-4">
				<Button variant="outline" size="xl" asChild>
					<Link href="https://github.com/consentio/shadcn-deck">
						gh repo clone consentdotio/shadcn-deck
					</Link>
				</Button>
			</div>
		</Slide>
	);
}
