'use client';

import { usePresentation } from '~/hooks/use-presentation';

export default function ProgressIndicator() {
	const { currentSlideIndex, totalSlides } = usePresentation();

	const progressPercentage =
		totalSlides > 0 ? ((currentSlideIndex + 1) / totalSlides) * 100 : 0;

	return (
		<div className="flex items-center gap-2">
			<div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-800">
				<div
					className="h-full rounded-full bg-white"
					style={{ width: `${progressPercentage}%` }}
					aria-label={`Progress: ${currentSlideIndex + 1} of ${totalSlides} slides`}
				/>
			</div>
			<span className="text-gray-300 text-sm">
				{currentSlideIndex + 1}/{totalSlides}
			</span>
		</div>
	);
}
