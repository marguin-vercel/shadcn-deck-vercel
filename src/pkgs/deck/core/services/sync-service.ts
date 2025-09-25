import type {
	ISyncService,
	NavigationContext,
	SyncMessage,
} from '~/pkgs/deck/core/types/types';

export class SyncService implements ISyncService {
	private channel: BroadcastChannel | null = null;
	private messageHandler: ((event: MessageEvent) => void) | null = null;
	private isPresenter: boolean;
	private isDestroyed = false;
	private tabId: string;
	private onSlideChangeCallback:
		| ((slug: string, context?: NavigationContext) => void)
		| null = null;
	private lastBroadcastTime = 0;
	private readonly BROADCAST_COOLDOWN = 500; // 500ms cooldown to prevent loops

	constructor(isPresenter = false) {
		this.isPresenter = isPresenter;
		this.tabId = `tab-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
	}

	init(
		onSlideChange: (slug: string, context?: NavigationContext) => void
	): void {
		if (this.isDestroyed) {
			console.warn('SyncService: Cannot initialize destroyed service');
			return;
		}

		if (typeof window === 'undefined') {
			return;
		}

		try {
			// Store the callback
			this.onSlideChangeCallback = onSlideChange;

			// Don't destroy existing channel if it's working
			if (!this.channel) {
				this.channel = new BroadcastChannel('slide-navigation');
			}

			// Remove old handler if exists
			if (this.messageHandler) {
				this.channel.removeEventListener('message', this.messageHandler);
			}

			this.messageHandler = (event: MessageEvent) => {
				try {
					const message = event.data as SyncMessage;

					// Don't process our own messages
					if (
						message.source === this.tabId ||
						message.source?.includes(this.tabId)
					) {
						return;
					}

					// Check if this message is too recent (prevent loops)
					const timeSinceLastBroadcast = Date.now() - this.lastBroadcastTime;
					if (timeSinceLastBroadcast < this.BROADCAST_COOLDOWN) {
						return;
					}

					if (message.type === 'SLIDE_CHANGE' && message.slug) {
						const context: NavigationContext = {
							direction: 'direct',
							fromSlug: '',
							toSlug: message.slug,
							timestamp: message.timestamp || Date.now(),
						};

						if (this.onSlideChangeCallback) {
							this.onSlideChangeCallback(message.slug, context);
						} else {
							console.warn(
								'⚠️ SyncService: No callback available for slide change'
							);
						}
					}
				} catch (error) {
					console.error('SyncService: Error handling message:', error);
				}
			};

			this.channel.addEventListener('message', this.messageHandler);

			// Handle channel errors
			this.channel.addEventListener('messageerror', (error) => {
				console.error('SyncService: BroadcastChannel error:', error);
			});
		} catch (error) {
			console.error('SyncService: Failed to initialize:', error);
		}
	}

	broadcast(slug: string, context?: NavigationContext): void {
		if (this.isDestroyed || !this.channel) {
			console.warn(
				'⚠️ SyncService: Cannot broadcast - service destroyed or no channel'
			);
			return;
		}

		// Check cooldown to prevent rapid broadcasts
		const now = Date.now();
		const timeSinceLastBroadcast = now - this.lastBroadcastTime;
		if (timeSinceLastBroadcast < this.BROADCAST_COOLDOWN) {
			console.warn('⚠️ SyncService: Broadcast blocked by cooldown', {
				timeSinceLastBroadcast,
				cooldown: this.BROADCAST_COOLDOWN,
				remaining: this.BROADCAST_COOLDOWN - timeSinceLastBroadcast,
			});
			return;
		}

		try {
			const message: SyncMessage = {
				type: 'SLIDE_CHANGE',
				slug,
				timestamp: context?.timestamp || now,
				source: `${this.tabId}${this.isPresenter ? '-presenter' : '-viewer'}`,
			};

			this.channel.postMessage(message);
			this.lastBroadcastTime = now;
		} catch (error) {
			console.error('❌ SyncService: Failed to broadcast:', error);
		}
	}

	isConnected(): boolean {
		return !this.isDestroyed && this.channel !== null;
	}

	setPresenterMode(isPresenter: boolean): void {
		const wasPresenter = this.isPresenter;
		this.isPresenter = isPresenter;

		if (wasPresenter !== isPresenter) {
			// Update tab ID to reflect new mode
			this.tabId = `tab-${Math.random().toString(36).substr(2, 9)}-${Date.now()}${isPresenter ? '-presenter' : '-viewer'}`;

			// Re-initialize with new mode if we have a callback
			if (this.onSlideChangeCallback && this.channel) {
				this.init(this.onSlideChangeCallback);
			}
		}
	}

	destroy(): void {
		if (this.messageHandler && this.channel) {
			this.channel.removeEventListener('message', this.messageHandler);
			this.channel.removeEventListener('messageerror', () => {});
		}

		if (this.channel) {
			try {
				this.channel.close();
			} catch (error) {
				console.error('SyncService: Error closing channel:', error);
			}
			this.channel = null;
		}

		this.messageHandler = null;
		this.onSlideChangeCallback = null;
		this.isDestroyed = true;
	}
}
