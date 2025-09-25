'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook that provides the current time in HH:MM format
 * with automatic updating every second
 * @returns Current time as a formatted string
 */
export function useClock() {
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		// Function to update the clock
		const updateClock = () => {
			const now = new Date();
			const timeString = now.toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			});
			setCurrentTime(timeString);
		};

		// Update immediately, then set interval
		updateClock();
		const interval = setInterval(updateClock, 1000);

		// Cleanup function to clear interval when component unmounts
		return () => clearInterval(interval);
	}, []);

	return currentTime;
}
