'use client';

import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { SlidePageWrapper } from '~/pkgs/deck';

function SlideContent() {
	const params = useParams();
	const slug = params.slug as string;

	return <SlidePageWrapper slug={slug} />;
}

export default function SlidePage() {
	return (
		<Suspense
			fallback={
				<div className="flex h-screen w-screen items-center justify-center bg-background">
					<div className="text-muted-foreground">Loading slide...</div>
				</div>
			}
		>
			<SlideContent />
		</Suspense>
	);
}
