// This file contains utilities for syntax highlighting using react-syntax-highlighter
// It's a simpler alternative to Shiki that works well with Next.js

import type { CSSProperties } from 'react';

// Define PrismTheme interface to replace the import
interface PrismStylesItem {
	types: string[];
	style: CSSProperties;
}

interface PrismTheme {
	plain: CSSProperties;
	styles: PrismStylesItem[];
}

// Cache for highlighted code to improve performance
const codeCache = new Map<string, string>();

// Generate a cache key based on code, language, theme, and line highlighting
export const getCacheKey = (
	code: string,
	lang: string,
	theme: string,
	highlightLines?: number[]
) => {
	return `${code}|${lang}|${theme}|${highlightLines?.join(',') || ''}`;
};

// Clear the code cache
export function clearCodeCache() {
	codeCache.clear();
}

// Define theme mappings for our presentation system
export const getThemeMapping = (theme: 'dark' | 'light' | 'vercel'): string => {
	switch (theme) {
		case 'light':
			return 'vs';
		case 'vercel':
			return 'vsDark';
		default:
			return 'atomDark';
	}
};

// Custom theme for Vercel-inspired styling
export const vercelTheme: PrismTheme = {
	plain: {
		color: '#f8f8f2',
		backgroundColor: '#111111',
	},
	styles: [
		{
			types: ['prolog', 'constant', 'builtin'],
			style: {
				color: '#0070f3',
			},
		},
		{
			types: ['inserted', 'function'],
			style: {
				color: '#50e3c2',
			},
		},
		{
			types: ['deleted'],
			style: {
				color: '#ff0000',
			},
		},
		{
			types: ['changed'],
			style: {
				color: '#7928ca',
			},
		},
		{
			types: ['punctuation', 'symbol'],
			style: {
				color: '#f8f8f2',
			},
		},
		{
			types: ['string', 'char', 'tag', 'selector'],
			style: {
				color: '#50e3c2',
			},
		},
		{
			types: ['keyword', 'variable'],
			style: {
				color: '#ff0080',
				fontStyle: 'italic',
			},
		},
		{
			types: ['comment'],
			style: {
				color: '#6272a4',
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: '#50e3c2',
				fontStyle: 'italic',
			},
		},
	],
};
