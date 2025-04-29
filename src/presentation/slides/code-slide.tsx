import { Slide } from '~/components/presentation/core/slide';
import { Heading } from '~/components/presentation/elements/typography/heading';
import { Text } from '~/components/presentation/elements/typography/text';
import { Code } from '~/components/presentation/media/code';

export function CodeSlide() {
	return (
		<Slide contentPosition="top">
			<Heading size="xl">Code Example</Heading>
			<Text>Showcase code with syntax highlighting and line numbers</Text>

			<Code
				language="typescript"
				showLineNumbers
				highlight={[1, 3, 5]}
				className="mt-6"
			>
				{`import React from 'react';

export function Example({ title }: { title: string }) {
  // This is a sample component
  return <div>{title}</div>;
}`}
			</Code>
		</Slide>
	);
}
