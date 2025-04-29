'use client';

import { AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import {
	Children,
	type ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useFullscreen } from '~/hooks/use-fullscreen';
import { usePresentation } from '~/hooks/use-presentation';
import { cn } from '~/lib/utils';

// Import UnifiedControls dynamically with no SSR
const UnifiedControls = dynamic(
	() => import('../unified-controls').then((mod) => mod.UnifiedControls),
	{ ssr: false }
);

// Import Grid and Presenter views
const GridView = dynamic(
	() => import('../grid-view').then((mod) => mod.GridView),
	{ ssr: false }
);

export interface DeckProps {
	children: ReactNode;
	className?: string;
	showControls?: boolean;
	showProgress?: boolean;
	transitionEffect?: 'fade' | 'slide' | 'none';
	theme?: 'dark' | 'light';
	aspectRatio?: '16:9' | '4:3' | 'auto';
	showFullscreenButton?: boolean;
	showGridButton?: boolean;
	showOverviewButton?: boolean;
	showStartButton?: boolean;
	showThemeToggle?: boolean;
	controlsPosition?: 'bottom' | 'bottom-right' | 'bottom-left';
	presenterNotes?: string[];
	autoScale?: boolean;
	scaleBuffer?: number; // Additional buffer for scaling (0.0-1.0)
}

/**
 * Deck component - The main container for presentation slides
 *
 * Manages slide navigation, fullscreen mode, and provides context to child components
 */
export function Deck({
	children,
	className,
	showControls = true,
	showProgress = true,
	aspectRatio = '16:9',
	showFullscreenButton = true,
	showGridButton = false,
	showOverviewButton = false,
	showStartButton = false,
	showThemeToggle = true,
	controlsPosition = 'bottom',
	autoScale = true,
	scaleBuffer = 0.05, // 5% buffer by default
}: DeckProps) {
	const deckRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const { currentSlideId, goToNextSlide, goToPreviousSlide } =
		usePresentation();

	const slides = Children.toArray(children);

	const [isGridViewOpen, setIsGridViewOpen] = useState(false);
	const [contentScale, setContentScale] = useState(1);
	const [hasOverflow, setHasOverflow] = useState(false);
	const [_containerSize, setContainerSize] = useState({ width: 0, height: 0 });

	const { isFullscreen, toggleFullscreen, isFullscreenEnabled } =
		useFullscreen(deckRef);

	const openGridView = useCallback(() => {
		setIsGridViewOpen(true);
	}, []);

	const navigateToPresenterView = useCallback(() => {
		router.push(`/presenter/${currentSlideId}`);
	}, [router, currentSlideId]);

	// Monitor slide content for overflow and adjust scaling if needed
	useEffect(() => {
		if (!autoScale || !contentRef.current || !containerRef.current) {
			return;
		}

		const checkOverflow = () => {
			const content = contentRef.current;
			const container = containerRef.current;

			if (!content || !container) {
				return;
			}

			// Get real size including padding, border, etc.
			const computedStyle = window.getComputedStyle(container);
			const paddingHorizontal =
				Number.parseFloat(computedStyle.paddingLeft) +
				Number.parseFloat(computedStyle.paddingRight);
			const paddingVertical =
				Number.parseFloat(computedStyle.paddingTop) +
				Number.parseFloat(computedStyle.paddingBottom);

			// Get precise measurements
			const contentHeight = content.scrollHeight;
			const contentWidth = content.scrollWidth;
			const containerHeight = container.clientHeight - paddingVertical;
			const containerWidth = container.clientWidth - paddingHorizontal;

			// Store container size for debugging and adjustments
			setContainerSize({ width: containerWidth, height: containerHeight });

			// Add a small buffer to catch nearly overflowing content
			// For example, if content is 98% of container, we still want to scale
			const bufferThreshold = 1 - scaleBuffer;
			const heightRatio = contentHeight / containerHeight;
			const widthRatio = contentWidth / containerWidth;

			// Check if content exceeds container dimensions or is very close
			// Adjust for smaller heights with more aggressive scaling
			const needsScaling =
				heightRatio > bufferThreshold || widthRatio > bufferThreshold;

			// More aggressive scaling for smaller heights (like 600px)
			const smallHeightThreshold = 700; // Adjust threshold for "small heights"
			const isSmallHeight = containerHeight < smallHeightThreshold;

			// If height is small, use a more aggressive scaling approach
			const adjustedHeightRatio = isSmallHeight
				? heightRatio * (1 + 0.1 * (1 - containerHeight / smallHeightThreshold))
				: heightRatio;

			if (needsScaling || (isSmallHeight && adjustedHeightRatio > 0.85)) {
				setHasOverflow(true);

				// Calculate scale needed for both dimensions with adjusted ratios
				const scaleX = containerWidth / contentWidth;
				const scaleY = containerHeight / contentHeight;

				// Use the smaller scale to ensure all content fits
				let newScale = Math.min(scaleX, scaleY, 1);

				// Apply additional scaling buffer for small heights
				if (isSmallHeight) {
					// Apply extra reduction for small heights - more reduction as height gets smaller
					const smallHeightFactor = Math.max(
						0.85,
						containerHeight / smallHeightThreshold
					);
					newScale *= smallHeightFactor;
				}

				// Apply general safety buffer
				newScale *= 1 - scaleBuffer;

				// Ensure scale never goes too small
				newScale = Math.max(newScale, 0.5);

				setContentScale(newScale);
			} else {
				setHasOverflow(false);
				setContentScale(1);
			}
		};

		// Create ResizeObserver to monitor both container and content
		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(checkOverflow);
		});

		resizeObserver.observe(containerRef.current);
		resizeObserver.observe(contentRef.current);

		// Initial check and also recheck when slides change
		checkOverflow();

		// Check again after a short delay to handle any dynamic content loading
		const timeoutId = setTimeout(checkOverflow, 300);

		return () => {
			resizeObserver.disconnect();
			clearTimeout(timeoutId);
		};
	}, [autoScale, scaleBuffer]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isGridViewOpen) {
				return;
			}

			if (e.key === 'ArrowRight' || e.key === ' ') {
				goToNextSlide();
			} else if (e.key === 'ArrowLeft') {
				goToPreviousSlide();
			} else if (e.key === 'f' || e.key === 'F') {
				toggleFullscreen();
			} else if (e.key === 'g' || e.key === 'G') {
				openGridView();
			} else if (e.key === 'p' || e.key === 'P') {
				navigateToPresenterView();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [
		isGridViewOpen,
		goToNextSlide,
		goToPreviousSlide,
		toggleFullscreen,
		openGridView,
		navigateToPresenterView,
	]);

	const getAspectRatioClass = () => {
		if (aspectRatio === 'auto') {
			return '';
		}
		return aspectRatio === '16:9' ? 'aspect-[16/9]' : 'aspect-[4/3]';
	};

	const controlsPositionStyle = useMemo(() => {
		if (controlsPosition === 'bottom') {
			return 'bottom-8 left-1/2 transform -translate-x-1/2';
		}
		if (controlsPosition === 'bottom-right') {
			return 'bottom-8 right-8';
		}
		if (controlsPosition === 'bottom-left') {
			return 'bottom-8 left-8';
		}
		return '';
	}, [controlsPosition]);

	return (
		<div
			ref={deckRef}
			className={cn(
				'bg-black',
				isFullscreen
					? 'fixed inset-0 z-50'
					: 'flex items-center justify-center',
				className
			)}
		>
			<div
				ref={containerRef}
				className={cn(
					'relative h-full max-h-screen w-full overflow-hidden p-4',
					getAspectRatioClass(),
					isFullscreen && 'aspect-auto h-screen max-h-none',
					hasOverflow && 'overflow-visible'
				)}
			>
				<div
					ref={contentRef}
					className={cn(
						'absolute inset-0 p-4',
						hasOverflow && 'transform-gpu transition-transform duration-300'
					)}
					style={{
						transform: hasOverflow ? `scale(${contentScale})` : 'none',
						transformOrigin: 'center center',
					}}
				>
					{children}
				</div>

				<div className={`fixed z-50 ${controlsPositionStyle}`}>
					<UnifiedControls
						showFullscreen={showFullscreenButton && isFullscreenEnabled}
						showNavigation={showControls}
						showProgress={showProgress}
						showGrid={showGridButton}
						showOverview={showOverviewButton}
						showStartButton={showStartButton}
						showThemeToggle={showThemeToggle}
						onGridButtonClick={openGridView}
					/>
				</div>

				<AnimatePresence>
					{isGridViewOpen && (
						<GridView
							isOpen={isGridViewOpen}
							onClose={() => setIsGridViewOpen(false)}
							slideThumbnails={slides}
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
