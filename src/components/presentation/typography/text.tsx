import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '~/lib/utils';

// Define text variants using tailwind-variants
const textStyles = cva('leading-relaxed', {
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
		mb: {
			xs: 'mb-2',
			sm: 'mb-4',
			md: 'mb-6',
			lg: 'mb-8',
			xl: 'mb-12',
			'2xl': 'mb-16',
			none: '',
		},
		animate: {
			true: 'animate-fade-in-up',
		},
	},
	defaultVariants: {
		size: 'md',
		align: 'left',
		weight: 'normal',
		mb: 'none',
		animate: false,
	},
});

interface TextProps {
	children: ReactNode;
	className?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	align?: 'left' | 'center' | 'right';
	color?: string;
	weight?: 'normal' | 'medium' | 'semibold' | 'bold';
	mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
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
	mb,
	animate,
}: TextProps) {
	// Custom color style
	const colorStyle = color ? { color } : {};

	return (
		<p
			className={cn(
				textStyles({ size, align, weight, mb, animate }),
				className
			)}
			style={colorStyle}
		>
			{children}
		</p>
	);
}
