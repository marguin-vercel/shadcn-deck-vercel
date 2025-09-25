import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Text } from './text';

const quoteStyles = cva('border-border border-l-4 pl-4 italic', {
	variants: {
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

interface QuoteProps {
	children: ReactNode;
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	citation?: ReactNode;
}

export function Quote({ children, className, size, citation }: QuoteProps) {
	return (
		<blockquote className={cn(quoteStyles({ size }), className)}>
			{children}
			{citation && <Text className="mt-2 block not-italic">— {citation}</Text>}
		</blockquote>
	);
}
