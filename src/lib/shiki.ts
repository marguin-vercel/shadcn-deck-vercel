import * as shiki from 'shiki';

// Cache the highlighter instance to avoid recreating it on every request
let highlighterCache: shiki.Highlighter | null = null;

// Cache highlighted code to avoid re-highlighting the same code
const codeCache = new Map<string, string>();

// Generate a cache key based on code, language, theme, and line highlighting
const getCacheKey = (
	code: string,
	lang: string,
	theme: string,
	highlightLines?: number[]
) => {
	return `${code}|${lang}|${theme}|${highlightLines?.join(',') || ''}`;
};

/**
 * Get or create a Shiki highlighter instance
 */
export async function getShikiHighlighter() {
	if (highlighterCache) {
		return highlighterCache;
	}

	// Create a new highlighter with common themes and languages
	highlighterCache = await shiki.createHighlighter({
		themes: [
			'github-dark',
			'github-light',
			'nord',
			'dracula',
			'material-palenight',
		],
		langs: [
			'javascript',
			'typescript',
			'jsx',
			'tsx',
			'html',
			'css',
			'json',
			'markdown',
			'python',
			'rust',
			'go',
			'java',
			'c',
			'cpp',
			'csharp',
			'ruby',
			'php',
			'bash',
			'shell',
			'yaml',
			'toml',
			'sql',
		],
	});

	return highlighterCache;
}

/**
 * Highlight code using Shiki
 */
export async function highlightCode(
	code: string,
	language = 'typescript',
	theme = 'github-dark',
	highlightLines?: number[]
): Promise<string> {
	// Check cache first
	const cacheKey = getCacheKey(code, language, theme, highlightLines);
	const cachedResult = codeCache.get(cacheKey);
	if (cachedResult) {
		return cachedResult;
	}

	try {
		const highlighter = await getShikiHighlighter();
		if (!highlighter) {
			throw new Error('Failed to initialize highlighter');
		}

		// Normalize language to prevent errors with unsupported languages
		let normalizedLang = language;

		// Fallback to typescript if language is not supported
		const loadedLanguages = highlighter.getLoadedLanguages();
		if (!loadedLanguages.includes(normalizedLang as string)) {
			normalizedLang = 'typescript';
		}

		// Highlight the code
		let html = highlighter.codeToHtml(code, {
			lang: normalizedLang,
			theme: theme,
		});

		// If we need to highlight specific lines, we need to modify the HTML
		if (highlightLines && highlightLines.length > 0) {
			// Split the HTML into lines
			const lines = html.split('\n');

			// Add a class to highlighted lines
			// The +1 in the slice is to account for the opening <pre> tag
			for (const lineNumber of highlightLines) {
				if (lineNumber > 0 && lineNumber < lines.length - 1) {
					const lineIndex = lineNumber;
					lines[lineIndex] = lines[lineIndex].replace(
						'<span class="line">',
						'<span class="line highlighted">'
					);
				}
			}

			html = lines.join('\n');
		}

		// Cache the result
		codeCache.set(cacheKey, html);

		return html;
	} catch (error) {
		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.error('Error highlighting code:', error);
		// Fallback to plain text if highlighting fails
		return `<pre><code>${code}</code></pre>`;
	}
}

/**
 * Clear the code cache
 */
export function clearCodeCache() {
	codeCache.clear();
}
