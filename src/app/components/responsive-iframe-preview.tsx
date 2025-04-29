'use client';
import { useEffect, useRef, useState } from 'react';

interface ResponsiveIframePreviewProps {
	src: string;
	title: string;
	baseWidth?: number;
	baseHeight?: number;
	className?: string; // Allow passing additional classes
	disablePointerEvents?: boolean; // Option to disable interaction
}

export default function ResponsiveIframePreview({
	src,
	title,
	baseWidth = 1920, // Default base dimensions
	baseHeight = 1080,
	className = '',
	disablePointerEvents = false,
}: ResponsiveIframePreviewProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [scale, setScale] = useState(1);

	useEffect(() => {
		function handleResize() {
			if (!containerRef.current) {
				return;
			}

			const containerWidth = containerRef.current.offsetWidth;
			const containerHeight = containerRef.current.offsetHeight;

			if (containerWidth <= 0) {
				return;
			}

			let newScale: number;

			// Calculate both width and height scaling factors
			const widthScale = containerWidth / baseWidth;
			const heightScale = containerHeight / baseHeight;

			// Use the smaller scale to ensure content fits both dimensions
			// This is important when inside a fixed aspect ratio container
			newScale = Math.min(widthScale, heightScale);

			// Ensure we don't scale too small
			newScale = Math.max(newScale, 0.1);

			setScale(newScale);
		}

		// Use ResizeObserver for better performance
		let resizeObserver: ResizeObserver;
		if (containerRef.current) {
			// Initial calculation (with small delay to ensure DOM is ready)
			setTimeout(handleResize, 0);

			resizeObserver = new ResizeObserver(() => {
				requestAnimationFrame(handleResize);
			});
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (resizeObserver && containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, [baseWidth, baseHeight]);

	return (
		<div
			ref={containerRef}
			className={className}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
			}}
		>
			<iframe
				src={src}
				title={title}
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					width: `${baseWidth}px`,
					height: `${baseHeight}px`,
					transform: `translate(-50%, -50%) scale(${scale})`,
					border: '0',
					pointerEvents: disablePointerEvents ? 'none' : 'auto', // Conditionally disable interaction
				}}
				// frameBorder="0" // Deprecated, use border style
				sandbox="allow-scripts allow-same-origin" // Keep sandbox attributes
				scrolling="no"
				loading="lazy"
			/>
		</div>
	);
}
