import { cn } from '~/lib/utils';

export interface CodeServerProps {
	children: string;
	className?: string;
	language?: string;
	fontSize?: 'xs' | 'sm' | 'md' | 'lg';
}

/**
 * CodeServer component - A simple server-side fallback for code blocks
 * Used when we need to render code in server components
 */
export function CodeServer({
	children,
	className,
	language = 'javascript',
	fontSize = 'md',
}: CodeServerProps) {
	// Font size classes
	const fontSizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
	};

	return (
		<div
			className={cn(
				'overflow-hidden rounded-lg border border-[#333333] bg-[#1E1E1E] text-white',
				fontSizeClasses[fontSize],
				className
			)}
		>
			<pre className="overflow-x-auto p-4">
				<code className={`language-${language}`}>{children}</code>
			</pre>
		</div>
	);
}
