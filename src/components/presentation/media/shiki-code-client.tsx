'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export interface ShikiCodeClientProps {
	highlightedHtml: string;
	className?: string;
	fontSize?: 'xs' | 'sm' | 'md' | 'lg';
	onCopy?: () => void;
}

/**
 * ShikiCodeClient component - Client component wrapper for ShikiCode
 * Adds interactive features like copy button
 */
export function ShikiCodeClient({
	highlightedHtml,
	className,
	fontSize = 'md',
	onCopy,
}: ShikiCodeClientProps) {
	const [copied, setCopied] = useState(false);

	// Font size classes
	const fontSizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
	};

	// Extract plain text from HTML for copying
	const getPlainTextFromHtml = (html: string) => {
		// Create a temporary element to parse the HTML
		const temp = document.createElement('div');
		temp.innerHTML = html;
		return temp.textContent || temp.innerText || '';
	};

	const handleCopy = () => {
		const plainText = getPlainTextFromHtml(highlightedHtml);
		navigator.clipboard.writeText(plainText).then(() => {
			setCopied(true);
			if (onCopy) {
				onCopy();
			}

			// Reset copied state after 2 seconds
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		});
	};

	return (
		<div
			className={cn(
				'group relative overflow-hidden rounded-lg border border-[#333333] font-mono',
				fontSizeClasses[fontSize],
				className
			)}
		>
			{/* Copy button */}
			<Button
				onClick={handleCopy}
				variant="ghost"
				size="icon"
				className="absolute top-2 right-2 rounded bg-[#333333] p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
				aria-label="Copy code"
			>
				{copied ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<title>Copied</title>
						<polyline points="20 6 9 17 4 12" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<title>Copy</title>
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
					</svg>
				)}
			</Button>

			{/* Highlighted code */}
			<div
				className="shiki-container"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: highlightedHtml }}
			/>
		</div>
	);
}
