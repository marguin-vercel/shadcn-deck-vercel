import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';

// Remove the useDeck import since we'll handle theme differently
// import { useDeck } from "./deck-context"

export interface SlideProps {
	children: ReactNode;
	className?: string;
	backgroundImage?: string;
	backgroundColor?: string;
	contentPosition?: 'center' | 'top' | 'bottom';
	padding?: 'none' | 'small' | 'medium' | 'large';
	variant?: 'default' | 'gradient' | 'accent';
}

/**
 * Slide component - Container for slide content
 *
 * Provides layout and styling for individual presentation slides
 */
export function Slide({
	children,
	className,
	backgroundImage,
	backgroundColor,
	contentPosition = 'center',
	padding = 'medium',
	variant = 'default',
}: SlideProps) {
	// Content position classes
	const positionClasses = {
		center: 'justify-center',
		top: 'justify-start pt-16',
		bottom: 'justify-end pb-16',
	};

	// Padding classes
	const paddingClasses = {
		none: 'p-0',
		small: 'p-4',
		medium: 'p-8',
		large: 'p-16',
	};

	// Variant classes
	const variantClasses = {
		default: 'bg-card text-foreground',
		gradient: 'bg-gradient-to-br from-card to-background text-foreground',
		accent:
			'border-primary bg-card shadow-[0_0_15px_rgba(var(--primary),0.2)] text-foreground',
	};

	// Background style
	const backgroundStyle = {
		backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
		backgroundColor: backgroundColor || undefined,
	};

	return (
		<div
			className={cn(
				'relative flex h-full w-full flex-col overflow-hidden bg-center bg-cover',
				variantClasses[variant],
				positionClasses[contentPosition],
				paddingClasses[padding],
				className
			)}
			style={backgroundStyle}
			data-slide-content="true"
		>
			{children}
		</div>
	);
}
