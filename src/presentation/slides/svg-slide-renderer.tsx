import { Slide } from '~/components/presentation';
import type { SlideDefinition } from '~/pkgs/deck';
import { useEffect, useState } from 'react';

interface SvgSlideProps {
	slideNumber: number;
	title: string;
	notes?: string;
}

export function createSvgSlide({ slideNumber, title, notes }: SvgSlideProps): SlideDefinition {
	return {
		slug: `slide-${slideNumber.toString().padStart(2, '0')}`,
		component: () => <SvgSlideComponent slideNumber={slideNumber} />,
		notes: notes || `Slide ${slideNumber} from original Vercel presentation`,
		title,
	};
}

function SvgSlideComponent({ slideNumber }: { slideNumber: number }) {
	const [svgContent, setSvgContent] = useState<string>('');

	useEffect(() => {
		const loadSvg = async () => {
			try {
				const response = await fetch(`/svg-pages/${slideNumber}.svg`);
				if (response.ok) {
					const content = await response.text();
					setSvgContent(content);
				}
			} catch (error) {
				console.error(`Failed to load slide ${slideNumber}:`, error);
			}
		};

		loadSvg();
	}, [slideNumber]);

	if (!svgContent) {
		return (
			<Slide contentPosition="center" padding="none">
				<div className="flex items-center justify-center w-full h-full text-white">
					Loading slide {slideNumber}...
				</div>
			</Slide>
		);
	}

	return (
		<Slide contentPosition="center" padding="none">
			<div
				className="w-full h-full flex items-center justify-center"
				dangerouslySetInnerHTML={{ __html: svgContent }}
			/>
		</Slide>
	);
}