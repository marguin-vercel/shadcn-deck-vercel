'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

import { cn } from '~/lib/utils';

interface AspectRatioScalerProps {
	children: ReactNode;
	designWidth: number;
	designHeight: number;
	className?: string;
	disablePointerEvents?: boolean;
	centerContent?: boolean;
	prioritizeWidth?: boolean;
	allowOverflow?: boolean;
	fullWidthAutoHeight?: boolean;
}

export function AspectRatioScaler({
	children,
	designWidth,
	designHeight,
	className,
	disablePointerEvents,
	centerContent = false,
	prioritizeWidth = false,
	allowOverflow = false,
	fullWidthAutoHeight = false,
}: AspectRatioScalerProps) {
	const [ref, bounds] = useMeasure();
	const [scale, setScale] = useState(1);
	const [hydrated, setHydrated] = useState(false);

	// SSR safety - only render scaled content after hydration
	useEffect(() => {
		setHydrated(true);
	}, []);

	// Calculate scale and positioning based on container dimensions
	useEffect(() => {
		if (!hydrated) return;

		const containerWidth = bounds.width || 1;
		const containerHeight = bounds.height || 1;
		const scaleWidth = containerWidth / designWidth;
		const scaleHeight = containerHeight / designHeight;

		// Choose scaling strategy
		let finalScale: number;
		if (fullWidthAutoHeight) {
			// Use full width, height will be determined by aspect ratio
			finalScale = scaleWidth;
		} else if (prioritizeWidth) {
			// Use width scale unless it would overflow height significantly
			finalScale = scaleHeight < scaleWidth * 0.7 ? scaleHeight : scaleWidth;
		} else {
			// Default: use the smaller scale to maintain aspect ratio
			finalScale = Math.min(scaleWidth, scaleHeight);
		}

		setScale(finalScale);
	}, [
		bounds,
		hydrated,
		designWidth,
		designHeight,
		prioritizeWidth,
		fullWidthAutoHeight,
	]);

	// Calculate positioning for centering
	const scaledWidth = designWidth * scale;
	const scaledHeight = designHeight * scale;
	const containerWidth = bounds.width || 0;
	const containerHeight = bounds.height || 0;

	const offsetX = centerContent ? (containerWidth - scaledWidth) / 2 : 0;
	const offsetY = centerContent ? (containerHeight - scaledHeight) / 2 : 0;

	return (
		<div
			ref={ref}
			className={cn(
				'relative w-full',
				// For full width auto height, don't constrain height
				fullWidthAutoHeight ? 'h-auto' : 'h-full',
				allowOverflow ? 'overflow-visible' : 'overflow-hidden',
				className
			)}
			// When using fullWidthAutoHeight, set the container height based on aspect ratio
			style={fullWidthAutoHeight ? { height: scaledHeight } : undefined}
		>
			{hydrated && (
				<div
					className={cn('absolute', {
						'pointer-events-none': disablePointerEvents,
					})}
					style={{
						width: designWidth,
						height: designHeight,
						transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
						transformOrigin: 'top left',
					}}
				>
					{children}
				</div>
			)}
		</div>
	);
}
