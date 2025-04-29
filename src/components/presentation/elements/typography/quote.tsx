import { Quote } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';

export interface BlockQuoteProps {
	children: ReactNode;
	className?: string;
	author?: string;
	source?: string;
	size?: 'sm' | 'md' | 'lg';
	align?: 'left' | 'center' | 'right';
	color?: string;
	showQuoteIcon?: boolean;
}

/**
 * BlockQuote component - Displays quotations with attribution
 */
export function BlockQuote({
	children,
	className,
	author,
	source,
	size = 'md',
	align = 'left',
	color,
	showQuoteIcon = true,
}: BlockQuoteProps) {
	// Size classes
	const sizeClasses = {
		sm: 'text-base',
		md: 'text-lg',
		lg: 'text-xl',
	};

	// Alignment classes
	const alignClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	};

	// Custom color style
	const colorStyle = color ? { color } : {};

	return (
		<blockquote
			className={cn(
				'border-gray-300 border-l-4 py-2 pl-4 italic',
				sizeClasses[size],
				alignClasses[align],
				className
			)}
			style={colorStyle}
		>
			<div className="relative">
				{showQuoteIcon && (
					<Quote className="-left-6 -top-2 absolute h-5 w-5 text-gray-400" />
				)}
				<div>{children}</div>
				{(author || source) && (
					<footer className="mt-2 font-normal text-sm not-italic">
						{author && <span className="font-medium">{author}</span>}
						{author && source && <span>, </span>}
						{source && <cite>{source}</cite>}
					</footer>
				)}
			</div>
		</blockquote>
	);
}
