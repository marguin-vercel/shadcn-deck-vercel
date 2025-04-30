import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '~/lib/utils';

// Define text variants using tailwind-variants
const textStyles = cva('mb-4 text-muted-foreground leading-relaxed', {
	variants: {
		size: {
			xs: 'text-sm',
			sm: 'text-base',
			md: 'text-lg',
			lg: 'text-xl',
			xl: 'text-2xl',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
		animate: {
			true: 'animate-fade-in-up',
		},
	},
	defaultVariants: {
		size: 'md',
		align: 'left',
		weight: 'normal',
		animate: false,
	},
});

export interface TextProps {
	children: ReactNode;
	className?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	align?: 'left' | 'center' | 'right';
	color?: string;
	weight?: 'normal' | 'medium' | 'semibold' | 'bold';
	animate?: boolean;
}

/**
 * Text component - Displays paragraphs with various styles
 * Optimized as a Server Component
 */
export function Text({
	children,
	className,
	size,
	align,
	color,
	weight,
	animate,
}: TextProps) {
	// Custom color style
	const colorStyle = color ? { color } : {};

	return (
		<p
			className={cn(textStyles({ size, align, weight, animate }), className)}
			style={colorStyle}
		>
			{children}
		</p>
	);
}
