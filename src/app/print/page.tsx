'use client';
import { useReactToPrint } from 'react-to-print';
import { usePresentationStore } from '~/pkgs/deck/core/store/presentation-store';
import { DirectSlidePreview } from '~/pkgs/deck/features/preview/components/direct-slide-preview';
import { useEffect, useRef } from 'react';
import { MenuBar } from '~/components/ui/bottom-menu';
import { Printer as PrintIcon } from 'lucide-react';

export default function PrintPage() {
	const { slides } = usePresentationStore();
	const printRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		contentRef: printRef,
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			handlePrint();
		}, 100);
		return () => clearTimeout(timer);
	}, [handlePrint]);

	return (
		<div className="bg-black text-white print:bg-white print:text-black">
			<div className="fixed inset-x-0 bottom-4 z-50 flex justify-center print:hidden">
				<MenuBar
					items={[
						{
							icon: (props) => <PrintIcon {...props} />,
							label: 'Print',
							onClick: handlePrint,
						},
					]}
				/>
			</div>
			<div ref={printRef}>
				<style jsx global>{`
					@media print {
						@page {
							size: landscape;
							margin: 0;
						}
						html,
						body {
							background: white !important;
							-webkit-print-color-adjust: exact;
							print-color-adjust: exact;
							height: 100%;
						}
						.slide-container {
							page-break-after: always;
							height: 100%;
							width: 100%;
						}
					}
				`}</style>
				{slides.map((slide, index) => (
					<div key={slide.slug} className="slide-container">
						<h1 className="p-8 font-bold">
							Slide {index + 1}: {slide.title}
						</h1>
						<DirectSlidePreview
							component={slide.component}
							baseWidth={1280}
							baseHeight={720}
							centerContent={true}
							fullWidthAutoHeight={true}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
