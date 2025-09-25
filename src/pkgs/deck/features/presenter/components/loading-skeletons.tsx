'use client';

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
