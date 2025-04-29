'use client';

import { createContext, useContext } from 'react';

export type DeckContextType = {
	activeSlide: number;
	totalSlides: number;
	goToSlide: (index: number) => void;
	goToNextSlide: () => void;
	goToPreviousSlide: () => void;
	isFirstSlide: boolean;
	isLastSlide: boolean;
	theme: 'dark' | 'light' | 'vercel';
	isFullscreen: boolean;
	toggleFullscreen: () => void;
};

export const DeckContext = createContext<DeckContextType | undefined>(
	undefined
);

export const useDeck = () => {
	const context = useContext(DeckContext);
	if (!context) {
		throw new Error('useDeck must be used within a DeckProvider');
	}
	return context;
};
