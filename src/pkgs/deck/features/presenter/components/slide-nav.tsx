'use client';
import {
	ChevronLeft,
	ChevronRight,
	MessageSquare,
	Minimize2,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { ThemeToggle } from '~/components/ui/theme-toggle';
import { cn } from '~/lib/utils';
import { useHasHydrated, usePresentation } from '../../../core/hooks';

// Note: Expand/Collapse state for notes might need separate handling
// if notes area itself is a server component. For now, assume we need a client state here.

export function SlideNav() {
	const {
		goToNextSlide,
		goToPreviousSlide,
		isFirstSlide,
		isLastSlide,
		totalSlides,
		currentSlideIndex,
	} = usePresentation();
	const hasHydrated = useHasHydrated();

	// Local state for notes expansion - this might be better placed
	// in a dedicated client component wrapper around the @notes slot page if needed.
	const [isNotesExpanded, setIsNotesExpanded] = useState(false);

	if (!hasHydrated) {
		return null;
	}

	const slideProgress = Math.round(
		((currentSlideIndex + 1) / totalSlides) * 100
	);

	return (
		<div className="flex flex-grow flex-col space-y-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1.5">
					<span className="rounded-full bg-primary px-2 py-0.5 text-primary-foreground text-xs">
						{currentSlideIndex + 1}/{totalSlides}
					</span>
					<div className="text-muted-foreground text-sm">
						Progress: {slideProgress}%
					</div>
				</div>
				<div className="flex items-center gap-2">
					{/* Notes Toggle */}
					<Button
						onClick={() => setIsNotesExpanded((prev) => !prev)}
						variant="outline"
						size="icon"
						className="size-8 rounded-full border-border"
						title={isNotesExpanded ? 'Minimize notes' : 'Expand notes'}
					>
						{isNotesExpanded ? (
							<Minimize2 className="h-3.5 w-3.5 text-muted-foreground" />
						) : (
							<MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
						)}
					</Button>

					<Button
						onClick={goToPreviousSlide}
						disabled={isFirstSlide}
						variant="outline"
						size="icon"
						className={cn(
							'size-8 rounded-full border-border',
							isFirstSlide && 'opacity-40'
						)}
						aria-label="Previous Slide"
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					<Button
						onClick={goToNextSlide}
						disabled={isLastSlide}
						variant="outline"
						size="icon"
						className={cn(
							'size-8 rounded-full border-border',
							isLastSlide && 'opacity-40'
						)}
						aria-label="Next Slide"
					>
						<ChevronRight className="h-4 w-4" />
					</Button>

					<ThemeToggle variant="outline" size="sm" showLabel={true} />
				</div>
			</div>

			{/* Progress bar */}
			<div className="h-1 w-full overflow-hidden rounded-full bg-card">
				<div
					className="h-full bg-primary transition-all duration-300 ease-in-out"
					style={{ width: `${slideProgress}%` }}
				/>
			</div>
		</div>
	);
}
