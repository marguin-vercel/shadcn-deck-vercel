import type { Metadata } from 'next';
import { Geist_Mono, Geist as Geist_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import '~/app/globals.css';
import { AppProviders } from './app-providers';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Vercel Deck',
	description: 'A modern, component-based presentation deck system built with Next.js, Vercel design principles, and shadcn UI components',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AppProviders>{children}</AppProviders>
				<Analytics />
			</body>
		</html>
	);
}
