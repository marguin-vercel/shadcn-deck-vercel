import { highlightCode } from '~/lib/shiki';
import { cn } from '~/lib/utils';

export interface ShikiCodeProps {
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
}

/**
 * ShikiCode component - Server component that uses Shiki for syntax highlighting
 */
export async function ShikiCode({
	children,
	className,
	language = 'typescript',
	theme = 'github-dark',
	showLineNumbers = false,
	highlight = [],
	fontSize = 'md',
}: ShikiCodeProps) {
	// Font size classes
	const fontSizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
	};

	// Get highlighted HTML from Shiki
	const highlightedCode = await highlightCode(
		children,
		language,
		theme,
		highlight
	);

	// Add line numbers if needed
	let codeWithLineNumbers = highlightedCode;
	if (showLineNumbers) {
		// Parse the HTML to add line numbers
		const lines = children.trim().split('\n');
		const lineNumbersHtml = lines
			.map((_, i) => `<span class="line-number">${i + 1}</span>`)
			.join('\n');

		// Insert line numbers before the code
		codeWithLineNumbers = highlightedCode.replace(
			// biome-ignore lint/performance/useTopLevelRegex: <explanation>
			/<code(.*?)>/,
			`<div class="line-numbers">${lineNumbersHtml}</div><code$1>`
		);
	}

	return (
		<div
			className={cn(
				'overflow-x-auto rounded-lg border border-[#333333] font-mono',
				fontSizeClasses[fontSize],
				className
			)}
		>
			<div
				className="shiki-container relative"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: codeWithLineNumbers }}
			/>
		</div>
	);
}
