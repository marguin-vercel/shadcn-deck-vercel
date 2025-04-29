'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { type ReactNode, Suspense } from 'react';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { cn } from '~/lib/utils';
import SlideControls from './slide-controls';

function MainContent({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const isPresenterMode = pathname.startsWith('/presenter');
	const isPreview = searchParams.get('preview') === 'true';

	const showControls = !isPresenterMode && !isPreview;

	return (
		<div
			className={cn(
				'bg-bg-black',
				isPreview
					? 'h-full w-full'
					: 'flex h-screen w-screen flex-col items-center justify-center overflow-hidden'
			)}
		>
			<AspectRatio ratio={16 / 9}>{children}</AspectRatio>

			{showControls && <SlideControls />}
		</div>
	);
}

export default function MainLayoutClient({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<Suspense
			fallback={
				<div className="flex h-screen w-screen items-center justify-center bg-background text-white">
					Loading...
				</div>
			}
		>
			<MainContent>{children}</MainContent>
		</Suspense>
	);
}
