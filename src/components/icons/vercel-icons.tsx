// Vercel-style icon components
import type { SVGProps } from 'react';

const iconProps: SVGProps<SVGSVGElement> = {
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: '1.5',
	viewBox: '0 0 24 24',
};

export const VercelIcons = {
	Lightning: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
		</svg>
	),

	Shield: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
		</svg>
	),

	Globe: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<circle cx="12" cy="12" r="9" />
			<path d="M12 3v6m0 6v6" />
			<path d="M3 12h6m6 0h6" />
		</svg>
	),

	Lock: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
			<circle cx="12" cy="16" r="1" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	),

	TrendingUp: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
		</svg>
	),

	Users: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
		</svg>
	),

	Square: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<path d="M9 9h6v6H9z" />
			<path d="m9 12 2 2 4-4" />
		</svg>
	),

	Dollar: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<line x1="12" y1="1" x2="12" y2="23" />
			<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
		</svg>
	),

	Star: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
		</svg>
	),

	Trophy: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
			<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
			<path d="M4 22h16" />
			<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
			<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
			<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
		</svg>
	),

	Target: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="6" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	),

	Sun: (props: SVGProps<SVGSVGElement>) => (
		<svg {...iconProps} {...props}>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	),

	// Add Vercel Triangle as brand element
	Triangle: (props: SVGProps<SVGSVGElement>) => (
		<svg {...props} fill="currentColor" viewBox="0 0 24 24">
			<path d="M12 2L22 20H2L12 2Z" />
		</svg>
	),
};