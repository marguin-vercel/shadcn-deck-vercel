import { highlightCode } from '~/lib/shiki';
import { ShikiCode } from './shiki-code';
import { ShikiCodeClient } from './shiki-code-client';

// Update the CodeBlockProps interface to use the correct theme names
export interface CodeBlockProps {
	children: string;
	className?: string;
	language?: string;
	theme?:
		| 'github-dark'
		| 'github-light'
		| 'nord'
		| 'dracula'
		| 'material-palenight';
	showLineNumbers?: boolean;
	highlight?: number[];
	fontSize?: 'xs' | 'sm' | 'md' | 'lg';
	interactive?: boolean;
}

/**
 * CodeBlock component - Uses Shiki for syntax highlighting
 * Can be used in both Server and Client Components
 */
export async function CodeBlock({
	children,
	className,
	language = 'typescript',
	theme = 'github-dark',
	showLineNumbers = false,
	highlight = [],
	fontSize = 'md',
	interactive = true,
}: CodeBlockProps) {
	// If interactive is false, just use the server component
	if (!interactive) {
		return (
			<ShikiCode
				language={language}
				theme={theme}
				showLineNumbers={showLineNumbers}
				highlight={highlight}
				fontSize={fontSize}
				className={className}
			>
				{children}
			</ShikiCode>
		);
	}

	// For interactive mode, pre-render the HTML and pass it to the client component
	const highlightedHtml = await highlightCode(
		children,
		language,
		theme,
		highlight
	);

	return (
		<ShikiCodeClient
			highlightedHtml={highlightedHtml}
			fontSize={fontSize}
			className={className}
		/>
	);
}
