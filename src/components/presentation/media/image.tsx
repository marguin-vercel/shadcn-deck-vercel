import NextImage from 'next/image';
import { cn } from '~/lib/utils';

export interface ImageProps {
	src: string;
	alt: string;
	className?: string;
	width?: string | number;
	height?: string | number;
	fit?: 'contain' | 'cover' | 'fill' | 'none';
	position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
	animate?: boolean;
	border?: boolean;
	shadow?: boolean;
	rounded?: boolean | 'sm' | 'md' | 'lg' | 'full';
	priority?: boolean;
}

/**
 * Image component - Displays images with various styling options
 * Optimized to use Next.js Image component for better performance
 */
export function Image({
	src,
	alt,
	className,
	width,
	height,
	fit = 'contain',
	position = 'center',
	animate = false,
	border = false,
	shadow = false,
	rounded = false,
	priority = false,
}: ImageProps) {
	// Object fit classes
	const fitClasses = {
		contain: 'object-contain',
		cover: 'object-cover',
		fill: 'object-fill',
		none: 'object-none',
	};

	// Object position classes
	const positionClasses = {
		center: 'object-center',
		top: 'object-top',
		bottom: 'object-bottom',
		left: 'object-left',
		right: 'object-right',
	};

	// Border class
	const borderClass = border ? 'border border-[#333333]' : '';

	// Shadow class
	const shadowClass = shadow ? 'shadow-lg' : '';

	// Rounded classes
	let roundedClass = '';
	if (rounded === true) {
		roundedClass = 'rounded-md';
	} else if (rounded) {
		roundedClass = {
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
		}[rounded];
	}

	// Animation class
	const animateClass = animate ? 'animate-fade-in' : '';

	// For external images or SVGs, use regular img tag
	if (
		src.startsWith('http') ||
		src.startsWith('data:') ||
		src.endsWith('.svg')
	) {
		return (
			// biome-ignore lint/nursery/noImgElement: <explanation>
			<img
				src={src || '/placeholder.svg'}
				alt={alt}
				className={cn(
					'mx-auto max-w-full',
					fitClasses[fit],
					positionClasses[position],
					borderClass,
					shadowClass,
					roundedClass,
					animateClass,
					className
				)}
				style={{
					width: typeof width === 'number' ? `${width}px` : width,
					height: typeof height === 'number' ? `${height}px` : height,
				}}
			/>
		);
	}

	// For local images, use Next.js Image component
	return (
		<div
			className={cn(
				'relative mx-auto',
				borderClass,
				shadowClass,
				roundedClass,
				animateClass,
				className
			)}
			style={{
				width: typeof width === 'number' ? `${width}px` : width,
				height: typeof height === 'number' ? `${height}px` : height,
			}}
		>
			<NextImage
				src={src}
				alt={alt}
				fill={!width || !height}
				width={typeof width === 'number' ? width : undefined}
				height={typeof height === 'number' ? height : undefined}
				className={cn('max-w-full', fitClasses[fit], positionClasses[position])}
				priority={priority}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</div>
	);
}
