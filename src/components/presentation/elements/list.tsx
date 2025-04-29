import { cva } from 'class-variance-authority';
import { ArrowRight, Check, Circle } from 'lucide-react';
import { Children, type ReactNode, isValidElement } from 'react';
import { cn } from '~/lib/utils';

// Define list variants using tailwind-variants with slots
const listStyles = cva('pl-2', {
	variants: {
		type: {
			ordered: {},
			unordered: {},
			checked: {},
			arrow: {},
		},
		size: {
			sm: { base: 'text-sm' },
			md: { base: 'text-base' },
			lg: { base: 'text-lg' },
		},
		spacing: {
			tight: { base: 'space-y-1' },
			normal: { base: 'space-y-2' },
			relaxed: { base: 'space-y-4' },
		},
		animate: {
			true: { base: 'animate-fade-in-up' },
		},
	},
	defaultVariants: {
		type: 'unordered',
		size: 'md',
		spacing: 'normal',
		animate: false,
	},
});

const listItemStyles = cva('flex items-start', {
	variants: {
		animate: {
			true: 'animate-fade-in-up',
		},
	},
});

export interface ListProps {
	children: ReactNode;
	className?: string;
	type?: 'ordered' | 'unordered' | 'checked' | 'arrow';
	size?: 'sm' | 'md' | 'lg';
	spacing?: 'tight' | 'normal' | 'relaxed';
	animate?: boolean;
	animateItems?: boolean;
	color?: string;
}

/**
 * List component - Displays ordered or unordered lists with various styles
 */
export function List({
	children,
	className,
	type,
	size,
	spacing,
	animate,
	animateItems = false,
	color,
}: ListProps) {
	const baseClasses = listStyles({ type, size, spacing, animate });
	const item = listItemStyles({ animate: animateItems });

	// Custom color style
	const colorStyle = color ? { color } : {};

	// Determine list component based on type
	const ListComponent = type === 'ordered' ? 'ol' : 'ul';

	// Process children to add markers and animations
	const processedChildren = Children.map(children, (child, index) => {
		if (isValidElement(child)) {
			const itemAnimateClass = animateItems
				? `animate-fade-in-up animate-delay-${index * 100}`
				: '';

			let marker: ReactNode | null = null;
			if (type === 'checked') {
				marker = (
					<Check className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-green-500" />
				);
			} else if (type === 'arrow') {
				marker = (
					<ArrowRight className="mr-2 inline-block h-4 w-4 flex-shrink-0" />
				);
			} else if (type === 'unordered') {
				marker = <Circle className="mr-2 inline-block h-2 w-2 flex-shrink-0" />;
			}

			return (
				<li className={`${item} ${itemAnimateClass}`}>
					{marker}
					<div>{child}</div>
				</li>
			);
		}
		return child;
	});

	return (
		<ListComponent className={cn(baseClasses, className)} style={colorStyle}>
			{processedChildren}
		</ListComponent>
	);
}

/**
 * ListItem component - Individual list item
 */
export function ListItem({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
