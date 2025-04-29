'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { usePresentationStore } from '~/store/presentation-store';

export default function PresenterLayout({
	controls,
	currentSlide,
	slideNav, // Added slideNav slot
	notes,
	nextSlide,
	upcomingSlides,
}: {
	controls: ReactNode;
	currentSlide: ReactNode;
	slideNav: ReactNode; // Added slideNav type
	notes: ReactNode;
	nextSlide: ReactNode;
	upcomingSlides: ReactNode;
}) {
	// Initialize presenter mode
	const { setPresenterMode, initSyncListeners } = usePresentationStore();

	// Set presenter mode on component mount
	useEffect(() => {
		// Mark this as presenter view
		setPresenterMode(true);

		// Initialize cross-tab communication
		initSyncListeners();

		// Add a message to the window title to identify presenter view
		if (typeof window !== 'undefined') {
			const oldTitle = document.title;
			document.title = `${oldTitle} (Presenter)`;

			// Cleanup on unmount
			return () => {
				document.title = oldTitle;
				setPresenterMode(false);
			};
		}
	}, [setPresenterMode, initSyncListeners]);

	return (
		<div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background text-foreground">
			{/* Slot for Header Controls */}
			{controls}

			{/* Main Content Area Grid */}
			<div className="grid flex-1 grid-cols-1 gap-6 overflow-hidden p-6 md:grid-cols-3">
				{/* Left Column (Current Slide + Notes) */}
				<div className="flex flex-col space-y-6 overflow-hidden md:col-span-2">
					{/* Slot for Slide Navigation (Prev/Next) */}
					<div className="flex items-center justify-between">{slideNav}</div>
					<div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-border/40 bg-card/30 shadow-sm">
						{/* Slot for Current Slide Preview */}
						<div className="flex-shrink-0 overflow-hidden rounded-t-lg bg-gradient-to-b from-card to-card/50 p-4">
							{currentSlide}
						</div>
						{/* Slot for Speaker Notes */}
						<div className="flex flex-1 flex-col border-border/30 border-t p-3">
							{notes}
						</div>
					</div>
				</div>

				{/* Right Column (Next + Upcoming) */}
				<div className="flex flex-col space-y-6 md:col-span-1">
					{/* Slot for Next Slide Preview */}
					<div className="rounded-lg border border-border/40 bg-card/30 p-4 shadow-sm">
						{nextSlide}
					</div>
					{/* Slot for Upcoming Slides Grid */}
					<div className="flex-1 overflow-y-auto rounded-lg border border-border/40 bg-card/30 p-4 shadow-sm">
						{upcomingSlides}
					</div>
				</div>
			</div>
			{/* We render children here if needed, otherwise the main page.tsx renders null */}
			{/* {children} */}
		</div>
	);
}
