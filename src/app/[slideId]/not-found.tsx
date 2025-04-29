'use client';

import Link from 'next/link';

export default function SlideNotFound() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center p-8">
			<h1 className="mb-8 font-bold text-4xl">Slide Not Found</h1>
			<p className="mb-8">The slide you requested does not exist.</p>
			<Link
				href="/1"
				className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
			>
				Go to First Slide
			</Link>
		</div>
	);
}
