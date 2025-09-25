'use client';

import type { ComponentType } from 'react';

import { AspectRatioScaler } from './aspect-ratio-scaler';

export function DirectSlidePreview({
	component: SlideComponent,
	baseWidth,
	baseHeight,
	className,
	disablePointerEvents,
	centerContent = false,
	prioritizeWidth = false,
	allowOverflow = false,
	fullWidthAutoHeight = false,
}: {
	component: ComponentType;
	baseWidth: number;
	baseHeight: number;
	className?: string;
	disablePointerEvents?: boolean;
	centerContent?: boolean;
	prioritizeWidth?: boolean;
	allowOverflow?: boolean;
	fullWidthAutoHeight?: boolean;
}) {
	return (
		<AspectRatioScaler
			designWidth={baseWidth}
			designHeight={baseHeight}
			className={className}
			disablePointerEvents={disablePointerEvents}
			centerContent={centerContent}
			prioritizeWidth={prioritizeWidth}
			allowOverflow={allowOverflow}
			fullWidthAutoHeight={fullWidthAutoHeight}
		>
			<SlideComponent />
		</AspectRatioScaler>
	);
}
