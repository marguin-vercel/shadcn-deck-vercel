import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { cn } from '~/lib/utils';

// Define heading variants using tailwind-variants
const headingStyles = cva('text-foreground tracking-tight', {
	variants: {
		size: {
			xs: 'font-semibold text-lg',
			sm: 'font-semibold text-xl',
			md: 'font-semibold text-2xl',
			lg: 'font-bold text-3xl',
			xl: 'font-bold text-4xl',
			'2xl': 'font-bold text-5xl',
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
		size: 'xl',
		align: 'left',
		weight: 'bold',
		mb: 'none',
		animate: false,
	},
});

interface HeadingProps {
	children: ReactNode;
	className?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	align?: 'left' | 'center' | 'right';
	color?: string;
	weight?: 'normal' | 'medium' | 'semibold' | 'bold';
	mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
	animate?: boolean;
}

/**
 * Heading component - Displays headings with various styles
 * Optimized as a Server Component
 */
export function Heading({
	children,
	className,
	size,
	align,
	color,
	weight,
	mb,
	animate,
}: HeadingProps) {
	// Custom color style
	const colorStyle = color ? { color } : {};

	return (
		<h2
			className={cn(
				headingStyles({ size, align, weight, mb, animate }),
				className
			)}
			style={colorStyle}
		>
			{children}
		</h2>
	);
}
