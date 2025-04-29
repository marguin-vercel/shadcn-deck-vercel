'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './button';

export function ThemeToggle({
	className,
	variant = 'ghost',
	size = 'icon',
	showLabel = false,
}: {
	className?: string;
	variant?: 'ghost' | 'outline';
	size?: 'icon' | 'sm';
	showLabel?: boolean;
}) {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';

	const toggleTheme = () => {
		setTheme(isDark ? 'light' : 'dark');
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={className}
			onClick={toggleTheme}
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
		>
			{isDark ? (
				<>
					<Sun className="h-4 w-4" />
					{showLabel && <span className="ml-2">Light Mode</span>}
				</>
			) : (
				<>
					<Moon className="h-4 w-4" />
					{showLabel && <span className="ml-2">Dark Mode</span>}
				</>
			)}
		</Button>
	);
}
