import {
	NextSlideLoadingSkeleton,
	NotesLoadingSkeleton,
	SlideLoadingSkeleton,
	UpcomingSlidesLoadingSkeleton,
} from '~/app/components/loading-skeletons';

export default function PresenterLoading() {
	return (
		<div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background text-foreground">
			{/* Header Loading Skeleton */}
			<div className="border-border/40 border-b bg-card/50 p-3 backdrop-blur-sm">
				<div className="flex items-center justify-between">
					<div className="h-8 w-32 animate-pulse rounded-full bg-card/70" />
					<div className="flex items-center gap-4">
						<div className="h-8 w-40 animate-pulse rounded-full bg-card/70" />
					</div>
				</div>
			</div>

			{/* Main Content Loading Skeleton */}
			<div className="grid flex-1 grid-cols-1 gap-6 overflow-hidden p-6 md:grid-cols-3">
				{/* Left Column */}
				<div className="flex flex-col space-y-6 overflow-hidden md:col-span-2">
					{/* Slide Nav Skeleton */}
					<div className="flex items-center justify-between">
						<div className="h-10 w-24 animate-pulse rounded-md bg-card/70" />
					</div>

					<div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-border/40 bg-card/30 shadow-sm">
						{/* Current Slide Skeleton */}
						<div className="flex-shrink-0 overflow-hidden rounded-t-lg bg-gradient-to-b from-card to-card/50 p-4">
							<SlideLoadingSkeleton />
						</div>

						{/* Notes Skeleton */}
						<div className="flex flex-1 flex-col border-border/30 border-t p-3">
							<NotesLoadingSkeleton />
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="flex flex-col space-y-6 md:col-span-1">
					{/* Next Slide Skeleton */}
					<div className="rounded-lg border border-border/40 bg-card/30 p-4 shadow-sm">
						<NextSlideLoadingSkeleton />
					</div>

					{/* Upcoming Slides Skeleton */}
					<div className="flex-1 overflow-y-auto rounded-lg border border-border/40 bg-card/30 p-4 shadow-sm">
						<div className="mb-3 flex items-center">
							<div className="h-6 w-24 animate-pulse rounded-full bg-card/70" />
						</div>
						<UpcomingSlidesLoadingSkeleton />
					</div>
				</div>
			</div>
		</div>
	);
}
