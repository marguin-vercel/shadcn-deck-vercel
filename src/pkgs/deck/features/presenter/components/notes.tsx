'use client';

import { MessageSquare } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/lib/utils';
import { useHasHydrated } from '../../../core/hooks';
import { getSlideDataBySlug } from '../../../core/services/slides-service';
import { usePresentationStore } from '../../../core/store/presentation-store';

export function Notes() {
	const params = useParams();
	const { slug } = usePresentationStore();
	const hasHydrated = useHasHydrated();

	// Get the current slide ID either from the Zustand store or URL params
	const currentSlug = hasHydrated ? slug || (params?.slug as string) : null;

	// Use useMemo for slide data to avoid redundant calls
	const slide = useMemo(() => {
		if (!currentSlug) return null;
		return getSlideDataBySlug(currentSlug) || null;
	}, [currentSlug]);

	if (!slide || !hasHydrated) {
		return null; // TransitionWrapper will handle loading state
	}

	return (
		<Card className="overflow-y-scroll">
			<CardHeader>
				<CardTitle className="flex items-center gap-1.5 text-sm">
					<MessageSquare className="h-4 w-4 text-primary" />
					Speaker Notes
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div
					className={cn(
						'relative min-h-[100px] rounded-md bg-background p-4',
						!slide.notes &&
							'flex items-center justify-center text-muted-foreground italic'
					)}
				>
					{slide.notes ? (
						<div className="prose prose-sm dark:prose-invert max-w-none">
							<pre className="m-0 whitespace-pre-wrap border-none bg-transparent p-0 font-mono text-foreground/90 text-sm">
								{slide.notes}
							</pre>
						</div>
					) : (
						<p>No notes for this slide</p>
					)}
					<div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-0.5 text-primary-foreground text-xs shadow-sm">
						Slide {slide.slug}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
