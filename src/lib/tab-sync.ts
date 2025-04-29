/**
 * Cross-tab communication utility for synchronizing slides between presenter and viewer
 */

// Create a shared broadcast channel for slide navigation
let slideChannel: BroadcastChannel | null = null;

// Types for slide navigation messages
type SlideNavigationMessage = {
	type: 'SLIDE_CHANGE';
	slideId: string;
};

export function initTabSync(): BroadcastChannel | null {
	if (typeof window === 'undefined') {
		return null;
	}

	// Only create the channel once
	if (!slideChannel) {
		try {
			slideChannel = new BroadcastChannel('slide-navigation');
		} catch {
			return null;
		}
	}

	return slideChannel;
}

export function broadcastSlideChange(slideId: string): void {
	if (!slideChannel) {
		const channel = initTabSync();
		if (channel) {
			slideChannel = channel;
		} else {
			return; // Can't broadcast if channel creation failed
		}
	}

	const message: SlideNavigationMessage = {
		type: 'SLIDE_CHANGE',
		slideId,
	};

	slideChannel.postMessage(message);
}

export function listenToSlideChanges(
	callback: (slideId: string) => void
): () => void {
	if (!slideChannel) {
		const channel = initTabSync();
		if (channel) {
			slideChannel = channel;
		} else {
			// biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
			return () => {}; // Return no-op if channel creation failed
		}
	}

	const handleMessage = (event: MessageEvent) => {
		const message = event.data as SlideNavigationMessage;

		if (message.type === 'SLIDE_CHANGE') {
			callback(message.slideId);
		}
	};

	slideChannel.addEventListener('message', handleMessage);

	// Return cleanup function
	return () => {
		slideChannel?.removeEventListener('message', handleMessage);
	};
}

export function closeTabSync(): void {
	if (slideChannel) {
		slideChannel.close();
		slideChannel = null;
	}
}
