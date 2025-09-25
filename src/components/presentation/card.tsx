import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';

// Define card variants using cva
const cardStyles = cva('overflow-hidden', {
	variants: {
		variant: {
			default: 'border border-border bg-background',
			elevated: 'border border-border bg-background shadow-lg',
			flat: 'bg-muted',
		},
		size: {
			sm: '',
			md: '',
			lg: '',
		},
	},
	compoundVariants: [
		{
			variant: 'default',
			size: 'sm',
			class: 'p-3',
		},
		{
			variant: 'default',
			size: 'md',
			class: 'p-4',
		},
		{
			variant: 'default',
			size: 'lg',
			class: 'p-6',
		},
		{
			variant: 'elevated',
			size: 'sm',
			class: 'p-3',
		},
		{
			variant: 'elevated',
			size: 'md',
			class: 'p-4',
		},
		{
			variant: 'elevated',
			size: 'lg',
			class: 'p-6',
		},
		{
			variant: 'flat',
			size: 'sm',
			class: 'p-3',
		},
		{
			variant: 'flat',
			size: 'md',
			class: 'p-4',
		},
		{
			variant: 'flat',
			size: 'lg',
			class: 'p-6',
		},
	],
	defaultVariants: {
		variant: 'default',
		size: 'md',
	},
});

// Define header and footer styles
const headerStyles = cva('border-border border-b px-4 py-3', {
	variants: {
		size: {
			sm: 'px-3 py-2',
			md: 'px-4 py-3',
			lg: 'px-6 py-4',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

const footerStyles = cva('border-border border-t px-4 py-3', {
	variants: {
		size: {
			sm: 'px-3 py-2',
			md: 'px-4 py-3',
			lg: 'px-6 py-4',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

const contentStyles = cva('p-4', {
	variants: {
		size: {
			sm: 'p-3',
			md: 'p-4',
			lg: 'p-6',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

interface CardProps {
	children: ReactNode;
	className?: string;
	variant?: 'default' | 'elevated' | 'flat';
	size?: 'sm' | 'md' | 'lg';
	header?: ReactNode;
	footer?: ReactNode;
}

/**
 * Card component - Container with header, content, and footer sections
 * Optimized as a Server Component
 */
export function Card({
	children,
	className,
	variant,
	size,
	header,
	footer,
}: CardProps) {
	return (
		<div className={cn(cardStyles({ variant, size }), className)}>
			{header && <div className={headerStyles({ size })}>{header}</div>}
			<div className={contentStyles({ size })}>{children}</div>
			{footer && <div className={footerStyles({ size })}>{footer}</div>}
		</div>
	);
}
