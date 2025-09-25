'use client';

import { type RefObject, useCallback, useEffect, useState } from 'react';

interface FullscreenOptions {
	onEnter?: () => void;
	onExit?: () => void;
}

type DocumentType = Document & {
	webkitFullscreenEnabled: boolean;
	mozFullScreenEnabled: boolean;
	msFullscreenEnabled: boolean;
	webkitFullscreenElement: Element | null;
	mozFullScreenElement: Element | null;
	msFullscreenElement: Element | null;
	webkitExitFullscreen: () => void;
	mozCancelFullScreen: () => void;
	msExitFullscreen: () => void;
};

type ElementType = HTMLElement & {
	webkitRequestFullscreen: () => void;
	mozRequestFullScreen: () => void;
	msRequestFullscreen: () => void;
};
/**
 * Hook for managing fullscreen functionality
 *
 * Provides methods to enter, exit, and toggle fullscreen mode
 * with cross-browser compatibility
 */
export function useFullscreen(
	elementRef: RefObject<HTMLElement | null>,
	options: FullscreenOptions = {}
) {
	const [isFullscreen, setIsFullscreen] = useState(false);

	// Check if fullscreen is supported
	const isFullscreenEnabled = useCallback(() => {
		if (typeof document === 'undefined') {
			return false;
		}

		return (
			document.fullscreenEnabled ||
			(document as DocumentType).webkitFullscreenEnabled ||
			(document as DocumentType).mozFullScreenEnabled ||
			(document as DocumentType).msFullscreenEnabled
		);
	}, []);

	// Get current fullscreen element
	const getFullscreenElement = useCallback(() => {
		if (typeof document === 'undefined') {
			return null;
		}

		return (
			document.fullscreenElement ||
			(document as DocumentType).webkitFullscreenElement ||
			(document as DocumentType).mozFullScreenElement ||
			(document as DocumentType).msFullscreenElement
		);
	}, []);

	// Enter fullscreen
	const enterFullscreen = useCallback(() => {
		if (typeof document === 'undefined') {
			return;
		}

		const element = elementRef.current;

		if (!element) {
			return;
		}

		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if ((element as ElementType).webkitRequestFullscreen) {
			(element as ElementType).webkitRequestFullscreen();
		} else if ((element as ElementType).mozRequestFullScreen) {
			(element as ElementType).mozRequestFullScreen();
		} else if ((element as ElementType).msRequestFullscreen) {
			(element as ElementType).msRequestFullscreen();
		}
	}, [elementRef]);

	// Exit fullscreen
	const exitFullscreen = useCallback(() => {
		if (typeof document === 'undefined') {
			return;
		}

		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if ((document as DocumentType).webkitExitFullscreen) {
			(document as DocumentType).webkitExitFullscreen();
		} else if ((document as DocumentType).mozCancelFullScreen) {
			(document as DocumentType).mozCancelFullScreen();
		} else if ((document as DocumentType).msExitFullscreen) {
			(document as DocumentType).msExitFullscreen();
		}
	}, []);

	// Toggle fullscreen
	const toggleFullscreen = useCallback(() => {
		if (getFullscreenElement()) {
			exitFullscreen();
		} else {
			enterFullscreen();
		}
	}, [enterFullscreen, exitFullscreen, getFullscreenElement]);

	// Update state when fullscreen changes
	useEffect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		const handleFullscreenChange = () => {
			const fullscreenElement = getFullscreenElement();
			const isCurrentlyFullscreen = !!fullscreenElement;
			setIsFullscreen(isCurrentlyFullscreen);

			if (isCurrentlyFullscreen) {
				options.onEnter?.();
			} else {
				options.onExit?.();
			}
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
		document.addEventListener('mozfullscreenchange', handleFullscreenChange);
		document.addEventListener('MSFullscreenChange', handleFullscreenChange);

		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
			document.removeEventListener(
				'webkitfullscreenchange',
				handleFullscreenChange
			);
			document.removeEventListener(
				'mozfullscreenchange',
				handleFullscreenChange
			);
			document.removeEventListener(
				'MSFullscreenChange',
				handleFullscreenChange
			);
		};
	}, [getFullscreenElement, options]);

	return {
		isFullscreen,
		isFullscreenEnabled: isFullscreenEnabled(),
		toggleFullscreen,
		enterFullscreen,
		exitFullscreen,
	};
}
