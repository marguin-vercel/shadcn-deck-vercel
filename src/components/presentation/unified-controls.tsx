'use client';

import {
	ChevronLeft,
	ChevronRight,
	Grid,
	Home,
	Maximize,
	Minimize,
	Monitor,
	Moon,
	Sun,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MenuBar, type MenuBarItem } from '~/components/ui/bottom-menu';
import { CircleProgress } from '~/components/ui/circle-progress';
import { usePresentationStore } from '~/store/presentation-store';

interface UnifiedControlsProps {
	className?: string;
	showFullscreen?: boolean;
	showNavigation?: boolean;
	showProgress?: boolean;
	showGrid?: boolean;
	showOverview?: boolean;
	showStartButton?: boolean;
	showThemeToggle?: boolean;
	onGridButtonClick?: () => void;
}

/**
 * UnifiedControls component - A modern toolbar for presentation controls
 *
 * Combines fullscreen, navigation, and progress indicators in a stylish menu bar
 */

export function UnifiedControls({
	className,
	showFullscreen = true,
	showNavigation = true,
	showProgress = true,
	showGrid = false,
	showOverview = false,
	showStartButton = false,
	showThemeToggle = true,
	onGridButtonClick,
}: UnifiedControlsProps) {
	// Use our Zustand store directly
	const {
		isFullscreen,
		toggleFullscreen,
		goToNextSlide,
		goToPreviousSlide,
		isFirstSlide,
		isLastSlide,
		activeSlide,
		totalSlides,
		goToSlide,
		slideId,
	} = usePresentationStore();

	// Use next-themes directly
	const { theme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);

	// Handle hydration issue
	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted && theme === 'dark';

	// Toggle theme function
	const toggleTheme = () => {
		setTheme(isDark ? 'light' : 'dark');
	};

	// Build menu items based on enabled features
	const menuItems: MenuBarItem[] = [];

	// Add start button (go to first slide)
	if (showStartButton) {
		menuItems.push({
			icon: (props) => <Home {...props} />,
			label: 'Go to first slide',
			onClick: () => goToSlide(0),
			shortcut: 'Home',
		});
	}

	// Add progress indicator with CircleProgress
	if (!showNavigation && showProgress) {
		menuItems.push({
			icon: () => (
				<div className="relative flex h-10 w-10 items-center justify-center">
					<CircleProgress
						value={activeSlide + 1}
						maxValue={totalSlides}
						size={20}
						strokeWidth={2.5}
						useGradient
						gradientColors={[
							'hsl(var(--primary))',
							'hsl(var(--primary))',
							'hsl(var(--primary))',
						]}
						animationDuration={300}
						disableAnimation={false}
					/>
					<span className="absolute font-bold text-[9px] text-white">
						{activeSlide + 1}
					</span>
				</div>
			),
			label: `Slide ${activeSlide + 1} of ${totalSlides}`,
		});
	}

	// Add navigation controls
	if (showNavigation) {
		// Previous slide button
		menuItems.push({
			icon: (props) => (
				<ChevronLeft {...props} className={isFirstSlide ? 'opacity-50' : ''} />
			),
			label: 'Previous slide',
			onClick: isFirstSlide ? undefined : goToPreviousSlide,
			disabled: isFirstSlide,
			shortcut: '←',
		});

		if (showProgress) {
			menuItems.push({
				icon: () => (
					<div className="relative flex h-10 w-10 items-center justify-center">
						<CircleProgress
							value={activeSlide + 1}
							maxValue={totalSlides}
							size={20}
							strokeWidth={2.5}
							useGradient
							gradientColors={[
								'hsl(var(--primary))',
								'hsl(var(--primary))',
								'hsl(var(--primary))',
							]}
							animationDuration={300}
							disableAnimation={false}
						/>
						<span className="absolute font-bold text-[9px] text-white">
							{activeSlide + 1}
						</span>
					</div>
				),
				label: `Slide ${activeSlide + 1} of ${totalSlides}`,
			});
		}

		// Next slide button
		menuItems.push({
			icon: (props) => (
				<ChevronRight {...props} className={isLastSlide ? 'opacity-50' : ''} />
			),
			label: 'Next slide',
			onClick: isLastSlide ? undefined : goToNextSlide,
			disabled: isLastSlide,
			shortcut: '→',
		});
	}

	// Add presentation grid view
	if (showGrid) {
		menuItems.push({
			icon: (props) => <Grid {...props} />,
			label: 'Grid view',
			onClick: onGridButtonClick,
			shortcut: 'G',
		});
	}

	// Add function to open presenter view in new tab
	const openPresenterView = useCallback(() => {
		if (typeof window !== 'undefined') {
			const currentSlideId = slideId;
			window.open(
				`/presenter/${currentSlideId}`,
				'_blank',
				'noopener,noreferrer'
			);
		}
	}, [slideId]);

	// Add presentation overview
	if (showOverview) {
		menuItems.push({
			icon: (props) => <Monitor {...props} />,
			label: 'Presenter view',
			onClick: openPresenterView,
			shortcut: 'P',
		});
	}

	// Add theme toggle
	if (showThemeToggle && mounted) {
		menuItems.push({
			icon: (props) => (isDark ? <Sun {...props} /> : <Moon {...props} />),
			label: isDark ? 'Light mode' : 'Dark mode',
			onClick: toggleTheme,
			shortcut: 'T',
		});
	}

	// Add fullscreen toggle
	if (showFullscreen) {
		menuItems.push({
			icon: (props) =>
				isFullscreen ? <Minimize {...props} /> : <Maximize {...props} />,
			label: isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen',
			onClick: toggleFullscreen,
			shortcut: 'F',
		});
	}

	// Track the current active slide to highlight the navigation button
	const highlightIndex = useMemo(() => {
		if (isFirstSlide && showStartButton) {
			return 0; // Highlight home button on first slide
		}
		return undefined; // No highlight by default
	}, [isFirstSlide, showStartButton]);

	return (
		<div className={'-translate-x-1/2 fixed bottom-8 left-1/2 z-50 transform'}>
			<MenuBar
				items={menuItems}
				className={className}
				highlight={highlightIndex}
			/>
		</div>
	);
}
