'use client';

import { notFound, usePathname } from 'next/navigation';
import { createElement, use, useEffect } from 'react';

import { getSlideDataById } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

interface PageParams {
	slideId: string;
}

interface UrlChangeEvent extends CustomEvent {
	detail: {
		path: string;
		slideId: string;
	};
}

const REGEX = /^\/([^/]+)$/;

export default function SlidePage({ params }: { params: Promise<PageParams> }) {
	const pathname = usePathname();
	const unwrappedParams = use(params);
	const initialSlideId = unwrappedParams.slideId;

	// Use our centralized store instead of local state
	const { slideId, setSlideId, initSyncListeners } = usePresentationStore();

	// Initialize slide on first render
	useEffect(() => {
		setSlideId(initialSlideId);
	}, [initialSlideId, setSlideId]);

	// Update slideId when path changes (including after history.pushState)
	useEffect(() => {
		// Extract slideId from pathname
		const match = pathname.match(REGEX);
		if (match?.[1]) {
			setSlideId(match[1]);
		}
	}, [pathname, setSlideId]);

	// Listen for custom URL change events from shallow routing
	useEffect(() => {
		const handleUrlChange = (event: UrlChangeEvent) => {
			if (event.detail?.slideId) {
				setSlideId(event.detail.slideId);
			}
		};

		window.addEventListener('urlchange', handleUrlChange as EventListener);
		return () => {
			window.removeEventListener('urlchange', handleUrlChange as EventListener);
		};
	}, [setSlideId]);

	// Initialize tab sync to receive commands from presenter
	useEffect(() => {
		// Initialize cross-tab communication listener
		initSyncListeners();
	}, [initSyncListeners]);

	const slideData = getSlideDataById(slideId || initialSlideId);

	if (!slideData) {
		notFound();
	}

	return createElement(slideData.component);
}
