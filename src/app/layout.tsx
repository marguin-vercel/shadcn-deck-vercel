import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/react"

import { DeckContextAdapter } from './components/deck-context-adapter';
import MainLayoutClient from './components/main-layout.client';
import { Providers } from './providers';
import { DeckProvider } from './providers/deck-provider';
import { ViewTransitionsProvider } from './providers/view-transitions-provider';

import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'shadcn/deck',
	description:
		'A modern, component-based presentation deck system built with Next.js and shadcn UI components',
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
				<Providers>
					<ViewTransitionsProvider>
						<DeckProvider>
							<DeckContextAdapter>
								<MainLayoutClient>{children}</MainLayoutClient>
							</DeckContextAdapter>
						</DeckProvider>
					</ViewTransitionsProvider>
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
