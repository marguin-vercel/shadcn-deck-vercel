'use client';

import { MessageSquare } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { cn } from '~/lib/utils';
import { getSlideDataById } from '~/presentation/router';
import { usePresentationStore } from '~/store/presentation-store';

export default function NotesPage() {
	const params = useParams();
	const { slideId } = usePresentationStore();

	// Get the current slide ID either from the Zustand store or URL params
	const currentSlideId = slideId || (params?.slideId as string);

	// Use useMemo for slide data to avoid redundant calls
	const slide = useMemo(() => {
		return getSlideDataById(currentSlideId) || null;
	}, [currentSlideId]);

	if (!slide) {
		return null; // TransitionWrapper will handle loading state
	}

	return (
		<>
			<div className="mb-2 flex items-center justify-between">
				<h4 className="flex items-center gap-1.5 font-medium text-foreground text-sm">
					<MessageSquare className="h-4 w-4 text-primary/70" />
					Speaker Notes
				</h4>
				{/* Expand/Collapse button placeholder */}
			</div>
			<div
				className={cn(
					'relative flex-1 overflow-y-auto rounded-md border border-border/40 bg-card p-4',
					!slide.notes &&
						'flex items-center justify-center text-muted-foreground italic'
				)}
			>
				{slide.notes ? (
					<div className="prose prose-sm dark:prose-invert h-full max-w-none">
						<pre className="m-0 h-full overflow-y-auto whitespace-pre-wrap border-none bg-transparent p-0 font-mono text-foreground/90 text-sm">
							{slide.notes}
						</pre>
					</div>
				) : (
					<p>No notes for this slide</p>
				)}
				<div className="absolute top-2 right-2 rounded-full bg-primary/90 px-2 py-0.5 text-primary-foreground text-xs shadow-sm">
					Slide {slide.id}
				</div>
			</div>
		</>
	);
}
