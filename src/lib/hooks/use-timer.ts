import { useCallback, useEffect, useState } from 'react';

/**
 * Custom hook for managing a timer with start/reset functionality
 * @returns Timer state and control functions
 */
export function useTimer() {
	const [isRunning, setIsRunning] = useState(false);
	const [seconds, setSeconds] = useState(0);

	// Start or reset the timer
	const toggleTimer = useCallback(() => {
		if (isRunning) {
			// If already running, stop and reset
			setIsRunning(false);
			setSeconds(0);
		} else {
			// If not running, just start
			setIsRunning(true);
		}
	}, [isRunning]);

	// Reset timer to zero without changing the running state
	const resetTimer = useCallback(() => {
		setSeconds(0);
	}, []);

	// Timer effect with proper cleanup
	useEffect(() => {
		let timerInterval: NodeJS.Timeout | undefined;

		if (isRunning) {
			timerInterval = setInterval(() => {
				setSeconds((prev) => prev + 1);
			}, 1000);
		}

		// Cleanup function to clear interval when component unmounts or dependencies change
		return () => {
			if (timerInterval) {
				clearInterval(timerInterval);
				timerInterval = undefined;
			}
		};
	}, [isRunning]);

	// Format time as MM:SS
	const formatTime = useCallback((totalSeconds: number) => {
		const minutes = Math.floor(totalSeconds / 60);
		const remainingSeconds = totalSeconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	}, []);

	return {
		isRunning,
		seconds,
		toggleTimer,
		resetTimer,
		formattedTime: formatTime(seconds),
	};
}
