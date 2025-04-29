'use client';

import { Loader2 } from 'lucide-react';

/**
 * Loading skeleton for a single slide
 */
export function SlideLoadingSkeleton() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-card to-card/50 p-4">
			<div className="flex items-center justify-center space-x-2 text-muted-foreground">
				<Loader2 className="h-5 w-5 animate-spin" />
				<span>Loading slide...</span>
			</div>
		</div>
	);
}

/**
 * Loading skeleton for next slide in presenter view
 */
export function NextSlideLoadingSkeleton() {
	return (
		<div className="flex h-full w-full animate-pulse flex-col items-center justify-center rounded-lg bg-card/30 p-4">
			<div className="text-muted-foreground text-sm">Loading next slide...</div>
		</div>
	);
}

/**
 * Loading skeleton for grid view
 */
export function GridViewLoadingSkeleton() {
	return (
		<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{Array.from({ length: 8 }).map((_, index) => (
				<div
					key={index}
					className="aspect-video animate-pulse rounded-lg bg-card/30"
				/>
			))}
		</div>
	);
}

/**
 * Loading skeleton for upcoming slides in presenter view
 */
export function UpcomingSlidesLoadingSkeleton() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{Array.from({ length: 4 }).map((_, index) => (
				<div
					key={index}
					className="aspect-video animate-pulse rounded bg-card/30"
				/>
			))}
		</div>
	);
}

/**
 * Loading skeleton for notes in presenter view
 */
export function NotesLoadingSkeleton() {
	return (
		<div className="flex h-full w-full flex-col space-y-2 p-2">
			<div className="h-4 w-3/4 animate-pulse rounded bg-card/50" />
			<div className="h-4 w-1/2 animate-pulse rounded bg-card/50" />
			<div className="h-4 w-5/6 animate-pulse rounded bg-card/50" />
		</div>
	);
}
