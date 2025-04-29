import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

// Define grid variants using tailwind-variants
const gridStyles = cva('grid w-full', {
	variants: {
		columns: {
			1: 'grid-cols-1',
			2: 'grid-cols-1 md:grid-cols-2',
			3: 'grid-cols-1 md:grid-cols-3',
			4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
			6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6',
		},
		gap: {
			none: 'gap-0',
			sm: 'gap-2',
			md: 'gap-4',
			lg: 'gap-8',
		},
		alignItems: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch',
		},
		justifyItems: {
			start: 'justify-items-start',
			center: 'justify-items-center',
			end: 'justify-items-end',
			stretch: 'justify-items-stretch',
		},
	},
	defaultVariants: {
		columns: 2,
		gap: 'md',
		alignItems: 'center',
		justifyItems: 'center',
	},
});

export interface GridProps {
	children: ReactNode;
	className?: string;
	columns?: 1 | 2 | 3 | 4 | 6;
	gap?: 'none' | 'sm' | 'md' | 'lg';
	alignItems?: 'start' | 'center' | 'end' | 'stretch';
	justifyItems?: 'start' | 'center' | 'end' | 'stretch';
}

/**
 * Grid component - Responsive grid layout system
 * Optimized as a Server Component
 */
export function Grid({
	children,
	className,
	columns,
	gap,
	alignItems,
	justifyItems,
}: GridProps) {
	return (
		<div
			className={gridStyles({
				columns,
				gap,
				alignItems,
				justifyItems,
				class: className,
			})}
		>
			{children}
		</div>
	);
}
